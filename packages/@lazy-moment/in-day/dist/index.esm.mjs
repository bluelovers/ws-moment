import n from "moment";

function lnMoment(t, o, e = n) {
  const m = e(t), M = m.clone().add(-1, o), r = m.clone().add(1, o);
  return {
    input: t,
    baseMoment: m,
    prevMoment: M,
    nextMoment: r
  };
}

function lnMomentMonth(n, t) {
  return lnMoment(n, "month", t);
}

function lnMomentDay(n, t) {
  return lnMoment(n, "day", t);
}

function lnMomentYear(n, t) {
  return lnMoment(n, "year", t);
}

function firstEndOfMonth(t, o = n) {
  const e = o(t), m = e.clone().startOf("month"), M = e.clone().endOf("month");
  return {
    input: t,
    baseMoment: e,
    firstDayOfMonth: m,
    endDayOfMonth: M
  };
}

export { lnMoment as default, firstEndOfMonth, lnMoment, lnMomentDay, lnMomentMonth, lnMomentYear };
//# sourceMappingURL=index.esm.mjs.map
