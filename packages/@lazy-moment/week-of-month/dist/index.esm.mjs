import e from "moment";

import a from "@lazy-moment/moment-range";

import { firstEndOfMonth as t } from "@lazy-moment/in-day";

function weeksOfMonth(e, n) {
  var o;
  const r = a(n);
  null !== (o = e) && void 0 !== o || (e = r.now());
  const {baseMoment: l, firstDayOfMonth: m, endDayOfMonth: d} = t(e, r), f = r.range(m, d), y = [];
  for (let e of f.by("days")) -1 === y.indexOf(e.week()) && y.push(e.week());
  let h, s;
  const k = l.year(), w = l.month(), i = [];
  for (let e = 0; e < y.length; e++) {
    let a = y[e];
    h = r().year(k).month(w).week(a).day(0), s = r().year(k).month(w).week(a).day(6), 
    11 == w && y.length - 1 == e && (h = r().year(k).month(w).week(y[e - 1]).day(0), 
    h.add(7, "day"), s = r().year(k).month(w).week(y[e - 1]).day(6), s.add(6, "day")), 
    h.isBefore(m) && (h = m), s.isAfter(d) && (s = d);
    let t = r.range(h, s);
    i.push(t);
  }
  return {
    year: k,
    month: w,
    calendar: i,
    momentDate: l,
    firstDayOfMonth: m,
    endDayOfMonth: d,
    weeks: y
  };
}

function weeksMomentRangeReport(e, a) {
  let t = Math.max(e.calendar.length, a.calendar.length, 0), n = [];
  for (let o = 0; o < t; o++) n.push([ e.calendar[o], a.calendar[o] ]);
  return {
    aData: e,
    bData: a,
    calendar: n,
    maxWeeks: t
  };
}

function getWeekDayNames(a = "zh-tw", t = e) {
  let n = t();
  return null != a && (n = n.locale(a)), new Array(7).fill(null).map(((e, a) => n.day(a).format("dddd")));
}

export { weeksOfMonth as default, getWeekDayNames, weeksMomentRangeReport, weeksOfMonth };
//# sourceMappingURL=index.esm.mjs.map
