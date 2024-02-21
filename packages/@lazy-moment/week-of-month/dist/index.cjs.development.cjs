'use strict';

var _moment = require('moment');
var getMomentRange = require('@lazy-moment/moment-range');
var inDay = require('@lazy-moment/in-day');

function weeksOfMonth(date, momentStatic) {
  var _date;
  const moment = getMomentRange(momentStatic);
  (_date = date) !== null && _date !== void 0 ? _date : date = moment.now();
  const {
    baseMoment: momentDate,
    firstDayOfMonth,
    endDayOfMonth
  } = inDay.firstEndOfMonth(date, moment);
  const monthRange = moment.range(firstDayOfMonth, endDayOfMonth);
  const weeks = [];
  for (let mday of monthRange.by('days')) {
    if (weeks.indexOf(mday.week()) === -1) {
      weeks.push(mday.week());
    }
  }
  let firstWeekDayOfMonth;
  let lastWeekDayOfMonth;
  const year = momentDate.year();
  const month = momentDate.month();
  const calendar = [];
  for (let index = 0; index < weeks.length; index++) {
    let weeknumber = weeks[index];
    firstWeekDayOfMonth = moment().year(year).month(month).week(weeknumber).day(0);
    lastWeekDayOfMonth = moment().year(year).month(month).week(weeknumber).day(6);
    if (month == 11 && weeks.length - 1 == index) {
      firstWeekDayOfMonth = moment().year(year).month(month).week(weeks[index - 1]).day(0);
      firstWeekDayOfMonth.add(7, "day");
      lastWeekDayOfMonth = moment().year(year).month(month).week(weeks[index - 1]).day(6);
      lastWeekDayOfMonth.add(6, "day");
    }
    if (firstWeekDayOfMonth.isBefore(firstDayOfMonth)) {
      firstWeekDayOfMonth = firstDayOfMonth;
    }
    if (lastWeekDayOfMonth.isAfter(endDayOfMonth)) {
      lastWeekDayOfMonth = endDayOfMonth;
    }
    let weekRange = moment.range(firstWeekDayOfMonth, lastWeekDayOfMonth);
    calendar.push(weekRange);
  }
  return {
    year,
    month,
    calendar,
    momentDate,
    firstDayOfMonth,
    endDayOfMonth,
    weeks
  };
}
function weeksMomentRangeReport(aData, bData) {
  let maxWeeks = Math.max(aData.calendar.length, bData.calendar.length, 0);
  let calendar = [];
  for (let i = 0; i < maxWeeks; i++) {
    calendar.push([aData.calendar[i], bData.calendar[i]]);
  }
  return {
    aData,
    bData,
    calendar,
    maxWeeks
  };
}
function getWeekDayNames(locale = 'zh-tw', momentStatic = _moment) {
  let m = momentStatic();
  if (locale !== void 0 && locale !== null) {
    m = m.locale(locale);
  }
  return new Array(7).fill(null).map((v, i) => {
    return m.day(i).format(`dddd`);
  });
}
// @ts-ignore
{
  Object.defineProperty(weeksOfMonth, "__esModule", {
    value: true
  });
  Object.defineProperty(weeksOfMonth, 'weeksOfMonth', {
    value: weeksOfMonth
  });
  Object.defineProperty(weeksOfMonth, 'default', {
    value: weeksOfMonth
  });
  Object.defineProperty(weeksOfMonth, 'weeksMomentRangeReport', {
    value: weeksMomentRangeReport
  });
  Object.defineProperty(weeksOfMonth, 'getWeekDayNames', {
    value: getWeekDayNames
  });
}

// @ts-ignore
module.exports = weeksOfMonth;
//# sourceMappingURL=index.cjs.development.cjs.map
