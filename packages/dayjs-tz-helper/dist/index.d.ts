import dayjs from 'dayjs';
import { ConfigType } from 'dayjs';

/**
 * detect end with `.000Z` , `Z` , `+00:00`
 */
export declare function _isUnsafeOffsetDateString(date: string): boolean;
export declare function _isUnsafeUTCDateString(date: string): boolean;
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
export declare function tzDayjsSafeParse(date?: ConfigType, timezone?: string): dayjs.Dayjs;

export {
	tzDayjsSafeParse as default,
};

export {};
