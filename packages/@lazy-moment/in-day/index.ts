import moment, { MomentInput, DurationInputArg2 } from 'moment';

export function lnMomentMonth<M extends MomentInput>(m: M)
{
	return lnMoment(m, 'month');
}

export function lnMomentDay<M extends MomentInput>(m: M)
{
	return lnMoment(m, 'day');
}

export function lnMomentYear<M extends MomentInput>(m: M)
{
	return lnMoment(m, 'year');
}

export function lnMoment<M extends MomentInput>(m: M, unit: DurationInputArg2)
{
	const baseMoment = moment(m);

	const lastMoment = baseMoment
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
		lastMoment,
		nextMoment,
	}
}

export function firstEndOfMonth<M extends MomentInput>(m: M)
{
	const baseMoment = moment(m);

	const firstDayOfMonth = baseMoment.clone().startOf('month');
	const endDayOfMonth = baseMoment.clone().endOf('month');

	return {
		input: m,
		baseMoment,
		firstDayOfMonth,
		endDayOfMonth,
	}
}
