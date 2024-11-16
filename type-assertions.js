"use strict";
const headerElement = document.getElementById("test-header");
console.log(headerElement.textContent); // Error: Object is possibly 'null'.
console.log(headerElement.textContent); // Error: Object is possibly 'null'.
setTimeout(() => {
    if (headerElement) {
        headerElement.textContent = "Hello, World!";
    }
}, 3000);
function fetchUser() {
    return { name: "Alice", age: 25 };
}
const data = fetchUser();
const ourUser = data;
console.log(ourUser.name); // Error: Property 'name' does not exist on type 'unknown'.
console.log(ourUser.age); // Error: Property 'age' does not exist on type 'unknown'.
// Bad example of type assertion:
const sum = (a, b) => a + b;
console.log(sum(10, "123")); // No error, but the result is 10123.
