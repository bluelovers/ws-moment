import _moment, { Moment, MomentInput, LocaleSpecifier } from 'moment';
import getMomentRange, { IMomentRangeStatic, IMomentStatic, MomentRange, DateRange } from '@lazy-moment/moment-range/index';
import { firstEndOfMonth } from '@lazy-moment/in-day/index';

export interface IReturnTypeWeeksOfMonth
{
	year: number;
	month: number;
	calendar: DateRange[];
	momentDate: Moment;
	firstDayOfMonth: Moment;
	endDayOfMonth: Moment;
	weeks: number[];
}

export function weeksOfMonth(date?: MomentInput, momentStatic?: IMomentStatic): IReturnTypeWeeksOfMonth
{
	const moment = getMomentRange(momentStatic) as IMomentRangeStatic;
	date ??= moment.now();

	const { baseMoment: momentDate, firstDayOfMonth, endDayOfMonth } = firstEndOfMonth(date, moment);

	const monthRange = moment.range(firstDayOfMonth, endDayOfMonth);

	/**
	 * Get all the weeks during the current month
	 */
	const weeks: number[] = [];
	for (let mday of monthRange.by('days'))
	{
//		console.dir(mday.date())

		if (weeks.indexOf(mday.week()) === -1)
		{
			weeks.push(mday.week());
		}
	}

	let firstWeekDayOfMonth: Moment;
	let lastWeekDayOfMonth: Moment;

	const year = momentDate.year();
	const month = momentDate.month();

	/**
	 * Create a range for each week
	 */
	const calendar: DateRange[] = [];

	for (let index = 0; index < weeks.length; index++)
	{
		let weeknumber = weeks[index];

		firstWeekDayOfMonth = moment().year(year).month(month).week(weeknumber).day(0);
		lastWeekDayOfMonth = moment().year(year).month(month).week(weeknumber).day(6);

		if (month == 11 && (weeks.length - 1) == index)
		{
			firstWeekDayOfMonth = moment().year(year).month(month).week(weeks[index - 1]).day(0);
			firstWeekDayOfMonth.add(7, "day");
			lastWeekDayOfMonth = moment().year(year).month(month).week(weeks[index - 1]).day(6);
			lastWeekDayOfMonth.add(6, "day");
		}

		// console.log("First day of week", firstWeekDay, weeknumber);
		// console.log("Last day of week", lastWeekDay, weeknumber);

		if (firstWeekDayOfMonth.isBefore(firstDayOfMonth))
		{
			firstWeekDayOfMonth = firstDayOfMonth;
		}

		if (lastWeekDayOfMonth.isAfter(endDayOfMonth))
		{
			lastWeekDayOfMonth = endDayOfMonth;
		}

		let weekRange = moment.range(firstWeekDayOfMonth, lastWeekDayOfMonth);
		calendar.push(weekRange);
	}

	return {
		year,
		month,
		calendar,

		momentDate,

		firstDayOfMonth,
		endDayOfMonth,

		weeks,
	}
}

export function weeksMomentRangeReport(aData: IReturnTypeWeeksOfMonth, bData: IReturnTypeWeeksOfMonth)
{
	let maxWeeks = Math.max(aData.calendar.length, bData.calendar.length, 0);

	let calendar: [DateRange, DateRange][] = [];

	for (let i = 0; i < maxWeeks; i++)
	{
		calendar.push([aData.calendar[i], bData.calendar[i]])
	}

	return {
		aData,
		bData,

		calendar,

		maxWeeks,
	}
}

export function getWeekDayNames(locale: LocaleSpecifier = 'zh-tw', momentStatic: IMomentStatic = _moment)
{
	let m = momentStatic();

	if (locale !== void 0 && locale !== null)
	{
		m = m.locale(locale);
	}

	return (new Array(7))
		.fill(null)
		.map((v, i) => {
			return m
				.day(i)
				.format(`dddd`)
		})
		;
}
