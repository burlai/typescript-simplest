enum DayOfWeek {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

function isWorkday(day: DayOfWeek): string {
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
