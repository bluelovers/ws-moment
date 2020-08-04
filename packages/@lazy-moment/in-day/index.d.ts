import moment, { Moment, MomentInput, DurationInputArg2 } from 'moment';
declare type IMomentStatic = typeof moment;
export interface IReturnTypelnMoment<M extends MomentInput = MomentInput> {
    input: M;
    baseMoment: Moment;
    prevMoment: Moment;
    nextMoment: Moment;
}
export interface IReturnTypeFirstEndOfMonth<M extends MomentInput = MomentInput> {
    input: M;
    baseMoment: Moment;
    firstDayOfMonth: Moment;
    endDayOfMonth: Moment;
}
export declare function lnMoment<M extends MomentInput>(m: M, unit: DurationInputArg2, momentStatic?: IMomentStatic): IReturnTypelnMoment<M>;
export declare function lnMomentMonth<M extends MomentInput>(m: M, momentStatic?: IMomentStatic): IReturnTypelnMoment<M>;
export declare function lnMomentDay<M extends MomentInput>(m: M, momentStatic?: IMomentStatic): IReturnTypelnMoment<M>;
export declare function lnMomentYear<M extends MomentInput>(m: M, momentStatic?: IMomentStatic): IReturnTypelnMoment<M>;
export declare function firstEndOfMonth<M extends MomentInput>(m: M, momentStatic?: IMomentStatic): IReturnTypeFirstEndOfMonth<M>;
export default lnMoment;
