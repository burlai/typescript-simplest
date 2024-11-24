"use strict";
// any
let anything = "I am a string"; // Give me anything!
anything = 5; // All good
anything = true; // All good
// anything(); // No TS error, but JS runtime error!
// unknown
let something = "I am a string"; // I don't know what this is
// something.toUpperCase(); // TS error: Property 'toUpperCase' does not exist on type 'unknown'.
if (typeof something === "string") {
    console.log(something.toUpperCase()); // All good
}
something = 5; // All good
if (typeof something === "number") {
    console.log(something + 5); // All good
}
// never
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    let index = 0;
    while (true) {
        index++;
        console.log(`I am an infinite loop and I have run ${index} times!`);
    }
}
// if there are no more possible options in union types, TS will infer the type as 'never'
function unionTypesChecking(ourParameter) {
    if (typeof ourParameter === "string") {
        console.log(typeof ourParameter); // string
    }
    else if (typeof ourParameter === "number") {
        console.log(typeof ourParameter); // number
    }
    else {
        console.log(typeof ourParameter); // never
        ourParameter; // has type 'never'!
    }
}
// throwError("This is an error!"); // This is an error!
// infiniteLoop(); // I am an infinite loop!
