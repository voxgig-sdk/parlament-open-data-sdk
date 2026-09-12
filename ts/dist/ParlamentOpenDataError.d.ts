import { Context } from './Context';
declare class ParlamentOpenDataError extends Error {
    isParlamentOpenDataError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { ParlamentOpenDataError };
