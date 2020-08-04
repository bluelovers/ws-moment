"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMomentRange = exports.isMomentRange = exports.wrapMoment = void 0;
const moment_1 = __importDefault(require("moment"));
const moment_range_1 = require("moment-range");
let cachedMoment;
function wrapMoment(moment) {
    // @ts-ignore
    let t1 = typeof moment.isRange === 'function';
    // @ts-ignore
    let t2 = typeof moment.within === 'function';
    if (t1 && !t2 || !t1 && t2) {
        throw new TypeError(`current moment already exists one of isRange or within method`);
    }
    else if (t1 && t2) {
        return moment;
    }
    return moment_range_1.extendMoment(moment);
}
exports.wrapMoment = wrapMoment;
function isMomentRange(moment) {
    // @ts-ignore
    return typeof moment.isRange === 'function' && typeof moment.within === 'function';
}
exports.isMomentRange = isMomentRange;
function getMomentRange(moment) {
    var _a;
    return cachedMoment = wrapMoment((_a = moment !== null && moment !== void 0 ? moment : cachedMoment) !== null && _a !== void 0 ? _a : moment_1.default);
}
exports.getMomentRange = getMomentRange;
exports.default = getMomentRange;
//# sourceMappingURL=index.js.map