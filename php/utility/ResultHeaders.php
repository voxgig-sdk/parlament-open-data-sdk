<?php
declare(strict_types=1);

// ParlamentOpenData SDK utility: result_headers

class ParlamentOpenDataResultHeaders
{
    public static function call(ParlamentOpenDataContext $ctx): ?ParlamentOpenDataResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
