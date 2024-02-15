import dayjs from 'dayjs';
import { ConfigType } from 'dayjs';

/**
 * detect end with `.000Z` , `Z` , `+00:00`
 */
export declare function _isUnsafeOffsetDateString(date: string): boolean;
export declare function _isUnsafeUTCDateString(date: string): boolean;
/**
 * Day.js supports time zone via the Internationalization API in supported environments. By using the native API, no extra bytes of timezone data need to be included in code bundle.
 * The list of all time zone names can be found in the IANA database.
 *
 * @see https://day.js.org/docs/en/timezone/timezone
 * @see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 */
export type ITimezone = string | "GMT" | "Asia/Taipei" | "Asia/Tokyo" | "America/New_York";
export interface IOptionsTzDayjsSafeParse {
	/**
	 * Day.js supports time zone via the Internationalization API in supported environments. By using the native API, no extra bytes of timezone data need to be included in code bundle.
	 * The list of all time zone names can be found in the IANA database.
	 *
	 * @see https://day.js.org/docs/en/timezone/timezone
	 * @see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
	 */
	timezone?: ITimezone;
	/**
	 * Minimum valid timestamp.
	 * If set to `true` or `0`, it represents `1970-01-01T00:00:00.000Z`.
	 *
	 * Only works when the input is a number.
	 */
	minValidTimestamp?: number | boolean;
	/**
	 * If set to `true`, use the input timestamp as Unix Timestamp (seconds).
	 * Equivalent to `dayjs.unix(1318781876.721)` or `dayjs(timestamp * 1000)`.
	 *
	 * Only works when the input is a number.
	 *
	 * @see https://day.js.org/docs/en/parse/unix-timestamp
	 */
	isUnixTimestampSeconds?: boolean;
}
/**
 * @example
 * tzDayjsSafeParse('2023-03-31T04:00:00.000Z')
 * tzDayjsSafeParse('2023-03-31T12:00:00+08:00')
 * tzDayjsSafeParse('2023-03-31T04:00:00.800Z')
 * tzDayjsSafeParse('2023-03-31T04:00:00+00:00')
 * // => 2023-03-31T04:00:00Z
 * // => 1680235200
 * @example
 * tzDayjsSafeParse('Fri, 31 Mar 2023 04:00:00', 'GMT')
 *
 * @see https://github.com/iamkun/dayjs/issues/2300
 * @see https://github.com/iamkun/dayjs/issues/2303
 *
 * @see https://day.js.org/docs/en/timezone/timezone
 * @see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 */
export declare function tzDayjsSafeParse(dateOrMilliseconds?: ConfigType, timezone?: ITimezone | IOptionsTzDayjsSafeParse): dayjs.Dayjs;
export declare function secondsToMilliseconds(timestamp: number): number;
export declare function millisecondsToSeconds(timestamp: number): number;

export {
	tzDayjsSafeParse as default,
};

export {};
