const headerElement = document.getElementById("test-header");

console.log((headerElement as HTMLHeadingElement).textContent); // Error: Object is possibly 'null'.

console.log((<HTMLHeadingElement>headerElement).textContent); // Error: Object is possibly 'null'.
setTimeout(() => {
  if (headerElement) {
    headerElement.textContent = "Hello, World!";
  }
}, 3000);

// Type assertion with object example:
type User = {
  name: string;
  age: number;
};

function fetchUser(): unknown {
  return { name: "Alice", age: 25 };
}

const data = fetchUser();

const ourUser = data as User;

console.log(ourUser.name); // Error: Property 'name' does not exist on type 'unknown'.
console.log(ourUser.age); // Error: Property 'age' does not exist on type 'unknown'.

// Bad example of type assertion:

const sum = (a: number, b: number): number => a + b;

console.log(sum(10, "123" as unknown as number)); // No error, but the result is 10123.
