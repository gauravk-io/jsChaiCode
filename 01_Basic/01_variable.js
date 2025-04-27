
const accountId = 17361; // cannot change like your birth date—once set, it’s forever!

let accountEmail = "gaurav@gmail.com"; // Can be changed.

var accountPassword = "29328"; // var should be avoided because it has function scope (not block scope), can be redeclared, and leads to unexpected bugs due to hoisting. Instead, use let or const for safer, predictable behavior.

accountCity = "Jharkhand"; // Declared without let/var/const—JavaScript allows it, but it's like leaving your house door open! (not a good practice)

let accountState; // Undefined for now, like an empty coffee cup waiting to be filled!

// accountId = "Jaipur"; // ❌ A const variable in JavaScript cannot be redeclared because it is designed to hold a constant reference in memory, preventing accidental changes and ensuring data integrity.

accountEmail = "xyz@gmail.com"; //value changed
accountPassword = "212121212"; // value changed
accountCity = "Delhi"; // value changed

console.log(accountId);
//  console.log() is used to print messages

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
//console.table() is used to display array or object data in a structured table format, making it easier to read and analyze in the console.


//----------------------------------------------------------------------------------------------------------------------------------------------------

// ****************** Variables in JavaScript ******************

// JavaScript has three ways to declare variables: var, let, and const.
// Each has different behavior regarding scope, hoisting, and reassignment.

// 1️⃣ var - The old way of declaring variables (Avoid using it)
var userName = "Gaurav"; // Declaring a variable using var
console.log(userName); // Output: Gaurav

var userName = "Raj"; // Redeclaration is allowed
console.log(userName); // Output: Raj

// Issues with var:
// - It does not have block scope, meaning it can be accessed outside the block.
// - It allows redeclaration, which can lead to unintended bugs.
// - It gets hoisted with an undefined value, leading to unexpected behavior.


// 2️⃣ let - The modern way to declare variables (Recommended)
let userAge = 25; // Declaring a variable using let
console.log(userAge); // Output: 25

userAge = 30; // Allowed (We can update the value)
console.log(userAge); // Output: 30

// let userAge = 35; // Not allowed (SyntaxError: Identifier 'userAge' has already been declared)

// Benefits of let:
// - It has block scope, meaning it only exists inside the block where it's declared.
// - It does not allow redeclaration in the same scope, preventing accidental overwrites.


// 3️⃣ const - Used for constants (Cannot be changed after declaration)
const userCity = "Delhi"; // Declaring a constant
console.log(userCity); // Output: Delhi

// userCity = "Mumbai"; // Not allowed (TypeError: Assignment to constant variable)

// Benefits of const:
// - It is block-scoped like let.
// - It cannot be reassigned after declaration, making the code safer and predictable.
// - However, if it’s an object or array, you can modify its properties/elements but not reassign the entire object.


// ****************** Variable Scope in JavaScript ******************

// Scope determines where a variable is accessible in the code.

// Function Scope (var)
function testVar() {
    if (true) {
        var x = 10; // var is function-scoped
    }
    console.log(x); // Works (Bad practice)
}
testVar(); // Output: 10

// Block Scope (let & const)
function testLetConst() {
    if (true) {
        let y = 20; // let is block-scoped
        const z = 30; // const is block-scoped
    }
    // console.log(y, z); // Not accessible outside the block (ReferenceError)
}
testLetConst();

// Difference:
// - var is function-scoped (it leaks outside the block).
// - let and const are block-scoped (only exist inside the block).


// ****************** Hoisting ******************
// Hoisting is JavaScript's default behavior of moving variable declarations to the top of the scope.

console.log(hoistedVar); // Output: undefined (var is hoisted but uninitialized)
var hoistedVar = "Hoisted";

// console.log(hoistedLet); // ReferenceError (let & const are hoisted but not initialized)
let hoistedLet = "Not hoisted properly";

// Hoisting Summary:
// - var is hoisted with an undefined value.
// - let and const are hoisted but not initialized (ReferenceError if accessed before declaration).
