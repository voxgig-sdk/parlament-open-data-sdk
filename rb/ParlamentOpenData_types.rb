# frozen_string_literal: true

# Typed models for the ParlamentOpenData SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Business entity data model.
#
# @!attribute [rw] author
#   @return [String, nil]
#
# @!attribute [rw] council
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] submissionDate
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
Business = Struct.new(
  :author,
  :council,
  :description,
  :id,
  :state,
  :submissionDate,
  :title,
  :type,
  keyword_init: true
)

# Request payload for Business#list.
#
# @!attribute [rw] author
#   @return [String, nil]
#
# @!attribute [rw] council
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] submissionDate
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
BusinessListMatch = Struct.new(
  :author,
  :council,
  :description,
  :id,
  :state,
  :submissionDate,
  :title,
  :type,
  keyword_init: true
)

# Member entity data model.
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] canton
#   @return [String, nil]
#
# @!attribute [rw] council
#   @return [String, nil]
#
# @!attribute [rw] entryDate
#   @return [String, nil]
#
# @!attribute [rw] firstName
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] lastName
#   @return [String, nil]
#
# @!attribute [rw] leavingDate
#   @return [String, nil]
#
# @!attribute [rw] party
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
Member = Struct.new(
  :active,
  :canton,
  :council,
  :entryDate,
  :firstName,
  :id,
  :lastName,
  :leavingDate,
  :party,
  :title,
  keyword_init: true
)

# Request payload for Member#list.
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] canton
#   @return [String, nil]
#
# @!attribute [rw] council
#   @return [String, nil]
#
# @!attribute [rw] entryDate
#   @return [String, nil]
#
# @!attribute [rw] firstName
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] lastName
#   @return [String, nil]
#
# @!attribute [rw] leavingDate
#   @return [String, nil]
#
# @!attribute [rw] party
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
MemberListMatch = Struct.new(
  :active,
  :canton,
  :council,
  :entryDate,
  :firstName,
  :id,
  :lastName,
  :leavingDate,
  :party,
  :title,
  keyword_init: true
)

# Session entity data model.
#
# @!attribute [rw] abbreviation
#   @return [String, nil]
#
# @!attribute [rw] endDate
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] startDate
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
Session = Struct.new(
  :abbreviation,
  :endDate,
  :id,
  :name,
  :startDate,
  :state,
  :type,
  keyword_init: true
)

# Request payload for Session#list.
#
# @!attribute [rw] abbreviation
#   @return [String, nil]
#
# @!attribute [rw] endDate
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] startDate
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
SessionListMatch = Struct.new(
  :abbreviation,
  :endDate,
  :id,
  :name,
  :startDate,
  :state,
  :type,
  keyword_init: true
)

