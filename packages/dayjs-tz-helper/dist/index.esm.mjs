import t from "dayjs";

function _isUnsafeOffsetDateString(t) {
  return /(?:\dZ|\+\d{2}:?\d{2})$/.test(t);
}

function _isUnsafeUTCDateString(t) {
  return /(?:GMT|UTC)/.test(t);
}

function tzDayjsSafeParse(e, s) {
  var a;
  return "string" == typeof e && (_isUnsafeOffsetDateString(e) ? e = t.utc(e) : "GMT" !== s || _isUnsafeUTCDateString(e) ? e = t(e) : e += " GMT"), 
  t.tz(null !== (a = e) && void 0 !== a ? a : void 0, null != s ? s : void 0);
}

export { _isUnsafeOffsetDateString, _isUnsafeUTCDateString, tzDayjsSafeParse as default, tzDayjsSafeParse };
//# sourceMappingURL=index.esm.mjs.map
