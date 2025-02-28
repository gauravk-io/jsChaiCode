// ****************** Scope in JavaScript ******************

// Scope defines **where variables and functions are accessible** in your code.
// It determines the **visibility and lifetime** of variables and functions.
// JavaScript has several types of scope:
// 1️⃣ Global Scope
// 2️⃣ Function Scope (Local Scope)
// 3️⃣ Block Scope
// 4️⃣ Lexical Scope (Scope Chain & Closures)

// ****************** 1️⃣ Global Scope ******************

let globalVar = "I am global";

function showGlobal() {
    console.log(globalVar);  // Accessible here
}

showGlobal();  // Output: I am global
console.log(globalVar);  // Output: I am global

// Explanation:
// - Variables declared **outside any function or block** have global scope.
// - Global variables are accessible **everywhere** but should be used sparingly to avoid pollution.

// ****************** 2️⃣ Function Scope (Local Scope) ******************

function greet() {
    let message = "Hello from function";
    console.log(message);  // Accessible inside the function
}

greet();  // Output: Hello from function
// console.log(message);  // Error - message is not accessible outside

// Explanation:
// - Variables declared inside a function exist **only within that function**.
// - Function scope ensures **variables do not leak outside the function**.

// ****************** 3️⃣ Block Scope (let & const) ******************

{
    let blockVar = "Inside block";
    console.log(blockVar);  // Output: Inside block
}
// console.log(blockVar);  // Error - blockVar not accessible outside block

if (true) {
    let age = 25;
    const city = "Delhi";
    var country = "India";  // `var` does not respect block scope
}

// console.log(age);  // Error - not accessible (let)
// console.log(city);  // Error - not accessible (const)
console.log(country);  // Output: India (var leaks out of block)

// Explanation:
// - `let` and `const` are block-scoped (exist only within nearest `{}`).
// - `var` is **function-scoped**, so it leaks out of blocks into surrounding functions or global scope.

// ****************** 4️⃣ Lexical Scope (Scope Chain) ******************

function outer() {
    let outerVar = "Outer Variable";

    function inner() {
        console.log(outerVar);  // Outer function's variable is accessible
    }

    inner();  // Output: Outer Variable
}

outer();

// Explanation:
// - Inner functions can **access variables from their parent (outer) functions**.
// - This is **lexical scoping** - a function’s scope is defined by where it is written, not where it's called.

// ****************** 5️⃣ Scope Chain Example ******************

let globalName = "Global";

function first() {
    let firstName = "First";

    function second() {
        let secondName = "Second";
        console.log(globalName);  // Found in global scope
        console.log(firstName);   // Found in parent scope
        console.log(secondName);  // Found in local scope
    }

    second();
}

first();

// Explanation:
// - If a variable is not found in **local scope**, JavaScript looks in the **parent scope**, and continues upward.
// - This is called the **scope chain**.

// ****************** 6️⃣ Closures - Functions Remember Scope ******************

function outerFunction(outerVar) {
    return function innerFunction(innerVar) {
        console.log(`Outer: ${outerVar}, Inner: ${innerVar}`);
    };
}

const closureExample = outerFunction("Outside");
closureExample("Inside");  // Output: Outer: Outside, Inner: Inside

// Explanation:
// - `innerFunction` remembers `outerVar`, even after `outerFunction` has finished.
// - This behavior is called a **closure**, formed by **lexical scoping**.

// ****************** 7️⃣ Temporal Dead Zone (TDZ) ******************

console.log(myVar);  // undefined (var hoisted)
// console.log(myLet);  // ReferenceError (TDZ for let)

var myVar = 10;
let myLet = 20;

// Explanation:
// - `let` and `const` exist in a **temporal dead zone (TDZ)** from the start of their scope until declaration.
// - Accessing them before declaration throws a **ReferenceError**.
// - `var` does not have this restriction (but leads to bugs).

// ****************** 8️⃣ Avoiding Global Pollution ******************

// Always minimize global variables.
// Use **IIFEs (Immediately Invoked Function Expressions)** or **ES Modules** to limit pollution.

(function() {
    let local = "This won't leak globally";
})();

// Explanation:
// - Wrapping code in functions or modules **keeps variables private**.
// - This is a common pattern in **modern JavaScript applications**.

// ****************** 9️⃣ var, let, const Scope Comparison ******************

// Quick Comparison Table:
// | Keyword  | Scope Type     | Hoisting Behavior   | Reassignment | Use Case |
// |---|---|---|---|---|
// | var      | Function Scope | Hoisted (undefined) | Allowed      | Legacy code |
// | let      | Block Scope    | TDZ (ReferenceError)| Allowed      | Modern variables |
// | const    | Block Scope    | TDZ (ReferenceError)| Not Allowed  | Constants |

// Explanation:
// - Prefer `let` and `const` for **block-level safety**.
// - Use `const` when you do not plan to reassign a variable.

// ****************** 1️⃣0️⃣ Module Scope (ES Modules) ******************

/*
    In ES Modules (files with .mjs or type="module"):
    - Each module gets its own **module scope**.
    - Variables inside one module are **not visible in other modules** unless explicitly exported.
*/

// module1.js
const secret = "Module Secret";
export const publicInfo = "This is public";

// Explanation:
// - Module scope prevents global pollution in **modern JavaScript apps** (React, Node.js).
// - Each file (module) gets its **own isolated scope**.

// ****************** 1️⃣1️⃣ Summary ******************

// - Scope defines **where variables and functions are accessible**.
// - Types of scope:
//     - **Global Scope** - Available everywhere.
//     - **Function Scope** - Available inside the function only.
//     - **Block Scope** - Available inside the block (for `let` and `const`).
//     - **Lexical Scope** - Inner functions access outer variables (scope chain).
//     - **Module Scope** - Each ES module has its own isolated scope.
// - `var` is **function-scoped**, while `let` and `const` are **block-scoped**.
// - **Temporal Dead Zone (TDZ)** applies to `let` and `const`.
// - **Closures** allow functions to retain access to parent scope even after parent function ends.
// - Use **IIFEs or modules** to avoid global variable pollution.

