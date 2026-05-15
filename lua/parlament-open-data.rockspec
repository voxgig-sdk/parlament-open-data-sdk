package = "voxgig-sdk-parlament-open-data"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/parlament-open-data-sdk.git"
}
description = {
  summary = "ParlamentOpenData SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["parlament-open-data_sdk"] = "parlament-open-data_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
