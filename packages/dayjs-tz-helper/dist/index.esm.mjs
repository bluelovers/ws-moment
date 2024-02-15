import e from "dayjs";

import t from "dayjs/plugin/utc";

import n from "dayjs/plugin/timezone";

function _isUnsafeOffsetDateString(e) {
  return /(?:\dZ|\+\d{2}:?\d{2})$/.test(e);
}

function _isUnsafeUTCDateString(e) {
  return /(?:GMT|UTC)/.test(e);
}

function tzDayjsSafeParse(t, n) {
  var i, s;
  return null !== n && "object" == typeof n || (n = {
    timezone: n
  }), "string" == typeof t ? _isUnsafeOffsetDateString(t) ? t = e.utc(t) : "GMT" !== n.timezone || _isUnsafeUTCDateString(t) ? t = e(t) : t += " GMT" : "number" == typeof t && ("number" == typeof n.minValidTimestamp ? t = Math.max(t, n.minValidTimestamp) : n.minValidTimestamp && (t = Math.max(t, 0)), 
  t = (n.isUnixTimestampSeconds ? e.unix : e)(t)), e.tz(null !== (i = t) && void 0 !== i ? i : void 0, null !== (s = n.timezone) && void 0 !== s ? s : void 0);
}

function secondsToMilliseconds(e) {
  return 1000 * e;
}

function millisecondsToSeconds(e) {
  return e / 1000;
}

e.extend(t), e.extend(n);

export { _isUnsafeOffsetDateString, _isUnsafeUTCDateString, tzDayjsSafeParse as default, millisecondsToSeconds, secondsToMilliseconds, tzDayjsSafeParse };
//# sourceMappingURL=index.esm.mjs.map
