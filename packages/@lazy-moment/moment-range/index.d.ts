import MomentStatic from 'moment';
import { MomentRange } from 'moment-range';
export type { MomentRange, DateRange, MomentRangeStaticMethods } from 'moment-range';
export declare type IMomentStatic = typeof MomentStatic;
export declare type IMomentRangeStatic = MomentRange & IMomentStatic;
export declare function wrapMoment(moment: IMomentStatic): IMomentRangeStatic;
export declare function isMomentRange(moment?: IMomentStatic): moment is IMomentRangeStatic;
export declare function getMomentRange(moment?: IMomentStatic): IMomentRangeStatic;
export default getMomentRange;
