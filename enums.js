"use strict";
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek["Monday"] = "Monday";
    DayOfWeek["Tuesday"] = "Tuesday";
    DayOfWeek["Wednesday"] = "Wednesday";
    DayOfWeek["Thursday"] = "Thursday";
    DayOfWeek["Friday"] = "Friday";
    DayOfWeek["Saturday"] = "Saturday";
    DayOfWeek["Sunday"] = "Sunday";
})(DayOfWeek || (DayOfWeek = {}));
function isWorkday(day) {
    switch (day) {
        case DayOfWeek.Saturday:
        case DayOfWeek.Sunday:
            return "It's a day off!";
        default:
            return "It's a workday.";
    }
}
console.log(isWorkday(DayOfWeek.Monday));
console.log(isWorkday(DayOfWeek.Sunday));
