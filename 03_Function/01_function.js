// ****************** Functions in JavaScript ******************

// Functions are **blocks of reusable code** that perform specific tasks.
// Functions can take inputs (parameters), process them, and return outputs (results).
// They help in **code organization, reusability, and modularity**.

// ****************** 1️⃣ Function Declaration ******************

// A **function declaration** defines a named function using the `function` keyword.

function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Gaurav"));  // Output: Hello, Gaurav!

// Explanation:
// - `function` keyword declares the function.
// - It can be called before or after declaration due to **hoisting**.

// ****************** 2️⃣ Function Expression ******************

// A **function expression** defines a function and assigns it to a variable.

const greetExpression = function(name) {
    return `Hello, ${name}!`;
};

console.log(greetExpression("Raj"));  // Output: Hello, Raj!

// Explanation:
// - Function has no name (anonymous function).
// - It **cannot be called before the expression is defined** (no hoisting).

// ****************** 3️⃣ Arrow Functions ******************

// Arrow functions offer a **shorter syntax** for writing functions.

const greetArrow = (name) => `Hello, ${name}!`;

console.log(greetArrow("Amit"));  // Output: Hello, Amit!

// Explanation:
// - Arrow functions omit the `function` keyword.
// - Single-expression functions can **omit curly braces** and `return` keyword.

// ****************** 4️⃣ Function Parameters and Arguments ******************

// Functions can accept **parameters** and be called with **arguments**.

function add(a, b) {
    return a + b;
}

console.log(add(5, 3));  // Output: 8

// Explanation:
// - `a` and `b` are parameters (placeholders).
// - `5` and `3` are arguments (actual values passed).

// ****************** 5️⃣ Default Parameters ******************

// Functions can have **default values** for parameters.

function greetUser(name = "Guest") {
    return `Welcome, ${name}!`;
}

console.log(greetUser());       // Output: Welcome, Guest!
console.log(greetUser("Ravi")); // Output: Welcome, Ravi!

// Explanation:
// - If no argument is provided, default value "Guest" is used.

// ****************** 6️⃣ Rest Parameters ******************

// Rest parameters allow functions to accept **any number of arguments**.

function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAll(1, 2, 3, 4, 5));  // Output: 15

// Explanation:
// - `...numbers` collects all arguments into an **array**.
// - Useful for handling variable arguments.

// ****************** 7️⃣ Function Return Values ******************

// Functions can **return values** to be used elsewhere.

function multiply(a, b) {
    return a * b;
}

const result = multiply(4, 5);
console.log(result);  // Output: 20

// Explanation:
// - `return` sends back a value when the function is called.

// ****************** 8️⃣ Function Scope ******************

// Functions have **local scope**, meaning variables declared inside are not accessible outside.

function showScope() {
    let message = "Inside function";
    console.log(message);
}

showScope();   // Output: Inside function
// console.log(message);  // Error - message is not defined outside function

// Explanation:
// - Variables declared inside a function are **scoped to that function only**.

// ****************** 9️⃣ Higher-Order Functions ******************

// Functions that **accept other functions as arguments** or **return functions** are higher-order functions.

function operate(a, b, operation) {
    return operation(a, b);
}

function addFn(x, y) {
    return x + y;
}

console.log(operate(5, 3, addFn));  // Output: 8

// Explanation:
// - `operate` takes `addFn` as a parameter and calls it.
// - Higher-order functions are important in **functional programming**.

// ****************** 🔟 Immediately Invoked Function Expressions (IIFE) ******************

// Functions that **run immediately after creation**.

(function() {
    console.log("IIFE executed!");
})();

// Explanation:
// - IIFE helps avoid **polluting global scope**.
// - They run automatically once defined.

// ****************** 1️⃣1️⃣ Callback Functions ******************

// A **callback** is a function passed to another function to be called later.

function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();
    }, 1000);
}

function processData() {
    console.log("Processing data...");
}

fetchData(processData);

// Explanation:
// - `processData` is passed to `fetchData`.
// - After fetching, `fetchData` calls `processData`.
// - Callbacks are crucial in **asynchronous programming**.

// ****************** 1️⃣2️⃣ Summary ******************

// - Functions are **reusable blocks of code**.
// - Types: Declaration, Expression, Arrow Functions, IIFE.
// - Parameters receive inputs, and `return` sends outputs.
// - Rest parameters collect **variable arguments** into arrays.
// - Functions have **local scope** (variables inside are private).
// - Functions can be **higher-order** (accept/return functions).
// - IIFEs run immediately.
// - Callbacks allow **asynchronous operations** (like data fetching).

