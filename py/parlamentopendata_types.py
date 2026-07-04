# Typed models for the ParlamentOpenData SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Business:
    author: Optional[str] = None
    council: Optional[str] = None
    description: Optional[str] = None
    id: Optional[int] = None
    state: Optional[str] = None
    submission_date: Optional[str] = None
    title: Optional[str] = None
    type: Optional[str] = None


@dataclass
class BusinessListMatch:
    author: Optional[str] = None
    council: Optional[str] = None
    description: Optional[str] = None
    id: Optional[int] = None
    state: Optional[str] = None
    submission_date: Optional[str] = None
    title: Optional[str] = None
    type: Optional[str] = None


@dataclass
class Member:
    active: Optional[bool] = None
    canton: Optional[str] = None
    council: Optional[str] = None
    entry_date: Optional[str] = None
    first_name: Optional[str] = None
    id: Optional[int] = None
    last_name: Optional[str] = None
    leaving_date: Optional[str] = None
    party: Optional[str] = None
    title: Optional[str] = None


@dataclass
class MemberListMatch:
    active: Optional[bool] = None
    canton: Optional[str] = None
    council: Optional[str] = None
    entry_date: Optional[str] = None
    first_name: Optional[str] = None
    id: Optional[int] = None
    last_name: Optional[str] = None
    leaving_date: Optional[str] = None
    party: Optional[str] = None
    title: Optional[str] = None


@dataclass
class Session:
    abbreviation: Optional[str] = None
    end_date: Optional[str] = None
    id: Optional[int] = None
    name: Optional[str] = None
    start_date: Optional[str] = None
    state: Optional[str] = None
    type: Optional[str] = None


@dataclass
class SessionListMatch:
    abbreviation: Optional[str] = None
    end_date: Optional[str] = None
    id: Optional[int] = None
    name: Optional[str] = None
    start_date: Optional[str] = None
    state: Optional[str] = None
    type: Optional[str] = None

