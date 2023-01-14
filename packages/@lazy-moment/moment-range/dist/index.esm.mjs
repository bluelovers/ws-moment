import n from "moment";

import { extendMoment as e } from "moment-range";

let t;

function wrapMoment(n) {
  let t = "function" == typeof n.isRange, o = "function" == typeof n.fn.within;
  if (t && !o || !t && o) throw new TypeError("current moment already exists one of isRange or within method");
  return t && o ? n : e(n);
}

function isMomentRange(n) {
  return "function" == typeof n.isRange && "function" == typeof n.fn.within;
}

function getMomentRange(e) {
  var o;
  return t = wrapMoment(null !== (o = null != e ? e : t) && void 0 !== o ? o : n);
}

export { getMomentRange as default, getMomentRange, isMomentRange, wrapMoment };
//# sourceMappingURL=index.esm.mjs.map
