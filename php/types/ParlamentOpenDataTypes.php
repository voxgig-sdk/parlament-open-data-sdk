<?php
declare(strict_types=1);

// Typed models for the ParlamentOpenData SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Business entity data model. */
class Business
{
    public ?string $author = null;
    public ?string $council = null;
    public ?string $description = null;
    public ?int $id = null;
    public ?string $state = null;
    public ?string $submissionDate = null;
    public ?string $title = null;
    public ?string $type = null;
}

/** Request payload for Business#list. */
class BusinessListMatch
{
    public ?string $author = null;
    public ?string $council = null;
    public ?string $description = null;
    public ?int $id = null;
    public ?string $state = null;
    public ?string $submissionDate = null;
    public ?string $title = null;
    public ?string $type = null;
}

/** Member entity data model. */
class Member
{
    public ?bool $active = null;
    public ?string $canton = null;
    public ?string $council = null;
    public ?string $entryDate = null;
    public ?string $firstName = null;
    public ?int $id = null;
    public ?string $lastName = null;
    public ?string $leavingDate = null;
    public ?string $party = null;
    public ?string $title = null;
}

/** Request payload for Member#list. */
class MemberListMatch
{
    public ?bool $active = null;
    public ?string $canton = null;
    public ?string $council = null;
    public ?string $entryDate = null;
    public ?string $firstName = null;
    public ?int $id = null;
    public ?string $lastName = null;
    public ?string $leavingDate = null;
    public ?string $party = null;
    public ?string $title = null;
}

/** Session entity data model. */
class Session
{
    public ?string $abbreviation = null;
    public ?string $endDate = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?string $startDate = null;
    public ?string $state = null;
    public ?string $type = null;
}

/** Request payload for Session#list. */
class SessionListMatch
{
    public ?string $abbreviation = null;
    public ?string $endDate = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?string $startDate = null;
    public ?string $state = null;
    public ?string $type = null;
}

