<?php
declare(strict_types=1);

// ParlamentOpenData SDK utility: result_body

class ParlamentOpenDataResultBody
{
    public static function call(ParlamentOpenDataContext $ctx): ?ParlamentOpenDataResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
