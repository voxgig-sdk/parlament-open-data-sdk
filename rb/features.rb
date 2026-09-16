# ParlamentOpenData SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module ParlamentOpenDataFeatures
  def self.make_feature(name)
    case name
    when "base"
      ParlamentOpenDataBaseFeature.new
    when "ratelimit"
      ParlamentOpenDataRatelimitFeature.new
    when "retry"
      ParlamentOpenDataRetryFeature.new
    when "test"
      ParlamentOpenDataTestFeature.new
    when "timeout"
      ParlamentOpenDataTimeoutFeature.new
    else
      ParlamentOpenDataBaseFeature.new
    end
  end
end
