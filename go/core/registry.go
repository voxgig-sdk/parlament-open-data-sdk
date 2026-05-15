package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewBusinessEntityFunc func(client *ParlamentOpenDataSDK, entopts map[string]any) ParlamentOpenDataEntity

var NewMemberEntityFunc func(client *ParlamentOpenDataSDK, entopts map[string]any) ParlamentOpenDataEntity

var NewSessionEntityFunc func(client *ParlamentOpenDataSDK, entopts map[string]any) ParlamentOpenDataEntity

