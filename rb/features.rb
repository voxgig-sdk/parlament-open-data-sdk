# ParlamentOpenData SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module ParlamentOpenDataFeatures
  def self.make_feature(name)
    case name
    when "base"
      ParlamentOpenDataBaseFeature.new
    when "test"
      ParlamentOpenDataTestFeature.new
    else
      ParlamentOpenDataBaseFeature.new
    end
  end
end
