// ****************** Lexical Scoping and Closures in JavaScript ******************

// ****************** Explanation ******************

// - **Lexical Scope**: Variables are accessible based on where they are written in the code.
// - **Closure**: A function "remembers" variables from its lexical scope even after the outer function is finished.

// ************************************************************************************************************

// ****************** 1️⃣ Lexical Scoping ******************

function outer() {
    const outerVar = "I am outside!";

    function inner() {
        console.log(outerVar); 
    }

    inner();
}

outer(); 
// Output: I am outside!

// Explanation:
// - `inner` function has access to `outerVar` because of lexical scoping.
// - Scope is determined **at the time of writing**, not when executing.

// ************************************************************************************************************

// ****************** 2️⃣ Closure ******************

function greet(name) {
    return function(message) {
        console.log(`Hello ${name}, ${message}`);
    };
}

const greetGaurav = greet("Gaurav");
greetGaurav("Good Morning!");
// Output: Hello Gaurav, Good Morning!

// Explanation:
// - `greetGaurav` remembers `name = "Gaurav"` even after `greet()` has finished executing.
// - This "remembering" behavior forms a **closure**.

// ************************************************************************************************************

// ****************** 3️⃣ Real-world Example of Closure ******************

function counter() {
    let count = 0;

    return {
        increment: function() {
            count++;
            console.log(count);
        },
        decrement: function() {
            count--;
            console.log(count);
        }
    };
}

const myCounter = counter();
myCounter.increment(); 
// Output: 1
myCounter.increment(); 
// Output: 2
myCounter.decrement(); 
// Output: 1

// Explanation:
// - `count` is private to `counter` function.
// - Only `increment` and `decrement` functions can access and modify it using closures.

// ************************************************************************************************************

// ****************** 4️⃣ Why Closures Are Important? ******************

// ✅ Data Privacy → Variables inside closures cannot be accessed directly.
// ✅ Factory Functions → Functions that return other customized functions.
// ✅ Callback Functions → Like in event listeners, timers, async operations.

// ************************************************************************************************************

// ****************** 5️⃣ Common Mistakes with Closures ******************

// ❌ Loop Variables Issue
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
// Output after 1 sec: 3 3 3 (NOT 0 1 2)

// ✅ Correct using `let`
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
// Output after 1 sec: 0 1 2

// Explanation:
// - `let` has block scope, so each loop iteration has its own `i`.

// ************************************************************************************************************

// ****************** Summary ******************

// ✅ **Lexical Scope** is based on code location, not runtime.
// ✅ **Closure** allows a function to "remember" its outer variables.
// ✅ Closures are used for **data privacy**, **state management**, and **callback functions**.
// ✅ Use `let` inside loops to avoid closure-related bugs.

// ************************************************************************************************************
