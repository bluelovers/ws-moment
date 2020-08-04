"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstEndOfMonth = exports.lnMomentYear = exports.lnMomentDay = exports.lnMomentMonth = exports.lnMoment = void 0;
const moment_1 = __importDefault(require("moment"));
function lnMoment(m, unit, momentStatic = moment_1.default) {
    const baseMoment = momentStatic(m);
    const prevMoment = baseMoment
        .clone()
        .add(-1, unit);
    const nextMoment = baseMoment
        .clone()
        .add(1, unit);
    return {
        input: m,
        baseMoment,
        prevMoment,
        nextMoment,
    };
}
exports.lnMoment = lnMoment;
function lnMomentMonth(m, momentStatic) {
    return lnMoment(m, 'month', momentStatic);
}
exports.lnMomentMonth = lnMomentMonth;
function lnMomentDay(m, momentStatic) {
    return lnMoment(m, 'day', momentStatic);
}
exports.lnMomentDay = lnMomentDay;
function lnMomentYear(m, momentStatic) {
    return lnMoment(m, 'year', momentStatic);
}
exports.lnMomentYear = lnMomentYear;
function firstEndOfMonth(m, momentStatic = moment_1.default) {
    const baseMoment = momentStatic(m);
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
exports.default = lnMoment;
//# sourceMappingURL=index.js.map