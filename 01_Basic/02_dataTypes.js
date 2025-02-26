// ****************** Data Types in JavaScript ******************

// JavaScript has two main types of data: 
// 1. Primitive Data Types
// 2. Non-Primitive (Reference) Data Types


// ****************** 1. Primitive Data Types ******************
// These are immutable and stored directly in memory. 
// They include String, Number, Boolean, Undefined, Null, Symbol, and BigInt.


// String - Represents textual data enclosed in quotes.
let firstName = "Gaurav"; // Can be single or double quotes
console.log(typeof firstName); // Output: string

// Number - Represents both integers and floating-point numbers.
// range of number is -(2^53 - 1) to (2^53 - 1)
let age = 25; 
let price = 99.99;
console.log(typeof age, typeof price); // Output: number number

// Boolean - Represents true or false values.
let isStudent = true;
console.log(typeof isStudent); // Output: boolean

// Undefined - A variable that has been declared but not assigned a value.
let city;
console.log(typeof city); // Output: undefined

// Null - Represents an intentional absence of a value.
let car = null;
console.log(typeof car); // Output: object (This is a known JavaScript bug, it should be null)

// Symbol - Represents unique values useful for object property keys.
let uniqueId = Symbol("id");
console.log(typeof uniqueId); // Output: symbol

// BigInt - Used for very large numbers beyond the Number type limit.
let bigNumber = 12345678901234567890n;
console.log(typeof bigNumber); // Output: bigint


// ****************** 2. Non-Primitive (Reference) Data Types ******************
// These are mutable and stored as references in memory.
// They include Object, Array, and Function.


// Object - A collection of key-value pairs.
let person = {
    name: "Gaurav",
    age: 25,
    city: "Delhi"
};
console.log(typeof person); // Output: object

// Array - A special type of object used to store ordered collections.
let fruits = ["Apple", "Banana", "Mango"];
console.log(typeof fruits); // Output: object

// Function - A reusable block of code.
function greet() {
    return "Hello, World!";
}
console.log(typeof greet); // Output: function


// ****************** Differences Between Primitive and Non-Primitive ******************

// Primitive values are stored directly in memory, while non-primitive values are stored as references.
let x = 10;
let y = x; // Copy of value is created
y = 20;
console.log(x); // Output: 10 (Original value remains unchanged)

let obj1 = { a: 10 };
let obj2 = obj1; // Reference is copied, not the value
obj2.a = 20;
console.log(obj1.a); // Output: 20 (Both obj1 and obj2 point to the same reference)


// ****************** Summary ******************

// Primitive Data Types: Stored directly in memory, immutable, copied by value.
// - String, Number, Boolean, Undefined, Null, Symbol, BigInt.

// Non-Primitive Data Types: Stored as references, mutable, copied by reference.
// - Object, Array, Function.
