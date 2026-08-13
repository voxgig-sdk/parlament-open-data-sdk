# ParlamentOpenData SDK feature factory

from parlamentopendata_sdk.feature.base_feature import ParlamentOpenDataBaseFeature
from parlamentopendata_sdk.feature.test_feature import ParlamentOpenDataTestFeature


def _make_feature(name):
    features = {
        "base": lambda: ParlamentOpenDataBaseFeature(),
        "test": lambda: ParlamentOpenDataTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
