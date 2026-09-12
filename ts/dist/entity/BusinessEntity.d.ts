import { ParlamentOpenDataEntityBase } from '../ParlamentOpenDataEntityBase';
import type { ParlamentOpenDataSDK } from '../ParlamentOpenDataSDK';
import type { Control } from '../types';
import type { Business, BusinessListMatch } from '../ParlamentOpenDataTypes';
declare class BusinessEntity extends ParlamentOpenDataEntityBase<Business> {
    constructor(client: ParlamentOpenDataSDK, entopts: any);
    make(this: BusinessEntity): BusinessEntity;
    list(this: any, reqmatch?: BusinessListMatch, ctrl?: Control): Promise<BusinessEntity[]>;
}
export { BusinessEntity };
