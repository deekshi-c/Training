var Day;
(function (Day) {
    Day[Day["SU"] = 1] = "SU";
    Day[Day["MO"] = 2] = "MO";
    Day[Day["TU"] = 3] = "TU";
    Day[Day["WE"] = 4] = "WE";
    Day[Day["THU"] = 5] = "THU";
    Day[Day["FRI"] = 6] = "FRI";
    Day[Day["SAT"] = 7] = "SAT";
})(Day || (Day = {}));
;
let a = Day.FRI;
console.log(a);
console.log(Day[a]);
//# sourceMappingURL=enum.js.map