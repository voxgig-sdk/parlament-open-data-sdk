# ParlamentOpenData SDK feature factory

from parlamentopendata_sdk.feature.base_feature import ParlamentOpenDataBaseFeature
from parlamentopendata_sdk.feature.ratelimit_feature import ParlamentOpenDataRatelimitFeature
from parlamentopendata_sdk.feature.retry_feature import ParlamentOpenDataRetryFeature
from parlamentopendata_sdk.feature.test_feature import ParlamentOpenDataTestFeature
from parlamentopendata_sdk.feature.timeout_feature import ParlamentOpenDataTimeoutFeature


_FEATURES = {
    "base": lambda: ParlamentOpenDataBaseFeature(),
    "ratelimit": lambda: ParlamentOpenDataRatelimitFeature(),
    "retry": lambda: ParlamentOpenDataRetryFeature(),
    "test": lambda: ParlamentOpenDataTestFeature(),
    "timeout": lambda: ParlamentOpenDataTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
