"use strict";

var e = require("moment"), n = require("moment-range");

let t;

function wrapMoment(e) {
  let t = "function" == typeof e.isRange, o = "function" == typeof e.fn.within;
  if (t && !o || !t && o) throw new TypeError("current moment already exists one of isRange or within method");
  return t && o ? e : n.extendMoment(e);
}

function getMomentRange(n) {
  var o;
  return t = wrapMoment(null !== (o = null != n ? n : t) && void 0 !== o ? o : e);
}

Object.defineProperty(getMomentRange, "__esModule", {
  value: !0
}), Object.defineProperty(getMomentRange, "getMomentRange", {
  value: getMomentRange
}), Object.defineProperty(getMomentRange, "default", {
  value: getMomentRange
}), Object.defineProperty(getMomentRange, "isMomentRange", {
  value: function isMomentRange(e) {
    return "function" == typeof e.isRange && "function" == typeof e.fn.within;
  }
}), Object.defineProperty(getMomentRange, "wrapMoment", {
  value: wrapMoment
}), module.exports = getMomentRange;
//# sourceMappingURL=index.cjs.production.min.cjs.map
