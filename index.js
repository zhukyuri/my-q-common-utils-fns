"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyQFormatDate = void 0;
const date_fns_1 = require("date-fns");
class MyQFormatDate {
    baseDate;
    dateArray = [];
    constructor(baseDate) {
        this.baseDate = !baseDate ? new Date() : baseDate;
    }
    setBaseDate = (newBaseDate) => {
        if (newBaseDate)
            this.baseDate = new Date(newBaseDate.year, newBaseDate.monthIndex, newBaseDate.day);
        else
            this.baseDate = new Date();
    };
    getNewDate = ({ year, monthIndex, day }) => {
        return new Date(year, monthIndex, day).toDateString();
    };
    formatDate = (date, formatStr = 'dd.MM') => (0, date_fns_1.format)(date, formatStr);
    begginingDay = (date = this.baseDate) => {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    };
    begginingMonth = (date = this.baseDate) => {
        return new Date(date.getFullYear(), date.getMonth());
    };
    subtractDate = (date, subtract = 'month', amount = 1, addDaysAmount = 0) => {
        const startDay = this.begginingDay(date);
        let result;
        if (subtract === 'day') {
            result = (0, date_fns_1.subDays)(startDay, amount);
        }
        else if (subtract === 'month') {
            result = (0, date_fns_1.subMonths)(startDay, amount);
        }
        else if (subtract === 'year') {
            result = (0, date_fns_1.subYears)(startDay, amount);
        }
        else {
            result = startDay;
        }
        if (addDaysAmount) {
            result = (0, date_fns_1.addDays)(result, addDaysAmount);
        }
        return result;
    };
    dateListDayOfMoth = (baseDate = this.baseDate) => {
        const endDate = this.begginingDay(baseDate);
        let currentDate = this.subtractDate(endDate, 'month', 1, 1);
        this.dateArray = [];
        while (currentDate <= endDate) {
            this.dateArray.push(currentDate);
            currentDate = (0, date_fns_1.addDays)(currentDate, 1);
        }
        return this.dateArray;
    };
    dateListMonthOfYear = (baseDate = this.baseDate) => {
        const endDate = this.subtractDate(this.begginingMonth(baseDate));
        let currentDate = this.subtractDate(endDate, 'year', 1);
        this.dateArray = [];
        while (currentDate <= endDate) {
            this.dateArray.push(currentDate);
            currentDate = (0, date_fns_1.addMonths)(currentDate, 1);
        }
        return this.dateArray;
    };
    daysOfMonth(month, year) {
        return new Date(year, month, 0).getDate();
    }
    endDayOdMonth(date) {
        return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    }
    makeSequentialArray = function (count) {
        return Array.from({ length: count }, (_, index) => index + 1);
    };
    allDaysOfMonth_ByDateEnd = (dateEnd = this.baseDate) => {
        const endDate = new Date(dateEnd.getFullYear(), dateEnd.getMonth(), dateEnd.getDate());
        const startDate = (0, date_fns_1.addDays)((0, date_fns_1.subMonths)(endDate, 1), 1);
        const daysArray = (0, date_fns_1.eachDayOfInterval)({
            start: startDate,
            end: endDate,
        });
        return daysArray.map((i) => ({
            date: i,
            year: i.getFullYear(),
            month: i.getMonth() + 1,
            day: i.getDate(),
            key: (0, date_fns_1.format)(i, 'yy-MM-dd'),
        }));
    };
    allMonthOfYear_ByDateEnd = (dateEnd = this.baseDate) => {
        const endDate = new Date(dateEnd.getFullYear(), dateEnd.getMonth());
        const startDate = (0, date_fns_1.subMonths)(endDate, 11);
        const daysArray = (0, date_fns_1.eachMonthOfInterval)({
            start: startDate,
            end: endDate,
        });
        return daysArray.map((i) => ({
            date: i,
            year: i.getFullYear(),
            month: i.getMonth() + 1,
            day: i.getDate(),
            key: (0, date_fns_1.format)(i, 'yy-MM-dd'),
        }));
    };
}
exports.MyQFormatDate = MyQFormatDate;
