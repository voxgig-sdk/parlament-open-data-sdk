# ParlamentOpenData SDK utility: make_context

from core.context import ParlamentOpenDataContext


def make_context_util(ctxmap, basectx):
    return ParlamentOpenDataContext(ctxmap, basectx)
