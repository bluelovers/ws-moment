"use strict";

var e = require("dayjs");

function _isUnsafeOffsetDateString(e) {
  return /(?:\dZ|\+\d{2}:?\d{2})$/.test(e);
}

function tzDayjsSafeParse(t, a) {
  var s;
  return "string" == typeof t && _isUnsafeOffsetDateString(t) && (t = e.utc(t)), e.tz(null !== (s = t) && void 0 !== s ? s : void 0, null != a ? a : void 0);
}

Object.defineProperty(tzDayjsSafeParse, "__esModule", {
  value: !0
}), Object.defineProperty(tzDayjsSafeParse, "x", {
  value: tzDayjsSafeParse
}), Object.defineProperty(tzDayjsSafeParse, "default", {
  value: tzDayjsSafeParse
}), Object.defineProperty(tzDayjsSafeParse, "_isUnsafeOffsetDateString", {
  value: _isUnsafeOffsetDateString
}), module.exports = tzDayjsSafeParse;
//# sourceMappingURL=index.cjs.production.min.cjs.map
