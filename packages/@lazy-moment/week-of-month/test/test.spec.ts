import { weeksOfMonth } from '../index';

describe(`describe`, () =>
{

	test(`test`, () =>
	{

		let actual = weeksOfMonth('2021-02-15 00:00:00');
		let expected;

		expect(actual.calendar.length).toStrictEqual(5);
		//expect(actual).toBeInstanceOf(Date);
		//expect(actual).toMatchSnapshot();

	});

})
