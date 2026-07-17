-- ParlamentOpenData SDK exists test

local sdk = require("parlament-open-data_sdk")

describe("ParlamentOpenDataSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
