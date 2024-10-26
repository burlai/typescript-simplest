function add(a: number, b: number): number {
  return a + b;
}

console.log(add(1, 2));

// Errors:
// console.log(add(1, "2")); // error!
// console.log(add("asdf", "asdf")); // error!
// console.log(add({}, [])); // error!

// Strict mode errors:
// console.log(add(null, null)); // error!
// console.log(add(undefined, undefined)); // error!
// console.log(add(null, undefined)); // error!
