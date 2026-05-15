<?php
declare(strict_types=1);

// ParlamentOpenData SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

ParlamentOpenDataUtility::setRegistrar(function (ParlamentOpenDataUtility $u): void {
    $u->clean = [ParlamentOpenDataClean::class, 'call'];
    $u->done = [ParlamentOpenDataDone::class, 'call'];
    $u->make_error = [ParlamentOpenDataMakeError::class, 'call'];
    $u->feature_add = [ParlamentOpenDataFeatureAdd::class, 'call'];
    $u->feature_hook = [ParlamentOpenDataFeatureHook::class, 'call'];
    $u->feature_init = [ParlamentOpenDataFeatureInit::class, 'call'];
    $u->fetcher = [ParlamentOpenDataFetcher::class, 'call'];
    $u->make_fetch_def = [ParlamentOpenDataMakeFetchDef::class, 'call'];
    $u->make_context = [ParlamentOpenDataMakeContext::class, 'call'];
    $u->make_options = [ParlamentOpenDataMakeOptions::class, 'call'];
    $u->make_request = [ParlamentOpenDataMakeRequest::class, 'call'];
    $u->make_response = [ParlamentOpenDataMakeResponse::class, 'call'];
    $u->make_result = [ParlamentOpenDataMakeResult::class, 'call'];
    $u->make_point = [ParlamentOpenDataMakePoint::class, 'call'];
    $u->make_spec = [ParlamentOpenDataMakeSpec::class, 'call'];
    $u->make_url = [ParlamentOpenDataMakeUrl::class, 'call'];
    $u->param = [ParlamentOpenDataParam::class, 'call'];
    $u->prepare_auth = [ParlamentOpenDataPrepareAuth::class, 'call'];
    $u->prepare_body = [ParlamentOpenDataPrepareBody::class, 'call'];
    $u->prepare_headers = [ParlamentOpenDataPrepareHeaders::class, 'call'];
    $u->prepare_method = [ParlamentOpenDataPrepareMethod::class, 'call'];
    $u->prepare_params = [ParlamentOpenDataPrepareParams::class, 'call'];
    $u->prepare_path = [ParlamentOpenDataPreparePath::class, 'call'];
    $u->prepare_query = [ParlamentOpenDataPrepareQuery::class, 'call'];
    $u->result_basic = [ParlamentOpenDataResultBasic::class, 'call'];
    $u->result_body = [ParlamentOpenDataResultBody::class, 'call'];
    $u->result_headers = [ParlamentOpenDataResultHeaders::class, 'call'];
    $u->transform_request = [ParlamentOpenDataTransformRequest::class, 'call'];
    $u->transform_response = [ParlamentOpenDataTransformResponse::class, 'call'];
});
