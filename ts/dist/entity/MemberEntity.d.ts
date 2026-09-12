import { ParlamentOpenDataEntityBase } from '../ParlamentOpenDataEntityBase';
import type { ParlamentOpenDataSDK } from '../ParlamentOpenDataSDK';
import type { Control } from '../types';
import type { Member, MemberListMatch } from '../ParlamentOpenDataTypes';
declare class MemberEntity extends ParlamentOpenDataEntityBase<Member> {
    constructor(client: ParlamentOpenDataSDK, entopts: any);
    make(this: MemberEntity): MemberEntity;
    list(this: any, reqmatch?: MemberListMatch, ctrl?: Control): Promise<MemberEntity[]>;
}
export { MemberEntity };
