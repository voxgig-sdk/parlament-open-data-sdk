# Typed models for the ParlamentOpenData SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Business(TypedDict, total=False):
    author: str
    council: str
    description: str
    id: int
    state: str
    submission_date: str
    title: str
    type: str


class BusinessListMatch(TypedDict, total=False):
    author: str
    council: str
    description: str
    id: int
    state: str
    submission_date: str
    title: str
    type: str


class Member(TypedDict, total=False):
    active: bool
    canton: str
    council: str
    entry_date: str
    first_name: str
    id: int
    last_name: str
    leaving_date: str
    party: str
    title: str


class MemberListMatch(TypedDict, total=False):
    active: bool
    canton: str
    council: str
    entry_date: str
    first_name: str
    id: int
    last_name: str
    leaving_date: str
    party: str
    title: str


class Session(TypedDict, total=False):
    abbreviation: str
    end_date: str
    id: int
    name: str
    start_date: str
    state: str
    type: str


class SessionListMatch(TypedDict, total=False):
    abbreviation: str
    end_date: str
    id: int
    name: str
    start_date: str
    state: str
    type: str
