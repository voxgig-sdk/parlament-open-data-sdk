# ParlamentOpenData SDK utility: feature_add
module ParlamentOpenDataUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
