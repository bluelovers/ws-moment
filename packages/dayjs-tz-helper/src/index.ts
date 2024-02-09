import dayjs, { type ConfigType } from 'dayjs';
// @ts-ignore
import utc from 'dayjs/plugin/utc';
// @ts-ignore
import timezone from 'dayjs/plugin/timezone';

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
 * @example
 * tzDayjsSafeParse('2023-03-31T04:00:00.000Z')
 * tzDayjsSafeParse('2023-03-31T12:00:00+08:00')
 * tzDayjsSafeParse('2023-03-31T04:00:00.800Z')
 * tzDayjsSafeParse('2023-03-31T04:00:00+00:00')
 * // => 2023-03-31T04:00:00Z
 * // => 1680235200
 *
 * @see https://github.com/iamkun/dayjs/issues/2300
 * @see https://github.com/iamkun/dayjs/issues/2303
 */
export function tzDayjsSafeParse(date?: ConfigType, timezone?: string)
{
	if (typeof date === 'string')
	{
		if (_isUnsafeOffsetDateString(date))
		{
			/**
			 * for fix bug when parse end with `.000Z` , `Z` , `+00:00`
			 */
			date = dayjs.utc(date)
		}
		else if (timezone === 'GMT' && !_isUnsafeUTCDateString(date))
		{
			date += ' GMT';
		}
		else
		{
			date = dayjs(date);
		}
	}

	return dayjs.tz(date ?? void 0, timezone ?? void 0)
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

}
