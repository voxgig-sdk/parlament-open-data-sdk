# ParlamentOpenData SDK utility: make_context
require_relative '../core/context'
module ParlamentOpenDataUtilities
  MakeContext = ->(ctxmap, basectx) {
    ParlamentOpenDataContext.new(ctxmap, basectx)
  }
end
