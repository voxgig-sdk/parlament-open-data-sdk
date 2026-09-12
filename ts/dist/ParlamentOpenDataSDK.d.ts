import { BusinessEntity } from './entity/BusinessEntity';
import { MemberEntity } from './entity/MemberEntity';
import { SessionEntity } from './entity/SessionEntity';
export type * from './ParlamentOpenDataTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { ParlamentOpenDataEntityBase } from './ParlamentOpenDataEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class ParlamentOpenDataSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Business(entopts?: Record<string, any>): BusinessEntity;
    Member(entopts?: Record<string, any>): MemberEntity;
    Session(entopts?: Record<string, any>): SessionEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): ParlamentOpenDataSDK;
    tester(testopts?: any, sdkopts?: any): ParlamentOpenDataSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof ParlamentOpenDataSDK;
export { stdutil, config, BaseFeature, ParlamentOpenDataEntityBase, ParlamentOpenDataSDK, SDK, };
