//@noUnusedParameters:false
/// <reference types="jest" />
/// <reference types="node" />
/// <reference types="expect" />

import { basename, extname } from 'path';
import tzDayjsSafeParse from '../src/index';
// @ts-ignore
import dayjs, { Dayjs, ConfigType } from 'dayjs';
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

		1680235200000,
	])('%s', (input) => {
		let actual = tzDayjsSafeParse(input);
		let expected;

		_dayjsToMatchSnapshot(input, actual, {
			[`format:GMT`]: '2023-03-31T04:00:00Z',
			[`format:${TZ_TIME_ZONE}`]: '2023-03-31T12:00:00+08:00',
			unix: 1680235200,
		});
	});

})

describe(`1970-01-01T00:00:00.000Z`, () =>
{

	test.each([
		0,
		-1,
		'0',
		'-1',
	])('%s', (input) =>
	{
		let actual = tzDayjsSafeParse(input);
		let expected;

		_dayjsToMatchSnapshot(input, actual);

		let actual2 = tzDayjsSafeParse(input, {
			minValidTimestamp: true,
		});

		expect({
			input,
			actual2,
			isValid: actual2.isValid(),
		}).toMatchSnapshot();
	});

	test.each([
		Infinity,
		-Infinity,
	])('%s', (input) =>
	{
		let actual = tzDayjsSafeParse(input);

		expect(typeof input).toStrictEqual('number');

		expect({
			input,
			actual,
			isValid: actual.isValid(),
		}).toMatchSnapshot();

		let actual2 = tzDayjsSafeParse(input, {
			minValidTimestamp: true,
		});

		expect({
			input,
			actual2,
			isValid: actual2.isValid(),
		}).toMatchSnapshot();

	});

});

function _dayjsToMatchSnapshot(input: ConfigType, actual: Dayjs, propertyMatchers?: any)
{
	let e = expect({
		input,
		actual,
		isValid: actual.isValid(),

		[`format:GMT`]: actual.tz('GMT').format(),
		[`format:${TZ_TIME_ZONE}`]: actual.tz(TZ_TIME_ZONE).format(),
		[`format`]: actual.format(),
		toISOString: actual.toISOString(),
		toJSON: actual.toJSON(),

		unix: actual.unix(),
		valueOf: actual.valueOf(),

		dayjs: dayjs(input).format(),
	});

	propertyMatchers ? e.toMatchSnapshot(propertyMatchers) : e.toMatchSnapshot();
}
