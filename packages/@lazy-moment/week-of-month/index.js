"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeekDayNames = exports.weeksMomentRangeReport = exports.weeksOfMonth = void 0;
const moment_1 = __importDefault(require("moment"));
const index_1 = __importDefault(require("@lazy-moment/moment-range/index"));
const index_2 = require("@lazy-moment/in-day/index");
function weeksOfMonth(date, momentStatic) {
    const moment = index_1.default(momentStatic);
    date !== null && date !== void 0 ? date : (date = moment.now());
    const { baseMoment: momentDate, firstDayOfMonth, endDayOfMonth } = index_2.firstEndOfMonth(date, moment);
    const monthRange = moment.range(firstDayOfMonth, endDayOfMonth);
    /**
     * Get all the weeks during the current month
     */
    const weeks = [];
    for (let mday of monthRange.by('days')) {
        //		console.dir(mday.date())
        if (weeks.indexOf(mday.week()) === -1) {
            weeks.push(mday.week());
        }
    }
    let firstWeekDayOfMonth;
    let lastWeekDayOfMonth;
    const year = momentDate.year();
    const month = momentDate.month();
    /**
     * Create a range for each week
     */
    const calendar = [];
    for (let index = 0; index < weeks.length; index++) {
        let weeknumber = weeks[index];
        firstWeekDayOfMonth = moment().year(year).month(month).week(weeknumber).day(0);
        lastWeekDayOfMonth = moment().year(year).month(month).week(weeknumber).day(6);
        if (month == 11 && (weeks.length - 1) == index) {
            firstWeekDayOfMonth = moment().year(year).month(month).week(weeks[index - 1]).day(0);
            firstWeekDayOfMonth.add(7, "day");
            lastWeekDayOfMonth = moment().year(year).month(month).week(weeks[index - 1]).day(6);
            lastWeekDayOfMonth.add(6, "day");
        }
        // console.log("First day of week", firstWeekDay, weeknumber);
        // console.log("Last day of week", lastWeekDay, weeknumber);
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
        weeks,
    };
}
exports.weeksOfMonth = weeksOfMonth;
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
        maxWeeks,
    };
}
exports.weeksMomentRangeReport = weeksMomentRangeReport;
function getWeekDayNames(locale = 'zh-tw', momentStatic = moment_1.default) {
    let m = momentStatic();
    if (locale !== void 0 && locale !== null) {
        m = m.locale(locale);
    }
    return (new Array(7))
        .fill(null)
        .map((v, i) => {
        return m
            .day(i)
            .format(`dddd`);
    });
}
exports.getWeekDayNames = getWeekDayNames;
//# sourceMappingURL=index.js.map