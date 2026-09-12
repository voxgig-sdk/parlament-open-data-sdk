import { ParlamentOpenDataEntityBase } from '../ParlamentOpenDataEntityBase';
import type { ParlamentOpenDataSDK } from '../ParlamentOpenDataSDK';
import type { Control } from '../types';
import type { Session, SessionListMatch } from '../ParlamentOpenDataTypes';
declare class SessionEntity extends ParlamentOpenDataEntityBase<Session> {
    constructor(client: ParlamentOpenDataSDK, entopts: any);
    make(this: SessionEntity): SessionEntity;
    list(this: any, reqmatch?: SessionListMatch, ctrl?: Control): Promise<SessionEntity[]>;
}
export { SessionEntity };
