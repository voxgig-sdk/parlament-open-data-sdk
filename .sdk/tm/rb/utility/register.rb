# ParlamentOpenData SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

ParlamentOpenDataUtility.registrar = ->(u) {
  u.clean = ParlamentOpenDataUtilities::Clean
  u.done = ParlamentOpenDataUtilities::Done
  u.make_error = ParlamentOpenDataUtilities::MakeError
  u.feature_add = ParlamentOpenDataUtilities::FeatureAdd
  u.feature_hook = ParlamentOpenDataUtilities::FeatureHook
  u.feature_init = ParlamentOpenDataUtilities::FeatureInit
  u.fetcher = ParlamentOpenDataUtilities::Fetcher
  u.make_fetch_def = ParlamentOpenDataUtilities::MakeFetchDef
  u.make_context = ParlamentOpenDataUtilities::MakeContext
  u.make_options = ParlamentOpenDataUtilities::MakeOptions
  u.make_request = ParlamentOpenDataUtilities::MakeRequest
  u.make_response = ParlamentOpenDataUtilities::MakeResponse
  u.make_result = ParlamentOpenDataUtilities::MakeResult
  u.make_point = ParlamentOpenDataUtilities::MakePoint
  u.make_spec = ParlamentOpenDataUtilities::MakeSpec
  u.make_url = ParlamentOpenDataUtilities::MakeUrl
  u.param = ParlamentOpenDataUtilities::Param
  u.prepare_auth = ParlamentOpenDataUtilities::PrepareAuth
  u.prepare_body = ParlamentOpenDataUtilities::PrepareBody
  u.prepare_headers = ParlamentOpenDataUtilities::PrepareHeaders
  u.prepare_method = ParlamentOpenDataUtilities::PrepareMethod
  u.prepare_params = ParlamentOpenDataUtilities::PrepareParams
  u.prepare_path = ParlamentOpenDataUtilities::PreparePath
  u.prepare_query = ParlamentOpenDataUtilities::PrepareQuery
  u.result_basic = ParlamentOpenDataUtilities::ResultBasic
  u.result_body = ParlamentOpenDataUtilities::ResultBody
  u.result_headers = ParlamentOpenDataUtilities::ResultHeaders
  u.transform_request = ParlamentOpenDataUtilities::TransformRequest
  u.transform_response = ParlamentOpenDataUtilities::TransformResponse
}
