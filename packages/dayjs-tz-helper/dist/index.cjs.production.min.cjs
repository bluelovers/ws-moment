"use strict";

var e = require("dayjs"), t = require("dayjs/plugin/utc"), a = require("dayjs/plugin/timezone");

function _isUnsafeOffsetDateString(e) {
  return /(?:\dZ|\+\d{2}:?\d{2})$/.test(e);
}

function _isUnsafeUTCDateString(e) {
  return /(?:GMT|UTC)/.test(e);
}

function tzDayjsSafeParse(t, a) {
  var s, n;
  return null !== a && "object" == typeof a || (a = {
    timezone: a
  }), "string" == typeof t ? _isUnsafeOffsetDateString(t) ? t = e.utc(t) : "GMT" !== a.timezone || _isUnsafeUTCDateString(t) ? t = e(t) : t += " GMT" : "number" == typeof t && ("number" == typeof a.minValidTimestamp ? t = Math.max(t, a.minValidTimestamp) : a.minValidTimestamp && (t = Math.max(t, 0)), 
  t = (a.isUnixTimestampSeconds ? e.unix : e)(t)), e.tz(null !== (s = t) && void 0 !== s ? s : void 0, null !== (n = a.timezone) && void 0 !== n ? n : void 0);
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
