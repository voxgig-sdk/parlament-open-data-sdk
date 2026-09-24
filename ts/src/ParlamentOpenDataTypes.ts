// Typed models for the ParlamentOpenData SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Business {
  author?: string
  council?: string
  description?: string
  id?: number
  state?: string
  submissionDate?: string
  title?: string
  type?: string
}

export interface BusinessListMatch {
  format?: string
  id?: number
  language?: string
  state?: string
  type?: string
}

export interface Member {
  active?: boolean
  canton?: string
  council?: string
  entryDate?: string
  firstName?: string
  id?: number
  lastName?: string
  leavingDate?: string
  party?: string
  title?: string
}

export interface MemberListMatch {
  active?: boolean
  format?: string
  id?: number
  language?: string
}

export interface Session {
  abbreviation?: string
  endDate?: string
  id?: number
  name?: string
  startDate?: string
  state?: string
  type?: string
}

export interface SessionListMatch {
  format?: string
  language?: string
  session_id?: number
}

