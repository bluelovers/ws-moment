import MomentStatic, { Moment, MomentInput } from 'moment';
import getMomentRange, { wrapMoment } from '../src/index';

describe(`describe`, () =>
{

	test(`test`, () =>
	{
		// @ts-ignore
		expect(MomentStatic.isRange).toBeUndefined();
		// @ts-ignore
		expect(MomentStatic.fn.within).toBeUndefined();

		let actual = getMomentRange();
		let expected;

		// @ts-ignore
		expect(MomentStatic.isRange).not.toBeUndefined();
		// @ts-ignore
		expect(MomentStatic.fn.within).not.toBeUndefined();

		expect(() => {
			wrapMoment(MomentStatic);
		}).not.toThrowError();

		expect(() => {
			wrapMoment(actual);
		}).not.toThrowError();

		//expect(actual).toStrictEqual(expected);
		//expect(actual).toBeInstanceOf(Date);
		//expect(actual).toMatchSnapshot();

	});

})
