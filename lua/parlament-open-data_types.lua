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
---@field submission_date? string
---@field title? string
---@field type? string

---@class BusinessListMatch

---@class Member
---@field active? boolean
---@field canton? string
---@field council? string
---@field entry_date? string
---@field first_name? string
---@field id? number
---@field last_name? string
---@field leaving_date? string
---@field party? string
---@field title? string

---@class MemberListMatch

---@class Session
---@field abbreviation? string
---@field end_date? string
---@field id? number
---@field name? string
---@field start_date? string
---@field state? string
---@field type? string

---@class SessionListMatch

local M = {}

return M
