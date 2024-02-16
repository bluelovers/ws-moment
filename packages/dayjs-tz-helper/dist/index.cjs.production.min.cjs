"use strict";

var e = require("dayjs"), t = require("dayjs/plugin/utc"), a = require("dayjs/plugin/timezone"), s = require("@lazy-num/parse-number-string");

function _isUnsafeOffsetDateString(e) {
  return /(?:\dZ|\+\d{2}:?\d{2})$/.test(e);
}

function _isUnsafeUTCDateString(e) {
  return /(?:GMT|UTC)/.test(e);
}

function tzDayjsSafeParse(t, a) {
  var n, i;
  return null !== a && "object" == typeof a || (a = {
    timezone: a
  }), "number" == typeof t || s.isFloatString(t) ? (t = Number(t), "number" == typeof a.minValidTimestamp ? t = Math.max(t, a.minValidTimestamp) : a.minValidTimestamp && (t = Math.max(t, 0)), 
  t = (a.isUnixTimestampSeconds ? e.unix : e)(t)) : "string" == typeof t && (_isUnsafeOffsetDateString(t) ? t = e.utc(t) : "GMT" !== a.timezone || _isUnsafeUTCDateString(t) ? t = e(t) : t += " GMT"), 
  e.tz(null !== (n = t) && void 0 !== n ? n : void 0, null !== (i = a.timezone) && void 0 !== i ? i : void 0);
}

e.extend(t), e.extend(a), Object.defineProperty(tzDayjsSafeParse, "__esModule", {
  value: !0
}), Object.defineProperty(tzDayjsSafeParse, "tzDayjsSafeParse", {
  value: tzDayjsSafeParse
}), Object.defineProperty(tzDayjsSafeParse, "default", {
  value: tzDayjsSafeParse
}), Object.defineProperty(tzDayjsSafeParse, "_isUnsafeOffsetDateString", {
  value: _isUnsafeOffsetDateString
}), Object.defineProperty(tzDayjsSafeParse, "_isUnsafeUTCDateString", {
  value: _isUnsafeUTCDateString
}), Object.defineProperty(tzDayjsSafeParse, "secondsToMilliseconds", {
  value: function secondsToMilliseconds(e) {
    return 1000 * e;
  }
}), Object.defineProperty(tzDayjsSafeParse, "millisecondsToSeconds", {
  value: function millisecondsToSeconds(e) {
    return e / 1000;
  }
}), module.exports = tzDayjsSafeParse;
//# sourceMappingURL=index.cjs.production.min.cjs.map
