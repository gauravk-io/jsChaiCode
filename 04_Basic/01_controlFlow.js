// ****************** Control Flow in JavaScript ******************

// ****************** Explanation ******************

// **Control Flow** defines the order in which JavaScript code runs.
// By default, JavaScript code executes **top to bottom**, but control flow allows us to alter that order.
// It includes **conditionals**, **loops**, and other constructs to manage how and when code runs.

// ************************************************************************************************************

// ****************** 1️⃣ Conditional Statements (if, else if, else) ******************

let age = 22;

if (age < 18) {
    console.log("Underage");
} else if (age < 60) {
    console.log("Adult");
} else {
    console.log("Senior");
}

// Explanation:
// - `if` checks the first condition.
// - `else if` adds more conditions.
// - `else` runs if no condition matches.

// ************************************************************************************************************

// ****************** 2️⃣ Switch Statement ******************

let day = "Wednesday";

switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("Weekend vibes");
        break;
    default:
        console.log("Regular day");
}

// Explanation:
// - `switch` compares `day` with each `case`.
// - `break` stops after a matching `case`.
// - `default` runs if no cases match.

// ************************************************************************************************************

// ****************** 3️⃣ Ternary Operator (? :) ******************

let num1 = 10;
let result = num1 > 0 ? "Positive" : "Negative";

console.log(result);  // Output: Positive

// Explanation:
// - Syntax: `condition ? value_if_true : value_if_false`
// - More concise than `if-else` for simple conditions.

// Nested Ternary Example:

let ageCategory = age < 18 ? "Minor" : age < 60 ? "Adult" : "Senior";

console.log(ageCategory);  // Output: Adult

// Explanation:
// - **Nested ternary operators** allow multiple conditions in a single line.

// ************************************************************************************************************

// ****************** 4️⃣ Loops (for, while, do...while) ******************

// ****************** For Loop ******************

for (let i = 0; i < 3; i++) {
    console.log(`For Loop Count: ${i}`);
}

// ****************** While Loop ******************

let count = 0;

while (count < 3) {
    console.log(`While Loop Count: ${count}`);
    count++;
}

// ****************** Do...While Loop ******************

let num = 0;

do {
    console.log(`Do While Count: ${num}`);
    num++;
} while (num < 3);

// Explanation:
// - `for`: Predefined loop with initializer, condition, increment.
// - `while`: Runs while condition is true.
// - `do...while`: Runs at least once, even if condition is false.


// ****************** Break and Continue ******************

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;  // Stops completely at 3
    }
    console.log(`Break Example: ${i}`);
}

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;  // Skips 3
    }
    console.log(`Continue Example: ${i}`);
}

// Explanation:
// - `break`: Exits entire loop.
// - `continue`: Skips current iteration, moves to next.

// ************************************************************************************************************

// ****************** 5️⃣ Nested Control Flow ******************

for (let i = 1; i <= 2; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`  Inner Loop: ${j}`);
    }
}

// ************************************************************************************************************

// ****************** 6️⃣ Truthy and Falsy ******************

// ****************** Falsy Values ******************

let falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN];

// Example:
if (0) {
    console.log("This won't run");
} else {
    console.log("0 is falsy");  // Runs
}

// ****************** Truthy Values ******************

if ("hello") {
    console.log("This is truthy");  // Runs
}

// Explanation:
// - **Falsy values:** `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`.
// - Everything else is **truthy**.

// ************************************************************************************************************

// ****************** 7️⃣ Nullish Coalescing Operator (??) ******************

let username = null;
let displayName = username ?? "Guest";

console.log(displayName);  // Output: Guest

// Explanation:
// - `??` (Nullish Coalescing) returns the **right-hand side value only if the left-hand side is null or undefined**.
// - Unlike `||`, it does **not treat falsy values like `0` or `""` as nullish**.

// Example:
let score = 0;
let finalScore = score ?? 100;  // Keeps 0, does not fallback to 100
console.log(finalScore);  // Output: 0

// ************************************************************************************************************

// ****************** 8️⃣ Control Flow with Functions ******************

function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

console.log(checkNumber(-5));  // Output: Negative

// Explanation:
// - `return` can **control flow inside a function** by exiting early.

// ************************************************************************************************************

// ****************** Summary ******************

// Control Flow Summary
// - Defines **how and when** code executes.
// - Conditional Structures:
//     - `if`, `else if`, `else`: Conditional branches.
//     - `switch`: Value matching.
// - Loops:
//     - `for`: Predefined iteration.
//     - `while`: Conditional looping.
//     - `do...while`: Runs at least once.
// - Loop Controls:
//     - `break`: Exit loop.
//     - `continue`: Skip iteration.
// - Truthy and Falsy:
//     - **Falsy:** `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`.
//     - Everything else is **truthy**.
// - Nullish Coalescing (`??`):
//     - Returns right-hand value **only if left-hand value is null or undefined**.
//     - More precise than `||` for dealing with **intentional falsy values (like 0).**
// - Functions:
//     - Use `return` to **control early exits** from functions.

// ************************************************************************************************************
