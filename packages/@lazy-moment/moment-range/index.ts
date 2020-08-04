import MomentStatic, { Moment, MomentInput } from 'moment';
import { extendMoment, MomentRange, DateRange, MomentRangeStaticMethods } from 'moment-range';

export type { MomentRange, DateRange, MomentRangeStaticMethods } from 'moment-range'

export type IMomentStatic = typeof MomentStatic
export type IMomentRangeStatic = MomentRange & IMomentStatic

let cachedMoment: IMomentRangeStatic;

export function wrapMoment(moment: IMomentStatic): IMomentRangeStatic
{
	// @ts-ignore
	let t1 = typeof moment.isRange === 'function';
	// @ts-ignore
	let t2 = typeof moment.within === 'function';

	if (t1 && !t2 || !t1 && t2)
	{
		throw new TypeError(`current moment already exists one of isRange or within method`)
	}
	else if (t1 && t2)
	{
		return moment as any
	}

	return extendMoment(moment as any) as any;
}

export function isMomentRange(moment?: IMomentStatic): moment is IMomentRangeStatic
{
	// @ts-ignore
	return typeof moment.isRange === 'function' && typeof moment.within === 'function'
}

export function getMomentRange(moment?: IMomentStatic)
{
	return cachedMoment = wrapMoment(moment ?? cachedMoment ?? MomentStatic)
}

export default getMomentRange
