import dayjs, { type ConfigType } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * detect end with `.000Z` , `Z` , `+00:00`
 */
export function _isUnsafeOffsetDateString(date: string)
{
	return /(?:\dZ|\+\d{2}:?\d{2})$/.test(date)
}

export function _isUnsafeUTCDateString(date: string)
{
	return /(?:GMT|UTC)/.test(date)
}

/**
 * Day.js supports time zone via the Internationalization API in supported environments. By using the native API, no extra bytes of timezone data need to be included in code bundle.
 * The list of all time zone names can be found in the IANA database.
 *
 * @see https://day.js.org/docs/en/timezone/timezone
 * @see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 */
export type ITimezone = string | 'GMT' | 'Asia/Taipei' | 'Asia/Tokyo' | 'America/New_York';

export interface IOptionsTzDayjsSafeParse
{
	/**
	 * Day.js supports time zone via the Internationalization API in supported environments. By using the native API, no extra bytes of timezone data need to be included in code bundle.
	 * The list of all time zone names can be found in the IANA database.
	 *
	 * @see https://day.js.org/docs/en/timezone/timezone
	 * @see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
	 */
	timezone?: ITimezone,
	/**
	 * Minimum valid timestamp.
	 * If set to `true` or `0`, it represents `1970-01-01T00:00:00.000Z`.
	 *
	 * Only works when the input is a number.
	 */
	minValidTimestamp?: number | boolean,
	/**
	 * If set to `true`, use the input timestamp as Unix Timestamp (seconds).
	 * Equivalent to `dayjs.unix(1318781876.721)` or `dayjs(timestamp * 1000)`.
	 *
	 * Only works when the input is a number.
	 *
	 * @see https://day.js.org/docs/en/parse/unix-timestamp
	 */
	isUnixTimestampSeconds?: boolean,
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
export function tzDayjsSafeParse(dateOrMilliseconds?: ConfigType, timezone?: ITimezone | IOptionsTzDayjsSafeParse)
{
	if (timezone === null || typeof timezone !== 'object')
	{
		timezone = {
			timezone,
		} as IOptionsTzDayjsSafeParse
	}

	if (typeof dateOrMilliseconds === 'string')
	{
		if (_isUnsafeOffsetDateString(dateOrMilliseconds))
		{
			/**
			 * for fix bug when parse end with `.000Z` , `Z` , `+00:00`
			 */
			dateOrMilliseconds = dayjs.utc(dateOrMilliseconds)
		}
		else if (timezone.timezone === 'GMT' && !_isUnsafeUTCDateString(dateOrMilliseconds))
		{
			dateOrMilliseconds += ' GMT';
		}
		else
		{
			dateOrMilliseconds = dayjs(dateOrMilliseconds);
		}
	}
	else if (typeof dateOrMilliseconds === 'number')
	{
		if (typeof timezone.minValidTimestamp === 'number')
		{
			dateOrMilliseconds = Math.max(dateOrMilliseconds, timezone.minValidTimestamp);
		}
		else if (timezone.minValidTimestamp)
		{
			dateOrMilliseconds = Math.max(dateOrMilliseconds, 0);
		}

		dateOrMilliseconds = (timezone.isUnixTimestampSeconds ? dayjs.unix : dayjs)(dateOrMilliseconds);
	}

	return dayjs.tz(dateOrMilliseconds ?? void 0, timezone.timezone ?? void 0)
}

export function secondsToMilliseconds(timestamp: number)
{
	return timestamp * 1000
}

export function millisecondsToSeconds(timestamp: number)
{
	return timestamp / 1000
}

export default tzDayjsSafeParse

// @ts-ignore
if (process.env.TSDX_FORMAT !== 'esm')
{
	Object.defineProperty(tzDayjsSafeParse, "__esModule", { value: true });

	Object.defineProperty(tzDayjsSafeParse, 'tzDayjsSafeParse', { value: tzDayjsSafeParse });
	Object.defineProperty(tzDayjsSafeParse, 'default', { value: tzDayjsSafeParse });

	Object.defineProperty(tzDayjsSafeParse, '_isUnsafeOffsetDateString', { value: _isUnsafeOffsetDateString });
	Object.defineProperty(tzDayjsSafeParse, '_isUnsafeUTCDateString', { value: _isUnsafeUTCDateString });

	Object.defineProperty(tzDayjsSafeParse, 'secondsToMilliseconds', { value: secondsToMilliseconds });
	Object.defineProperty(tzDayjsSafeParse, 'millisecondsToSeconds', { value: millisecondsToSeconds });

}
