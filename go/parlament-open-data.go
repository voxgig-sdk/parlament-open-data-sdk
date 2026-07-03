package voxgigparlamentopendatasdk

import (
	"github.com/voxgig-sdk/parlament-open-data-sdk/go/core"
	"github.com/voxgig-sdk/parlament-open-data-sdk/go/entity"
	"github.com/voxgig-sdk/parlament-open-data-sdk/go/feature"
	_ "github.com/voxgig-sdk/parlament-open-data-sdk/go/utility"
)

// Type aliases preserve external API.
type ParlamentOpenDataSDK = core.ParlamentOpenDataSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type ParlamentOpenDataEntity = core.ParlamentOpenDataEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type ParlamentOpenDataError = core.ParlamentOpenDataError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewBusinessEntityFunc = func(client *core.ParlamentOpenDataSDK, entopts map[string]any) core.ParlamentOpenDataEntity {
		return entity.NewBusinessEntity(client, entopts)
	}
	core.NewMemberEntityFunc = func(client *core.ParlamentOpenDataSDK, entopts map[string]any) core.ParlamentOpenDataEntity {
		return entity.NewMemberEntity(client, entopts)
	}
	core.NewSessionEntityFunc = func(client *core.ParlamentOpenDataSDK, entopts map[string]any) core.ParlamentOpenDataEntity {
		return entity.NewSessionEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewParlamentOpenDataSDK = core.NewParlamentOpenDataSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewParlamentOpenDataSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *ParlamentOpenDataSDK  { return NewParlamentOpenDataSDK(nil) }
func Test() *ParlamentOpenDataSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
