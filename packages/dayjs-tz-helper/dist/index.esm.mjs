import t from "dayjs";

import e from "dayjs/plugin/utc";

import n from "dayjs/plugin/timezone";

function _isUnsafeOffsetDateString(t) {
  return /(?:\dZ|\+\d{2}:?\d{2})$/.test(t);
}

function _isUnsafeUTCDateString(t) {
  return /(?:GMT|UTC)/.test(t);
}

function tzDayjsSafeParse(e, n) {
  var s;
  return "string" == typeof e && (_isUnsafeOffsetDateString(e) ? e = t.utc(e) : "GMT" !== n || _isUnsafeUTCDateString(e) ? e = t(e) : e += " GMT"), 
  t.tz(null !== (s = e) && void 0 !== s ? s : void 0, null != n ? n : void 0);
}

t.extend(e), t.extend(n);

export { _isUnsafeOffsetDateString, _isUnsafeUTCDateString, tzDayjsSafeParse as default, tzDayjsSafeParse };
//# sourceMappingURL=index.esm.mjs.map
