"use strict";

var e = require("moment"), t = require("@lazy-moment/moment-range"), n = require("@lazy-moment/in-day");

function weeksOfMonth(e, a) {
  var o;
  const r = t(a);
  null !== (o = e) && void 0 !== o || (e = r.now());
  const {baseMoment: l, firstDayOfMonth: d, endDayOfMonth: f} = n.firstEndOfMonth(e, r), s = r.range(d, f), h = [];
  for (let e of s.by("days")) -1 === h.indexOf(e.week()) && h.push(e.week());
  let y, m;
  const u = l.year(), k = l.month(), w = [];
  for (let e = 0; e < h.length; e++) {
    let t = h[e];
    y = r().year(u).month(k).week(t).day(0), m = r().year(u).month(k).week(t).day(6), 
    11 == k && h.length - 1 == e && (y = r().year(u).month(k).week(h[e - 1]).day(0), 
    y.add(7, "day"), m = r().year(u).month(k).week(h[e - 1]).day(6), m.add(6, "day")), 
    y.isBefore(d) && (y = d), m.isAfter(f) && (m = f);
    let n = r.range(y, m);
    w.push(n);
  }
  return {
    year: u,
    month: k,
    calendar: w,
    momentDate: l,
    firstDayOfMonth: d,
    endDayOfMonth: f,
    weeks: h
  };
}

Object.defineProperty(weeksOfMonth, "__esModule", {
  value: !0
}), Object.defineProperty(weeksOfMonth, "weeksOfMonth", {
  value: weeksOfMonth
}), Object.defineProperty(weeksOfMonth, "default", {
  value: weeksOfMonth
}), Object.defineProperty(weeksOfMonth, "weeksMomentRangeReport", {
  value: function weeksMomentRangeReport(e, t) {
    let n = Math.max(e.calendar.length, t.calendar.length, 0), a = [];
    for (let o = 0; o < n; o++) a.push([ e.calendar[o], t.calendar[o] ]);
    return {
      aData: e,
      bData: t,
      calendar: a,
      maxWeeks: n
    };
  }
}), Object.defineProperty(weeksOfMonth, "getWeekDayNames", {
  value: function getWeekDayNames(t = "zh-tw", n = e) {
    let a = n();
    return null != t && (a = a.locale(t)), new Array(7).fill(null).map(((e, t) => a.day(t).format("dddd")));
  }
}), module.exports = weeksOfMonth;
//# sourceMappingURL=index.cjs.production.min.cjs.map
