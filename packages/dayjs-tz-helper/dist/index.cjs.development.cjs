'use strict';

var dayjs = require('dayjs');
var utc = require('dayjs/plugin/utc');
var timezone = require('dayjs/plugin/timezone');

dayjs.extend(utc);
dayjs.extend(timezone);
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
 * @example
 * tzDayjsSafeParse('Fri, 31 Mar 2023 04:00:00', 'GMT')
 *
 * @see https://github.com/iamkun/dayjs/issues/2300
 * @see https://github.com/iamkun/dayjs/issues/2303
 *
 * @see https://day.js.org/docs/en/timezone/timezone
 * @see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 */
function tzDayjsSafeParse(dateOrMilliseconds, timezone) {
  var _dateOrMilliseconds, _timezone$timezone;
  if (timezone === null || typeof timezone !== 'object') {
    timezone = {
      timezone
    };
  }
  if (typeof dateOrMilliseconds === 'string') {
    if (_isUnsafeOffsetDateString(dateOrMilliseconds)) {
      dateOrMilliseconds = dayjs.utc(dateOrMilliseconds);
    } else if (timezone.timezone === 'GMT' && !_isUnsafeUTCDateString(dateOrMilliseconds)) {
      dateOrMilliseconds += ' GMT';
    } else {
      dateOrMilliseconds = dayjs(dateOrMilliseconds);
    }
  } else if (typeof dateOrMilliseconds === 'number') {
    if (typeof timezone.minValidTimestamp === 'number') {
      dateOrMilliseconds = Math.max(dateOrMilliseconds, timezone.minValidTimestamp);
    } else if (timezone.minValidTimestamp) {
      dateOrMilliseconds = Math.max(dateOrMilliseconds, 0);
    }
    dateOrMilliseconds = (timezone.isUnixTimestampSeconds ? dayjs.unix : dayjs)(dateOrMilliseconds);
  }
  return dayjs.tz((_dateOrMilliseconds = dateOrMilliseconds) !== null && _dateOrMilliseconds !== void 0 ? _dateOrMilliseconds : void 0, (_timezone$timezone = timezone.timezone) !== null && _timezone$timezone !== void 0 ? _timezone$timezone : void 0);
}
function secondsToMilliseconds(timestamp) {
  return timestamp * 1000;
}
function millisecondsToSeconds(timestamp) {
  return timestamp / 1000;
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
  Object.defineProperty(tzDayjsSafeParse, 'secondsToMilliseconds', {
    value: secondsToMilliseconds
  });
  Object.defineProperty(tzDayjsSafeParse, 'millisecondsToSeconds', {
    value: millisecondsToSeconds
  });
}

// @ts-ignore
module.exports = tzDayjsSafeParse;
//# sourceMappingURL=index.cjs.development.cjs.map
