//@noUnusedParameters:false
/// <reference types="jest" />
/// <reference types="node" />
/// <reference types="expect" />

import { basename, extname } from 'path';
import tzDayjsSafeParse from '../src/index';
// @ts-ignore
import dayjs from 'dayjs';
// @ts-ignore
import utc from 'dayjs/plugin/utc';
// @ts-ignore
import timezone from 'dayjs/plugin/timezone';

const TZ_TIME_ZONE = "Asia/Taipei" as const

beforeAll(async () =>
{
	dayjs.extend(utc);
	dayjs.extend(timezone);
});

describe(basename(__filename, extname(__filename)), () =>
{
	beforeAll(async () =>
	{
		dayjs.tz.setDefault(TZ_TIME_ZONE);
	});

	test.skip(`dummy`, () => {});

	test.each([
		'2023-03-31T04:00:00.000Z',
		'2023-03-31T04:00:00.800Z',
		'2023-03-31T04:00:00+00:00',
		'Fri, 31-Mar-2023 04:00:00 GMT',
		'Fri, 31 Mar 2023 04:00:00 GMT',

		'2023-03-31T12:00:00+08:00',
		'2023-03-31T12:00:00',
		'Fri, 31-Mar-2023 12:00:00',
		'Fri, 31 Mar 2023 12:00:00',
	])('%s', (input) => {
		let actual = tzDayjsSafeParse(input);
		let expected;

		expect({
			input,
			[`format:GMT`]: actual.tz('GMT').format(),
			[`format:${TZ_TIME_ZONE}`]: actual.tz(TZ_TIME_ZONE).format(),
			[`format`]: actual.format(),
			toISOString: actual.toISOString(),
			toJSON: actual.toJSON(),
			unix: actual.unix(),
			dayjs: dayjs(input).format(),
		}).toMatchSnapshot({
			[`format:GMT`]: '2023-03-31T04:00:00Z',
			[`format:${TZ_TIME_ZONE}`]: '2023-03-31T12:00:00+08:00',
			unix: 1680235200,
		});
	});

})
