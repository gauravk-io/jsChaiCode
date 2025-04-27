// ****************** this Keyword and Arrow Functions in JavaScript ******************

// ****************** Explanation ******************

// The `this` keyword refers to the **object that is executing the current function**.
// The value of `this` depends on how the function is **invoked**, not where it is defined.
// Arrow functions (introduced in ES6) handle `this` differently from regular functions.

// In regular functions, `this` refers to:
// - Global object (in non-strict mode).
// - undefined (in strict mode).
// - Object calling the function (in object methods).

// In arrow functions, `this` is **lexically inherited** from the surrounding scope.
// Arrow functions do not bind their own `this`.

// ************************************************************************************************************

// ****************** 1️⃣ this in Global Context ******************

console.log(this);  // In browsers: Window (global object)

// In strict mode
"use strict";
console.log(this);  // undefined in strict mode

// Explanation: In global context, `this` refers to the global object, unless strict mode is enabled.

// ************************************************************************************************************

// ****************** 2️⃣ this Inside a Function ******************

function showThis() {
    console.log(this);
}

showThis();  // Global object (or undefined in strict mode)

// Explanation: In a regular function, `this` refers to the global object in non-strict mode,
// but `undefined` in strict mode.

// ************************************************************************************************************

// ****************** 3️⃣ this Inside an Object Method ******************

const person = {
    name: "Gaurav",
    greet: function() {
        console.log(this.name);  // Gaurav
    }
};

person.greet();  // Output: Gaurav

// Explanation: When a method is called on an object, `this` refers to the object itself.

// ************************************************************************************************************

// ****************** 4️⃣ this Inside Nested Functions ******************

const user = {
    name: "Raj",
    show: function() {
        function inner() {
            console.log(this.name);  // undefined
        }
        inner();
    }
};

user.show();

// Explanation: In a regular nested function, `this` refers to the global object (non-strict) or undefined (strict).
// This is a common source of bugs in JavaScript.

// ************************************************************************************************************

// ****************** 5️⃣ Fixing this with Arrow Functions ******************

const user2 = {
    name: "Ravi",
    show: function() {
        const inner = () => {
            console.log(this.name);  // Ravi
        };
        inner();
    }
};

user2.show();  // Output: Ravi

// Explanation: Arrow functions **inherit** `this` from their surrounding scope (in this case, `user2`).

// ************************************************************************************************************

// ****************** 6️⃣ this with Event Listeners ******************

const button = document.createElement('button');
button.innerText = "Click Me";

button.addEventListener('click', function() {
    console.log(this);  // button element (the element that triggered the event)
});

document.body.appendChild(button);

// Explanation: In event listeners, `this` refers to the **element that received the event**.

// ************************************************************************************************************

// ****************** 7️⃣ Arrow Functions Introduction ******************

const add = (a, b) => a + b;
console.log(add(5, 3));  // Output: 8

// Explanation: Arrow functions are a **shorter syntax** for defining functions in JavaScript.

// ************************************************************************************************************

// ****************** 8️⃣ Arrow Functions and this ******************

const car = {
    brand: "Toyota",
    show: () => {
        console.log(this.brand);  // undefined
    }
};

car.show();  // Output: undefined

// Explanation: Arrow functions **do not bind their own `this`**. They inherit `this` from the **surrounding (global) scope**.
// In this case, `this` does not point to `car`, but to the global object (or undefined in strict mode).

// ************************************************************************************************************

// ****************** 9️⃣ When to Use Arrow Functions ******************

// ✅ For short, one-line functions
const square = x => x * x;

// ✅ For array methods (map, filter, reduce)
const numbers = [1, 2, 3, 4];
const squared = numbers.map(n => n * n);
console.log(squared);  // [1, 4, 9, 16]

// ✅ For preserving `this` in nested functions
const obj = {
    name: "Gaurav",
    show: function() {
        const inner = () => {
            console.log(this.name);  // Gaurav
        };
        inner();
    }
};
obj.show();

// ❌ Avoid for object methods (use regular functions)
const user3 = {
    name: "Raj",
    greet: () => {
        console.log(`Hello, ${this.name}`);  // undefined
    }
};
user3.greet();

// ************************************************************************************************************

// ****************** 1️⃣0️⃣ Arrow Functions Limitations ******************

// - Cannot be used as constructors
// - Do not have their own `this`
// - No arguments object (use rest parameters instead)
// - Not suitable as object methods

// Example
const MyFunction = () => {};
// new MyFunction();  // TypeError - Arrow functions cannot be constructors

// ************************************************************************************************************

// ****************** Summary ******************

// this Summary
// - Refers to the **object calling the function** in regular functions.
// - Arrow functions **inherit** `this` from the surrounding (lexical) scope.
// - `this` behaves differently in strict and non-strict modes.
// - Use regular functions for object methods and constructors.
// - Use arrow functions to preserve `this` in callbacks and nested functions.

// Arrow Functions Summary
// - Shorter, cleaner syntax for functions.
// - No own `this` (inherits from outer scope).
// - No `arguments` object (use rest parameters).
// - Best for callbacks, array methods, and functions inside functions.
// - Avoid in object methods and constructors.

// ************************************************************************************************************
