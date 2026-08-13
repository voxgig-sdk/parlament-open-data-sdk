// Typed models for the ParlamentOpenData SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/parlament-open-data-sdk/go/core"
)

// Business is the typed data model for the business entity.
type Business struct {
	Author *string `json:"author,omitempty"`
	Council *string `json:"council,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *int `json:"id,omitempty"`
	State *string `json:"state,omitempty"`
	SubmissionDate *string `json:"submissionDate,omitempty"`
	Title *string `json:"title,omitempty"`
	Type *string `json:"type,omitempty"`
}

// BusinessListMatch is the typed request payload for Business.ListTyped.
type BusinessListMatch struct {
	Author *string `json:"author,omitempty"`
	Council *string `json:"council,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *int `json:"id,omitempty"`
	State *string `json:"state,omitempty"`
	SubmissionDate *string `json:"submissionDate,omitempty"`
	Title *string `json:"title,omitempty"`
	Type *string `json:"type,omitempty"`
}

// Member is the typed data model for the member entity.
type Member struct {
	Active *bool `json:"active,omitempty"`
	Canton *string `json:"canton,omitempty"`
	Council *string `json:"council,omitempty"`
	EntryDate *string `json:"entryDate,omitempty"`
	FirstName *string `json:"firstName,omitempty"`
	Id *int `json:"id,omitempty"`
	LastName *string `json:"lastName,omitempty"`
	LeavingDate *string `json:"leavingDate,omitempty"`
	Party *string `json:"party,omitempty"`
	Title *string `json:"title,omitempty"`
}

// MemberListMatch is the typed request payload for Member.ListTyped.
type MemberListMatch struct {
	Active *bool `json:"active,omitempty"`
	Canton *string `json:"canton,omitempty"`
	Council *string `json:"council,omitempty"`
	EntryDate *string `json:"entryDate,omitempty"`
	FirstName *string `json:"firstName,omitempty"`
	Id *int `json:"id,omitempty"`
	LastName *string `json:"lastName,omitempty"`
	LeavingDate *string `json:"leavingDate,omitempty"`
	Party *string `json:"party,omitempty"`
	Title *string `json:"title,omitempty"`
}

// Session is the typed data model for the session entity.
type Session struct {
	Abbreviation *string `json:"abbreviation,omitempty"`
	EndDate *string `json:"endDate,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	StartDate *string `json:"startDate,omitempty"`
	State *string `json:"state,omitempty"`
	Type *string `json:"type,omitempty"`
}

// SessionListMatch is the typed request payload for Session.ListTyped.
type SessionListMatch struct {
	Abbreviation *string `json:"abbreviation,omitempty"`
	EndDate *string `json:"endDate,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	StartDate *string `json:"startDate,omitempty"`
	State *string `json:"state,omitempty"`
	Type *string `json:"type,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
