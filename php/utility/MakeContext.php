<?php
declare(strict_types=1);

// ParlamentOpenData SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class ParlamentOpenDataMakeContext
{
    public static function call(array $ctxmap, ?ParlamentOpenDataContext $basectx): ParlamentOpenDataContext
    {
        return new ParlamentOpenDataContext($ctxmap, $basectx);
    }
}
