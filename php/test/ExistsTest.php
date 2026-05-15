<?php
declare(strict_types=1);

// ParlamentOpenData SDK exists test

require_once __DIR__ . '/../parlamentopendata_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = ParlamentOpenDataSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
