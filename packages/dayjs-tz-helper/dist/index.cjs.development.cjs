'use strict';

var dayjs = require('dayjs');

function _isUnsafeOffsetDateString(date) {
  return /(?:\dZ|\+\d{2}:?\d{2})$/.test(date);
}
function tzDayjsSafeParse(date, timezone) {
  var _date;
  if (typeof date === 'string' && _isUnsafeOffsetDateString(date)) {
    date = dayjs.utc(date);
  }
  return dayjs.tz((_date = date) !== null && _date !== void 0 ? _date : void 0, timezone !== null && timezone !== void 0 ? timezone : void 0);
}
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
}

// @ts-ignore
module.exports = tzDayjsSafeParse;
//# sourceMappingURL=index.cjs.development.cjs.map
