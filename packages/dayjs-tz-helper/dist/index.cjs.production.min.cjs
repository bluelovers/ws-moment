"use strict";

var e = require("dayjs");

function _isUnsafeOffsetDateString(e) {
  return /(?:\dZ|\+\d{2}:?\d{2})$/.test(e);
}

function tzDayjsSafeParse(a, t) {
  var s;
  return "string" == typeof a && _isUnsafeOffsetDateString(a) && (a = e.utc(a)), e.tz(null !== (s = a) && void 0 !== s ? s : void 0, null != t ? t : void 0);
}

Object.defineProperty(tzDayjsSafeParse, "__esModule", {
  value: !0
}), Object.defineProperty(tzDayjsSafeParse, "tzDayjsSafeParse", {
  value: tzDayjsSafeParse
}), Object.defineProperty(tzDayjsSafeParse, "default", {
  value: tzDayjsSafeParse
}), Object.defineProperty(tzDayjsSafeParse, "_isUnsafeOffsetDateString", {
  value: _isUnsafeOffsetDateString
}), module.exports = tzDayjsSafeParse;
//# sourceMappingURL=index.cjs.production.min.cjs.map
