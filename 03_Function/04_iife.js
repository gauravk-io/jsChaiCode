// ****************** IIFE (Immediately Invoked Function Expression) in JavaScript ******************

// ****************** Explanation ******************

// An **IIFE** is a **function that runs immediately after being defined**.
// The syntax uses parentheses to **create the function expression** and **immediately invoke it**.
// This is useful for creating a **private scope** to avoid polluting the global namespace.

// General Syntax:
(function() {
    // Code inside IIFE
})();

// Or using arrow functions (ES6):
(() => {
    // Code inside IIFE
})();

// ************************************************************************************************************

// ****************** 1️⃣ Basic Example of IIFE ******************

(function() {
    console.log("IIFE executed!");  // Output: IIFE executed!
})();

// Explanation:
// - This function is **defined and immediately executed**.
// - It does not need to be called separately.

// ************************************************************************************************************

// ****************** 2️⃣ Named vs Anonymous IIFE ******************

// Anonymous IIFE
(function() {
    console.log("Anonymous IIFE");
})();

// Named IIFE
(function namedIIFE() {
    console.log("Named IIFE");
})();

// Explanation:
// - Anonymous IIFE has **no name**, commonly used.
// - Named IIFE can have a name, useful for debugging stack traces.

// ************************************************************************************************************

// ****************** 3️⃣ IIFE with Parameters ******************

(function(name) {
    console.log(`Hello, ${name}`);  // Output: Hello, Gaurav
})("Gaurav");

// Explanation:
// - IIFE can **accept arguments** like regular functions.
// - Values are passed at the time of invocation.

// ************************************************************************************************************

// ****************** 4️⃣ Arrow Function IIFE ******************

(() => {
    console.log("Arrow Function IIFE");
})();

// With Parameters
((name) => {
    console.log(`Hello, ${name}`);  // Output: Hello, Raj
})("Raj");

// Explanation:
// - Arrow function syntax works with IIFE.
// - Useful for cleaner syntax.

// ************************************************************************************************************

// ****************** 5️⃣ Why Use IIFE? ******************

// ✅ To create a **private scope** and avoid polluting the global scope.
// ✅ Useful in **older JavaScript** (before modules) to encapsulate code.
// ✅ Immediately execute some **setup code** like initializing configs or data.

(function() {
    const apiKey = "12345-abcde";
    console.log("Initializing app...");  // Output: Initializing app...
})();

// Explanation:
// - Variables inside IIFE are **not accessible outside**.
// - Good for keeping sensitive data like keys, configs private.

// ************************************************************************************************************

// ****************** 6️⃣ IIFE in Modern JavaScript ******************

// Today, IIFE are **less common** because:
// ✅ Modern JavaScript supports **modules**, which already have their own scope.
// ✅ Still useful for **immediate execution requirements**.

(() => {
    console.log("Modern IIFE still works!");
})();

// ************************************************************************************************************

// ****************** Summary ******************

// IIFE Summary
// - **Immediately Invoked Function Expression**.
// - Defined and executed at the same time.
// - Creates a **private scope**, avoiding global variable pollution.
// - Can be **anonymous** or **named**.
// - Supports **parameters and arguments**.
// - Less needed today due to **modules**, but useful in some cases.
// - Works with **regular functions** and **arrow functions**.

// Use Cases
// - **Encapsulation** of variables (hide internal logic).
// - **Initialization code** (run once at the start).
// - **Avoid global namespace pollution**.

// ************************************************************************************************************
