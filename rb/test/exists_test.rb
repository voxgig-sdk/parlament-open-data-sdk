# ParlamentOpenData SDK exists test

require "minitest/autorun"
require_relative "../ParlamentOpenData_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = ParlamentOpenDataSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
