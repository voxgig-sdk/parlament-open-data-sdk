package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/parlament-open-data-sdk"
	"github.com/voxgig-sdk/parlament-open-data-sdk/core"

	vs "github.com/voxgig/struct"
)

func TestSessionEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Session(nil)
		if ent == nil {
			t.Fatal("expected non-nil SessionEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := sessionBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "session." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set PARLAMENTOPENDATA_TEST_SESSION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		sessionRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.session", setup.data)))
		var sessionRef01Data map[string]any
		if len(sessionRef01DataRaw) > 0 {
			sessionRef01Data = core.ToMapAny(sessionRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = sessionRef01Data

		// LIST
		sessionRef01Ent := client.Session(nil)
		sessionRef01Match := map[string]any{}

		sessionRef01ListResult, err := sessionRef01Ent.List(sessionRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, sessionRef01ListOk := sessionRef01ListResult.([]any)
		if !sessionRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", sessionRef01ListResult)
		}

	})
}

func sessionBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "session", "SessionTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read session test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse session test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"session01", "session02", "session03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("PARLAMENTOPENDATA_TEST_SESSION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"PARLAMENTOPENDATA_TEST_SESSION_ENTID": idmap,
		"PARLAMENTOPENDATA_TEST_LIVE":      "FALSE",
		"PARLAMENTOPENDATA_TEST_EXPLAIN":   "FALSE",
		"PARLAMENTOPENDATA_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["PARLAMENTOPENDATA_TEST_SESSION_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["PARLAMENTOPENDATA_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["PARLAMENTOPENDATA_APIKEY"],
			},
			extra,
		})
		client = sdk.NewParlamentOpenDataSDK(core.ToMapAny(mergedOpts))
	}

	live := env["PARLAMENTOPENDATA_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["PARLAMENTOPENDATA_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
