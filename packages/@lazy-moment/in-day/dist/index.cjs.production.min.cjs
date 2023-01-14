"use strict";

var n = require("moment");

function lnMoment(e, t, o = n) {
  const r = o(e), l = r.clone().add(-1, t), M = r.clone().add(1, t);
  return {
    input: e,
    baseMoment: r,
    prevMoment: l,
    nextMoment: M
  };
}

Object.defineProperty(lnMoment, "__esModule", {
  value: !0
}), Object.defineProperty(lnMoment, "lnMoment", {
  value: lnMoment
}), Object.defineProperty(lnMoment, "default", {
  value: lnMoment
}), Object.defineProperty(lnMoment, "lnMomentMonth", {
  value: function lnMomentMonth(n, e) {
    return lnMoment(n, "month", e);
  }
}), Object.defineProperty(lnMoment, "lnMomentDay", {
  value: function lnMomentDay(n, e) {
    return lnMoment(n, "day", e);
  }
}), Object.defineProperty(lnMoment, "lnMomentYear", {
  value: function lnMomentYear(n, e) {
    return lnMoment(n, "year", e);
  }
}), Object.defineProperty(lnMoment, "firstEndOfMonth", {
  value: function firstEndOfMonth(e, t = n) {
    const o = t(e), r = o.clone().startOf("month"), l = o.clone().endOf("month");
    return {
      input: e,
      baseMoment: o,
      firstDayOfMonth: r,
      endDayOfMonth: l
    };
  }
}), module.exports = lnMoment;
//# sourceMappingURL=index.cjs.production.min.cjs.map
