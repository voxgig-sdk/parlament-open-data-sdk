package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "ParlamentOpenData",
			"slug": "parlament-open-data",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://ws-old.parlament.ch",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"business": map[string]any{},
				"member": map[string]any{},
				"session": map[string]any{},
			},
		},
		"entity": map[string]any{
			"business": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "author",
						"short": "Author of the affair",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "council",
						"short": "Council handling the affair",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "Detailed description of the affair",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique affair identifier",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "state",
						"short": "Current state/status of the affair",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date",
						"name": "submissionDate",
						"short": "Date of submission",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"short": "Affair title",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "Type of parliamentary affair",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "business",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "json",
											"kind": "query",
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "de",
											"kind": "query",
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "state",
											"orig": "state",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/affairs",
								"segments": []any{
									map[string]any{
										"lit": "affairs",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"format",
										"id",
										"language",
										"state",
										"type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.affairs`",
								},
								"parts": []any{
									"affairs",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"member": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "active",
						"short": "Whether the councillor is currently active",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "canton",
						"short": "Canton abbreviation",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "council",
						"short": "Council membership (National Council or Council of States)",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date",
						"name": "entryDate",
						"short": "Date of entry into parliament",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "firstName",
						"short": "First name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique councillor identifier",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "lastName",
						"short": "Last name",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date",
						"name": "leavingDate",
						"short": "Date of leaving parliament (if applicable)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "party",
						"short": "Political party abbreviation",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"short": "Academic or professional title",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "member",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "active",
											"orig": "active",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "json",
											"kind": "query",
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "de",
											"kind": "query",
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/councillors",
								"segments": []any{
									map[string]any{
										"lit": "councillors",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"active",
										"format",
										"id",
										"language",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.councillors`",
								},
								"parts": []any{
									"councillors",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"session": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "abbreviation",
						"short": "Session abbreviation",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date",
						"name": "endDate",
						"short": "Session end date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique session identifier",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"short": "Session name",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date",
						"name": "startDate",
						"short": "Session start date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "state",
						"short": "Current state of the session",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "Type of session (e.g., ordinary, extraordinary)",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "session",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "json",
											"kind": "query",
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "de",
											"kind": "query",
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "session_id",
											"orig": "session_id",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/sessions",
								"segments": []any{
									map[string]any{
										"lit": "sessions",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"format",
										"language",
										"session_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.sessions`",
								},
								"parts": []any{
									"sessions",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
