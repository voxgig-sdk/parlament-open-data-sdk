# ParlamentOpenData SDK feature factory

from feature.base_feature import ParlamentOpenDataBaseFeature
from feature.test_feature import ParlamentOpenDataTestFeature


def _make_feature(name):
    features = {
        "base": lambda: ParlamentOpenDataBaseFeature(),
        "test": lambda: ParlamentOpenDataTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
