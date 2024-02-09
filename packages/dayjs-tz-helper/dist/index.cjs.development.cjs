'use strict';

var dayjs = require('dayjs');

function _isUnsafeOffsetDateString(date) {
  return /(?:\dZ|\+\d{2}:?\d{2})$/.test(date);
}
function _isUnsafeUTCDateString(date) {
  return /(?:GMT|UTC)/.test(date);
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
function tzDayjsSafeParse(date, timezone) {
  var _date;
  if (typeof date === 'string') {
    if (_isUnsafeOffsetDateString(date)) {
      date = dayjs.utc(date);
    } else if (timezone === 'GMT' && !_isUnsafeUTCDateString(date)) {
      date += ' GMT';
    } else {
      date = dayjs(date);
    }
  }
  return dayjs.tz((_date = date) !== null && _date !== void 0 ? _date : void 0, timezone !== null && timezone !== void 0 ? timezone : void 0);
}
// @ts-ignore
{
  Object.defineProperty(tzDayjsSafeParse, "__esModule", {
    value: true
  });
  Object.defineProperty(tzDayjsSafeParse, 'tzDayjsSafeParse', {
    value: tzDayjsSafeParse
  });
  Object.defineProperty(tzDayjsSafeParse, 'default', {
    value: tzDayjsSafeParse
  });
  Object.defineProperty(tzDayjsSafeParse, '_isUnsafeOffsetDateString', {
    value: _isUnsafeOffsetDateString
  });
  Object.defineProperty(tzDayjsSafeParse, '_isUnsafeUTCDateString', {
    value: _isUnsafeUTCDateString
  });
}

// @ts-ignore
module.exports = tzDayjsSafeParse;
//# sourceMappingURL=index.cjs.development.cjs.map
