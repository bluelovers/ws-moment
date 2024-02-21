'use strict';

var MomentStatic = require('moment');
var momentRange = require('moment-range');

let cachedMoment;
function wrapMoment(moment) {
  // @ts-ignore
  let t1 = typeof moment.isRange === 'function';
  // @ts-ignore
  let t2 = typeof moment.fn.within === 'function';
  if (t1 && !t2 || !t1 && t2) {
    throw new TypeError(`current moment already exists one of isRange or within method`);
  } else if (t1 && t2) {
    return moment;
  }
  return momentRange.extendMoment(moment);
}
function isMomentRange(moment) {
  // @ts-ignore
  return typeof moment.isRange === 'function' && typeof moment.fn.within === 'function';
}
function getMomentRange(moment) {
  var _ref;
  return cachedMoment = wrapMoment((_ref = moment !== null && moment !== void 0 ? moment : cachedMoment) !== null && _ref !== void 0 ? _ref : MomentStatic);
}
// @ts-ignore
{
  Object.defineProperty(getMomentRange, "__esModule", {
    value: true
  });
  Object.defineProperty(getMomentRange, 'getMomentRange', {
    value: getMomentRange
  });
  Object.defineProperty(getMomentRange, 'default', {
    value: getMomentRange
  });
  Object.defineProperty(getMomentRange, 'isMomentRange', {
    value: isMomentRange
  });
  Object.defineProperty(getMomentRange, 'wrapMoment', {
    value: wrapMoment
  });
}

// @ts-ignore
module.exports = getMomentRange;
//# sourceMappingURL=index.cjs.development.cjs.map
