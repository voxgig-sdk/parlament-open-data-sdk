<?php
declare(strict_types=1);

// ParlamentOpenData SDK utility: feature_add

class ParlamentOpenDataFeatureAdd
{
    public static function call(ParlamentOpenDataContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
