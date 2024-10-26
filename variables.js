"use strict";
// Most common types
const myString = "Hello, TypeScript!";
const myNumber = 42;
const myBoolean = true;
// "Empty" types
const undefinedValue = undefined;
const nullValue = null;
// Rarely used types
const bigIntNumber = 9007199254740991n;
const symbolValue = Symbol("unique");
// Type inference
let anotherString = "This is a string"; // TypeScript infers the type as string
anotherString = "change the value of let"; // OK
// anotherString = 123; // Error: Type '123' is not assignable to type 'string'
// Objects types:
const stringArray = ["apple", "banana", "cherry", "orange"];
const user = {
    name: "John Doe",
    age: 18,
    isActive: true,
};
