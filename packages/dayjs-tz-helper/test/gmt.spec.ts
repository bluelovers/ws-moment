//@noUnusedParameters:false
/// <reference types="jest" />
/// <reference types="node" />
/// <reference types="expect" />

import { basename, extname } from 'path';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import tzDayjsSafeParse from '../src';

beforeAll(async () =>
{
	dayjs.extend(utc);
	dayjs.extend(timezone);
});

describe(`GMT`, () =>
{
	beforeAll(async () =>
	{
		dayjs.tz.setDefault('GMT');
	});

	test.skip(`dummy`, () => {});

	test.each([
		'Fri, 31 Mar 2023 04:00:00 GMT',
		'Fri, 31 Mar 2023 04:00:00',
	])(`%s`, (input) =>
	{

		let actual = tzDayjsSafeParse(input, 'GMT');
		let expected;

		expect({
			input,
			actual,
			toISOString: actual.toISOString(),
			dayjs: dayjs(input),
			[`dayjs:utc`]: dayjs.utc(input),
			[`dayjs:tz`]: dayjs.tz(input, 'GMT'),
		}).toMatchSnapshot({
			toISOString: '2023-03-31T04:00:00.000Z',
		});

	});

})
