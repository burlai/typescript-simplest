// Examples of static typing of function parameters and return values (function signatures)

// Regular function
function sum(numberOne: number, numberTwo: number): number {
  return numberOne + numberTwo;
}

const result = sum(1, 2); // Ok
// const result2 = sum("1", 2); // Compilation error
console.log("result: ", result);

// Arrow function
const multiply = (numberOne: number, numberTwo: number): number =>
  numberOne * numberTwo;

const multiplyResult = multiply(2, 3); // Ok
// const multiplyResult2 = multiply("2", 3); // Compilation error
console.log("multiplyResult: ", multiplyResult);

// Default parameters example
function sayHello(name = "Typescript"): string {
  return `Hello ${name}`;
}

console.log(sayHello()); // Ok - using default parameter
console.log(sayHello("World!!!")); // Ok - using provided parameter

// Example of optional parameters
function sayHelloOptional(name?: string): string {
  return `Hello ${name ? name : ""}`;
}

console.log(sayHelloOptional()); // Ok - using optional parameter
console.log(sayHelloOptional("World - provided")); // Ok - using provided parameter

// Example of function with no return value
function ourOwnLog(message: string): void {
  console.log(message);
}

ourOwnLog("log from function with no return"); // Ok

// Example of function with rest parameters
function sumAllNumbers(...numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

console.log(sumAllNumbers(1, 2, 3, 4, 5)); // Ok

// Example of typing the whole function
type MathFunction = (numberOne: number, numberTwo: number) => number;

const divide: MathFunction = (numberOne, numberTwo) => numberOne / numberTwo;
console.log("divide result: ", divide(10, 2)); // Ok

const subtract: MathFunction = (numberOne, numberTwo) => numberOne - numberTwo;
console.log("subtract result: ", subtract(10, 2)); // Ok

// const notValidFunction: MathFunction = (numberOne, numberTwo) =>
//   numberOne.toString(); // Compilation error
