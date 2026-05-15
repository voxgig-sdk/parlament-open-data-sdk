<?php
declare(strict_types=1);

// ParlamentOpenData SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class ParlamentOpenDataFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new ParlamentOpenDataBaseFeature();
            case "test":
                return new ParlamentOpenDataTestFeature();
            default:
                return new ParlamentOpenDataBaseFeature();
        }
    }
}
