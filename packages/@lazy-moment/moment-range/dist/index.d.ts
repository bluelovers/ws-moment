import MomentStatic from 'moment';
import { DateRange, MomentRange, MomentRangeStaticMethods } from 'moment-range';

export type IMomentStatic = typeof MomentStatic;
export type IMomentRangeStatic = MomentRange & IMomentStatic;
export declare function wrapMoment(moment: IMomentStatic): IMomentRangeStatic;
export declare function isMomentRange(moment?: IMomentStatic): moment is IMomentRangeStatic;
export declare function getMomentRange(moment?: IMomentStatic): IMomentRangeStatic;

export {
	DateRange,
	MomentRange,
	MomentRangeStaticMethods,
	getMomentRange as default,
};

export {};
