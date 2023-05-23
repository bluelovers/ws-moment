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

export const TZ_TIME_ZONE = "Asia/Taipei" as const

beforeAll(async () =>
{
	dayjs.extend(utc);
	dayjs.extend(timezone);

	dayjs.tz.setDefault(TZ_TIME_ZONE);
});

describe(basename(__filename, extname(__filename)), () =>
{

	test.skip(`dummy`, () => {});

	[
		'2023-03-31T04:00:00.000Z',
		'2023-03-31T12:00:00+08:00',
		'2023-03-31T04:00:00.800Z',
		'2023-03-31T04:00:00+00:00',
		'2023-03-31T12:00:00',
	].forEach(input => {

		test(input, () =>
		{

			let actual = tzDayjsSafeParse(input);
			let expected;

			expect({
				format: actual.tz('GMT').format(),
				format2: actual.tz(TZ_TIME_ZONE).format(),
				toISOString: actual.toISOString(),
				toJSON: actual.toJSON(),
				unix: actual.unix(),
			}).toMatchSnapshot({
				format: '2023-03-31T04:00:00Z',
				format2: '2023-03-31T12:00:00+08:00',
				unix: 1680235200,
			});

		});

	});

})
