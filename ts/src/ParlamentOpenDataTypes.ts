// Typed models for the ParlamentOpenData SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Business {
  author?: string
  council?: string
  description?: string
  id?: number
  state?: string
  submission_date?: string
  title?: string
  type?: string
}

export type BusinessListMatch = Partial<Business>

export interface Member {
  active?: boolean
  canton?: string
  council?: string
  entry_date?: string
  first_name?: string
  id?: number
  last_name?: string
  leaving_date?: string
  party?: string
  title?: string
}

export type MemberListMatch = Partial<Member>

export interface Session {
  abbreviation?: string
  end_date?: string
  id?: number
  name?: string
  start_date?: string
  state?: string
  type?: string
}

export type SessionListMatch = Partial<Session>

