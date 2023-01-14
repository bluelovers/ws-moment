import moment, { Moment, MomentInput, DurationInputArg2 } from 'moment';
type IMomentStatic = typeof moment

export interface IReturnTypelnMoment<M extends MomentInput = MomentInput>
{
	input: M;
	baseMoment: Moment;
	prevMoment: Moment;
	nextMoment: Moment;
}

export interface IReturnTypeFirstEndOfMonth<M extends MomentInput = MomentInput>
{
	input: M;
	baseMoment: Moment;
	firstDayOfMonth: Moment;
	endDayOfMonth: Moment;
}

export function lnMoment<M extends MomentInput>(m: M, unit: DurationInputArg2, momentStatic: IMomentStatic = moment): IReturnTypelnMoment<M>
{
	const baseMoment = momentStatic(m);

	const prevMoment = baseMoment
		.clone()
		.add(-1, unit)
	;
	const nextMoment = baseMoment
		.clone()
		.add(1, unit)
	;

	return {
		input: m,
		baseMoment,
		prevMoment,
		nextMoment,
	}
}

export function lnMomentMonth<M extends MomentInput>(m: M, momentStatic?: IMomentStatic)
{
	return lnMoment(m, 'month', momentStatic);
}

export function lnMomentDay<M extends MomentInput>(m: M, momentStatic?: IMomentStatic)
{
	return lnMoment(m, 'day', momentStatic);
}

export function lnMomentYear<M extends MomentInput>(m: M, momentStatic?: IMomentStatic)
{
	return lnMoment(m, 'year', momentStatic);
}

export function firstEndOfMonth<M extends MomentInput>(m: M, momentStatic: IMomentStatic = moment): IReturnTypeFirstEndOfMonth<M>
{
	const baseMoment = momentStatic(m);

	const firstDayOfMonth = baseMoment.clone().startOf('month');
	const endDayOfMonth = baseMoment.clone().endOf('month');

	return {
		input: m,
		baseMoment,
		firstDayOfMonth,
		endDayOfMonth,
	}
}

export default lnMoment

// @ts-ignore
if (process.env.TSDX_FORMAT !== 'esm')
{
	Object.defineProperty(lnMoment, "__esModule", { value: true });

	Object.defineProperty(lnMoment, 'lnMoment', { value: lnMoment });
	Object.defineProperty(lnMoment, 'default', { value: lnMoment });

	Object.defineProperty(lnMoment, 'lnMomentMonth', { value: lnMomentMonth });
	Object.defineProperty(lnMoment, 'lnMomentDay', { value: lnMomentDay });
	Object.defineProperty(lnMoment, 'lnMomentYear', { value: lnMomentYear });
	Object.defineProperty(lnMoment, 'firstEndOfMonth', { value: firstEndOfMonth });
}
