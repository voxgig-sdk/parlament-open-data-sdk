<?php
declare(strict_types=1);

// ParlamentOpenData SDK utility: prepare_body

class ParlamentOpenDataPrepareBody
{
    public static function call(ParlamentOpenDataContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
