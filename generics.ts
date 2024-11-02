function echo<T>(argument: T): T {
  return argument;
}

console.log(echo("Hello, generics!"));
console.log(echo(36));
console.log(echo(true));

const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 19 },
  { name: "Jack", age: 45 },
];

function pluck<T, K extends keyof T>(array: T[], key: K): T[K][] {
  return array.map((item) => item[key]);
}

console.log(pluck(users, "name")); // ["John", "Jane", "Jack"]
console.log(pluck(users, "age")); // [25, 19, 45]

// console.log(pluck(users, "email")); // Error - no such key in the object

// pluck function with meaningful types names
// function pluck<GenericObjectType, Key extends keyof GenericObjectType>(
//   array: GenericObjectType[],
//   keyInTheObject: Key
// ): GenericObjectType[Key][] {
//   return array.map((item) => item[keyInTheObject]);
// }

// pluck function without generics:
// function pluckWithoutGenerics(array: any[], key: string): any[] {
//   return array.map((item) => item[key]);
// }
