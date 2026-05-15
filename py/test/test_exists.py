# ProjectName SDK exists test

import pytest
from parlamentopendata_sdk import ParlamentOpenDataSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = ParlamentOpenDataSDK.test(None, None)
        assert testsdk is not None
