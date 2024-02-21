'use strict';

var moment = require('moment');

function lnMoment(m, unit, momentStatic = moment) {
  const baseMoment = momentStatic(m);
  const prevMoment = baseMoment.clone().add(-1, unit);
  const nextMoment = baseMoment.clone().add(1, unit);
  return {
    input: m,
    baseMoment,
    prevMoment,
    nextMoment
  };
}
function lnMomentMonth(m, momentStatic) {
  return lnMoment(m, 'month', momentStatic);
}
function lnMomentDay(m, momentStatic) {
  return lnMoment(m, 'day', momentStatic);
}
function lnMomentYear(m, momentStatic) {
  return lnMoment(m, 'year', momentStatic);
}
function firstEndOfMonth(m, momentStatic = moment) {
  const baseMoment = momentStatic(m);
  const firstDayOfMonth = baseMoment.clone().startOf('month');
  const endDayOfMonth = baseMoment.clone().endOf('month');
  return {
    input: m,
    baseMoment,
    firstDayOfMonth,
    endDayOfMonth
  };
}
// @ts-ignore
{
  Object.defineProperty(lnMoment, "__esModule", {
    value: true
  });
  Object.defineProperty(lnMoment, 'lnMoment', {
    value: lnMoment
  });
  Object.defineProperty(lnMoment, 'default', {
    value: lnMoment
  });
  Object.defineProperty(lnMoment, 'lnMomentMonth', {
    value: lnMomentMonth
  });
  Object.defineProperty(lnMoment, 'lnMomentDay', {
    value: lnMomentDay
  });
  Object.defineProperty(lnMoment, 'lnMomentYear', {
    value: lnMomentYear
  });
  Object.defineProperty(lnMoment, 'firstEndOfMonth', {
    value: firstEndOfMonth
  });
}

// @ts-ignore
module.exports = lnMoment;
//# sourceMappingURL=index.cjs.development.cjs.map
