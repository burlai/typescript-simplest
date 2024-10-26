// Most common types
const myString: string = "Hello, TypeScript!";
const myNumber: number = 42;
const myBoolean: boolean = true;

// "Empty" types
const undefinedValue: undefined = undefined;
const nullValue: null = null;

// Rarely used types
const bigIntNumber: bigint = 9007199254740991n;
const symbolValue: symbol = Symbol("unique");

// Type inference
let anotherString = "This is a string"; // TypeScript infers the type as string
anotherString = "change the value of let"; // OK
// anotherString = 123; // Error: Type '123' is not assignable to type 'string'

// Objects types:
const stringArray: string[] = ["apple", "banana", "cherry", "orange"];

const user: { name: string; age: number; isActive: boolean } = {
  name: "John Doe",
  age: 18,
  isActive: true,
};
