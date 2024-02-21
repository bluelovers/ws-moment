import moment$1 from 'moment';
import { DurationInputArg2, Moment, MomentInput } from 'moment';

export type IMomentStatic = typeof moment$1;
export interface IReturnTypelnMoment<M extends moment$1.MomentInput = moment$1.MomentInput> {
	input: M;
	baseMoment: moment$1.Moment;
	prevMoment: moment$1.Moment;
	nextMoment: moment$1.Moment;
}
export interface IReturnTypeFirstEndOfMonth<M extends moment$1.MomentInput = moment$1.MomentInput> {
	input: M;
	baseMoment: moment$1.Moment;
	firstDayOfMonth: moment$1.Moment;
	endDayOfMonth: moment$1.Moment;
}
export declare function lnMoment<M extends moment$1.MomentInput>(m: M, unit: moment$1.DurationInputArg2, momentStatic?: IMomentStatic): IReturnTypelnMoment<M>;
export declare function lnMomentMonth<M extends moment$1.MomentInput>(m: M, momentStatic?: IMomentStatic): IReturnTypelnMoment<M>;
export declare function lnMomentDay<M extends moment$1.MomentInput>(m: M, momentStatic?: IMomentStatic): IReturnTypelnMoment<M>;
export declare function lnMomentYear<M extends moment$1.MomentInput>(m: M, momentStatic?: IMomentStatic): IReturnTypelnMoment<M>;
export declare function firstEndOfMonth<M extends moment$1.MomentInput>(m: M, momentStatic?: IMomentStatic): IReturnTypeFirstEndOfMonth<M>;

export {
	lnMoment as default,
};

export {};
