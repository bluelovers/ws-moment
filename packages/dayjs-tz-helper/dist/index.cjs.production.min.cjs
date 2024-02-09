"use strict";

var e = require("dayjs"), t = require("dayjs/plugin/utc"), a = require("dayjs/plugin/timezone");

function _isUnsafeOffsetDateString(e) {
  return /(?:\dZ|\+\d{2}:?\d{2})$/.test(e);
}

function _isUnsafeUTCDateString(e) {
  return /(?:GMT|UTC)/.test(e);
}

function tzDayjsSafeParse(t, a) {
  var s;
  return "string" == typeof t && (_isUnsafeOffsetDateString(t) ? t = e.utc(t) : "GMT" !== a || _isUnsafeUTCDateString(t) ? t = e(t) : t += " GMT"), 
  e.tz(null !== (s = t) && void 0 !== s ? s : void 0, null != a ? a : void 0);
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
}), module.exports = tzDayjsSafeParse;
//# sourceMappingURL=index.cjs.production.min.cjs.map
