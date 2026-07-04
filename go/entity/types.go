// Typed models for the ParlamentOpenData SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Business is the typed data model for the business entity.
type Business struct {
	Author *string `json:"author,omitempty"`
	Council *string `json:"council,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *int `json:"id,omitempty"`
	State *string `json:"state,omitempty"`
	SubmissionDate *string `json:"submission_date,omitempty"`
	Title *string `json:"title,omitempty"`
	Type *string `json:"type,omitempty"`
}

// BusinessListMatch mirrors the business fields as an all-optional match
// filter (Go analog of Partial<Business>).
type BusinessListMatch struct {
	Author *string `json:"author,omitempty"`
	Council *string `json:"council,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *int `json:"id,omitempty"`
	State *string `json:"state,omitempty"`
	SubmissionDate *string `json:"submission_date,omitempty"`
	Title *string `json:"title,omitempty"`
	Type *string `json:"type,omitempty"`
}

// Member is the typed data model for the member entity.
type Member struct {
	Active *bool `json:"active,omitempty"`
	Canton *string `json:"canton,omitempty"`
	Council *string `json:"council,omitempty"`
	EntryDate *string `json:"entry_date,omitempty"`
	FirstName *string `json:"first_name,omitempty"`
	Id *int `json:"id,omitempty"`
	LastName *string `json:"last_name,omitempty"`
	LeavingDate *string `json:"leaving_date,omitempty"`
	Party *string `json:"party,omitempty"`
	Title *string `json:"title,omitempty"`
}

// MemberListMatch mirrors the member fields as an all-optional match
// filter (Go analog of Partial<Member>).
type MemberListMatch struct {
	Active *bool `json:"active,omitempty"`
	Canton *string `json:"canton,omitempty"`
	Council *string `json:"council,omitempty"`
	EntryDate *string `json:"entry_date,omitempty"`
	FirstName *string `json:"first_name,omitempty"`
	Id *int `json:"id,omitempty"`
	LastName *string `json:"last_name,omitempty"`
	LeavingDate *string `json:"leaving_date,omitempty"`
	Party *string `json:"party,omitempty"`
	Title *string `json:"title,omitempty"`
}

// Session is the typed data model for the session entity.
type Session struct {
	Abbreviation *string `json:"abbreviation,omitempty"`
	EndDate *string `json:"end_date,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
	State *string `json:"state,omitempty"`
	Type *string `json:"type,omitempty"`
}

// SessionListMatch mirrors the session fields as an all-optional match
// filter (Go analog of Partial<Session>).
type SessionListMatch struct {
	Abbreviation *string `json:"abbreviation,omitempty"`
	EndDate *string `json:"end_date,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
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

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
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

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
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
