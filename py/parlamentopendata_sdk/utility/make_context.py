# ParlamentOpenData SDK utility: make_context

from parlamentopendata_sdk.core.context import ParlamentOpenDataContext


def make_context_util(ctxmap, basectx):
    return ParlamentOpenDataContext(ctxmap, basectx)
