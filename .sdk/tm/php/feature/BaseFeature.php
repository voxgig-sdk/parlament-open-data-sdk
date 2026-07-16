<?php
declare(strict_types=1);

// ParlamentOpenData SDK base feature

class ParlamentOpenDataBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(ParlamentOpenDataContext $ctx, array $options): void {}
    public function PostConstruct(ParlamentOpenDataContext $ctx): void {}
    public function PostConstructEntity(ParlamentOpenDataContext $ctx): void {}
    public function SetData(ParlamentOpenDataContext $ctx): void {}
    public function GetData(ParlamentOpenDataContext $ctx): void {}
    public function GetMatch(ParlamentOpenDataContext $ctx): void {}
    public function SetMatch(ParlamentOpenDataContext $ctx): void {}
    public function PrePoint(ParlamentOpenDataContext $ctx): void {}
    public function PreSpec(ParlamentOpenDataContext $ctx): void {}
    public function PreRequest(ParlamentOpenDataContext $ctx): void {}
    public function PreResponse(ParlamentOpenDataContext $ctx): void {}
    public function PreResult(ParlamentOpenDataContext $ctx): void {}
    public function PreDone(ParlamentOpenDataContext $ctx): void {}
    public function PreUnexpected(ParlamentOpenDataContext $ctx): void {}
}
