-- ParlamentOpenData SDK error

local ParlamentOpenDataError = {}
ParlamentOpenDataError.__index = ParlamentOpenDataError


function ParlamentOpenDataError.new(code, msg, ctx)
  local self = setmetatable({}, ParlamentOpenDataError)
  self.is_sdk_error = true
  self.sdk = "ParlamentOpenData"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function ParlamentOpenDataError:error()
  return self.msg
end


function ParlamentOpenDataError:__tostring()
  return self.msg
end


return ParlamentOpenDataError
