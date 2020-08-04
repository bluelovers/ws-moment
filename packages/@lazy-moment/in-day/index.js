"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstEndOfMonth = exports.lnMoment = exports.lnMomentYear = exports.lnMomentDay = exports.lnMomentMonth = void 0;
const moment_1 = __importDefault(require("moment"));
function lnMomentMonth(m) {
    return lnMoment(m, 'month');
}
exports.lnMomentMonth = lnMomentMonth;
function lnMomentDay(m) {
    return lnMoment(m, 'day');
}
exports.lnMomentDay = lnMomentDay;
function lnMomentYear(m) {
    return lnMoment(m, 'year');
}
exports.lnMomentYear = lnMomentYear;
function lnMoment(m, unit) {
    const baseMoment = moment_1.default(m);
    const lastMoment = baseMoment
        .clone()
        .add(-1, unit);
    const nextMoment = baseMoment
        .clone()
        .add(1, unit);
    return {
        input: m,
        baseMoment,
        lastMoment,
        nextMoment,
    };
}
exports.lnMoment = lnMoment;
function firstEndOfMonth(m) {
    const baseMoment = moment_1.default(m);
    const firstDayOfMonth = baseMoment.clone().startOf('month');
    const endDayOfMonth = baseMoment.clone().endOf('month');
    return {
        input: m,
        baseMoment,
        firstDayOfMonth,
        endDayOfMonth,
    };
}
exports.firstEndOfMonth = firstEndOfMonth;
//# sourceMappingURL=index.js.map