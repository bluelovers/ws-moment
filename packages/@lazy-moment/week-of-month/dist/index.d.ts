import { DateRange, IMomentStatic } from '@lazy-moment/moment-range';
import { LocaleSpecifier, Moment, MomentInput } from 'moment';

export interface IReturnTypeWeeksOfMonth {
	year: number;
	month: number;
	calendar: DateRange[];
	momentDate: Moment;
	firstDayOfMonth: Moment;
	endDayOfMonth: Moment;
	weeks: number[];
}
export declare function weeksOfMonth(date?: MomentInput, momentStatic?: IMomentStatic): IReturnTypeWeeksOfMonth;
export declare function weeksMomentRangeReport(aData: IReturnTypeWeeksOfMonth, bData: IReturnTypeWeeksOfMonth): {
	aData: IReturnTypeWeeksOfMonth;
	bData: IReturnTypeWeeksOfMonth;
	calendar: [
		DateRange,
		DateRange
	][];
	maxWeeks: number;
};
export declare function getWeekDayNames(locale?: LocaleSpecifier, momentStatic?: IMomentStatic): string[];

export {
	weeksOfMonth as default,
};

export {};
