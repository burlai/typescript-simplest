type DayOfWeekLiteral =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

function isWorkdayWithLiteral(day: DayOfWeekLiteral): string {
  if (day === "Saturday" || day === "Sunday") {
    return "It's a day off!";
  }
  //   if (day === 'Lovely day') { // TS error: Argument of type '"Lovely day"' is not assignable to parameter of type 'DayOfWeekLiteral'.
  //   }

  return "It's a workday.";
}

console.log(isWorkdayWithLiteral("Monday"));
console.log(isWorkdayWithLiteral("Sunday"));

// console.log(isWorkdayWithLiteral("Lovely day")); // TS error: Argument of type '"Lovely day"' is not assignable to parameter of type 'DayOfWeekLiteral'.
