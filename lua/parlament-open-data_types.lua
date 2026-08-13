-- Typed models for the ParlamentOpenData SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Business
---@field author? string
---@field council? string
---@field description? string
---@field id? number
---@field state? string
---@field submissionDate? string
---@field title? string
---@field type? string

---@class BusinessListMatch
---@field author? string
---@field council? string
---@field description? string
---@field id? number
---@field state? string
---@field submissionDate? string
---@field title? string
---@field type? string

---@class Member
---@field active? boolean
---@field canton? string
---@field council? string
---@field entryDate? string
---@field firstName? string
---@field id? number
---@field lastName? string
---@field leavingDate? string
---@field party? string
---@field title? string

---@class MemberListMatch
---@field active? boolean
---@field canton? string
---@field council? string
---@field entryDate? string
---@field firstName? string
---@field id? number
---@field lastName? string
---@field leavingDate? string
---@field party? string
---@field title? string

---@class Session
---@field abbreviation? string
---@field endDate? string
---@field id? number
---@field name? string
---@field startDate? string
---@field state? string
---@field type? string

---@class SessionListMatch
---@field abbreviation? string
---@field endDate? string
---@field id? number
---@field name? string
---@field startDate? string
---@field state? string
---@field type? string

local M = {}

return M
