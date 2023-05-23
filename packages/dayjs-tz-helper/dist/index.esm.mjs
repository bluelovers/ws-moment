import t from "dayjs";

function _isUnsafeOffsetDateString(t) {
  return /(?:\dZ|\+\d{2}:?\d{2})$/.test(t);
}

function tzDayjsSafeParse(e, a) {
  var s;
  return "string" == typeof e && _isUnsafeOffsetDateString(e) && (e = t.utc(e)), t.tz(null !== (s = e) && void 0 !== s ? s : void 0, null != a ? a : void 0);
}

export { _isUnsafeOffsetDateString, tzDayjsSafeParse as default, tzDayjsSafeParse };
//# sourceMappingURL=index.esm.mjs.map
