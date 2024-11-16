"use strict";
// Union:
let userId;
userId = 5;
userId = "Max";
// userId = true; // Error
const greetUser = (user) => {
    if (typeof user === "string") {
        console.log(`Hello, ${user.toUpperCase()}!`);
    }
    if (typeof user === "number") {
        console.log(`Hello, user with id ${user}!`);
    }
};
greetUser("Max");
const superVehicle = {
    wheels: 4,
    engine: "V8",
    sails: 1,
};
console.log(superVehicle);
