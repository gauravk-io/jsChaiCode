// ****************** Loops in JavaScript ******************

// ****************** Explanation ******************

// Loops are used to repeatedly execute a block of code until a condition is met. 
// JavaScript provides several types of loops to handle different scenarios, from running code a fixed number of times to iterating over data structures like arrays or objects.
// Loop Control Statements (`break` and `continue`) add additional flexibility by allowing us to jump out of loops or skip iterations.


// ************************************************************************************************************

// ****************** 1️⃣ For Loop ******************

// The `for` loop is one of the most common loops used when the number of iterations is **known in advance**.
// It consists of three parts: 
// - Initialization → Runs once before the loop starts.
// - Condition → Evaluated before each iteration; if `false`, the loop stops.
// - Increment/Update → Runs after each iteration, often updating the loop variable.

for (let i = 1; i <= 5; i++) {
    console.log(`Iteration ${i}`);
}

// Explanation:
// - `let i = 1` initializes the counter.
// - `i <= 5` is the condition; loop runs while this is true.
// - `i++` increments the counter after each iteration.


// ************************************************************************************************************

// ****************** 2️⃣ While Loop ******************

// `while` loops are used when the number of iterations is **unknown**, and the loop should continue while a condition is true.
// The condition is checked **before** the loop body runs.

let count = 1;

while (count <= 5) {
    console.log(`While Loop Count: ${count}`);
    count++;
}

// Explanation:
// - Only runs while `count <= 5`.
// - Ideal when working with **external input** (like user input or server responses).


// ************************************************************************************************************

// ****************** 3️⃣ Do...While Loop ******************

// The `do...while` loop guarantees that the loop body will execute at least **once**, even if the condition is false.

let num = 1;

do {
    console.log(`Do-While Loop - Num: ${num}`);
    num++;
} while (num <= 3);

// Explanation:
// - Condition is checked **after** each iteration, ensuring the body runs once even if the condition starts as `false`.


// ************************************************************************************************************

// ****************** 4️⃣ Nested Loops ******************

// Loops inside loops, known as nested loops, are often used to work with multi-dimensional data, like tables or grids.

for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`   Inner Loop ${j}`);
    }
}

// Explanation:
// - The outer loop runs first, then the inner loop completes fully for each outer loop iteration.


// ************************************************************************************************************

// ****************** 5️⃣ for...of Loop ******************

// The `for...of` loop is a cleaner way to iterate directly over iterable objects like arrays or strings.

const colors = ["Red", "Green", "Blue"];

for (const color of colors) {
    console.log(`Color: ${color}`);
}

// Explanation:
// - Directly accesses values (no need for index management).
// - Works with strings, arrays, Maps, Sets, etc.


// ************************************************************************************************************

// ****************** 6️⃣ forEach Loop ******************

// `forEach` is an **array method** that takes a callback function and executes it once for each array element.

const fruits = ["Apple", "Banana", "Cherry"];

fruits.forEach((fruit, index) => {
    console.log(`Index ${index}: ${fruit}`);
});

// Explanation:
// - Best suited for arrays.
// - Provides element and index directly in the callback.


// ************************************************************************************************************

// ****************** 7️⃣ Break Statement ******************

// The `break` statement **immediately exits** the loop when executed.

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;  // Exits the loop completely
    }
    console.log(`Break Example: ${i}`);
}

// Output:
// 1
// 2

// Explanation:
// - When `i === 3`, the `break` statement stops the loop execution.

// Example: Find the first number greater than 50 in an array

let numbers = [10, 25, 40, 55, 70, 85];

for (let num of numbers) {
    if (num > 50) {
        console.log(`First number greater than 50: ${num}`);
        break;
    }
}
// ************************************************************************************************************

// ****************** 8️⃣ Continue Statement ******************

// The `continue` statement **skips the current iteration** and moves to the next one.

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;  // Skips 3 and moves to the next iteration
    }
    console.log(`Continue Example: ${i}`);
}

// Output:
// 1
// 2
// 4
// 5

// Explanation:
// - When `i === 3`, `continue` skips that iteration and moves to `i = 4`.

// Example: Skipping even numbers in a loop

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;  // Skips even numbers
    }
    console.log(`Odd Number: ${i}`);
}


// ************************************************************************************************************

// ****************** 9️⃣ Looping Over Objects ******************

// Use `for...in` to loop over object **keys**.

const user = {
    name: "Gaurav",
    age: 25,
    city: "Mumbai"
};

for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}

// Explanation:
// - `for...in` iterates over keys, and you access values using `user[key]`.


// ************************************************************************************************************

// ****************** 1️⃣0️⃣ Truthy and Falsy inside Loops ******************

// Loops often depend on **conditions**, so understanding **truthy** and **falsy** is important.

const values = [0, 1, "", "hello", null, undefined, {}, [], NaN];

// Example: Only log truthy values
for (const value of values) {
    if (value) {
        console.log(`Truthy:`, value);
    }
}

// Explanation:
// - Falsy values: `false`, `0`, `""`, `null`, `undefined`, `NaN`.
// - Everything else is **truthy**, including empty objects `{}` and arrays `[]`.


// ************************************************************************************************************

// ****************** 1️⃣1️⃣ Nullish Coalescing in Loops ******************

// You can combine loops with **nullish coalescing (`??`)** to handle `null` or `undefined`.

const userAges = [null, 25, undefined, 30];

for (let age of userAges) {
    let finalAge = age ?? 18;  // Default age 18 if age is null/undefined
    console.log(`User Age: ${finalAge}`);
}

// Explanation:
// - `??` returns the **right-hand value only if the left-hand value is `null` or `undefined`**.


// ************************************************************************************************************

// ****************** 1️⃣2️⃣ Ternary Operator in Loops ******************

// Ternary operators are often used inside loops to simplify conditions.

const scores = [85, 45, 70, 30];

for (let score of scores) {
    let result = score >= 50 ? "Pass" : "Fail";
    console.log(`Score: ${score}, Result: ${result}`);
}

// Explanation:
// - `condition ? valueIfTrue : valueIfFalse` helps write compact conditional logic.


// ************************************************************************************************************

// ****************** Summary ******************

// Loops Summary:
// ✅ `for` loop: Best for known number of iterations.
// ✅ `while` loop: Best when condition is dynamic.
// ✅ `do...while` loop: Ensures block runs at least once.
// ✅ `for...of`: Simplified for iterating over arrays/strings.
// ✅ `forEach`: Array method with callback, clean for arrays.
// ✅ Nested loops: Useful for multi-dimensional data.
// ✅ `break`: Immediately exits loop.
// ✅ `continue`: Skips current iteration, continues next.
// ✅ `for...in`: Best for object properties (keys).
// ✅ Truthy/Falsy: Essential for conditions inside loops.
// ✅ Nullish Coalescing (`??`): Handles `null` or `undefined`.
// ✅ Ternary Operator: Short conditions inside loops.

// ************************************************************************************************************
