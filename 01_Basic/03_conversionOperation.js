// ****************** Data Type Conversion in JavaScript ******************

// JavaScript allows conversion between different data types explicitly (manual) and implicitly (automatic).

// ****************** 1️⃣ String Conversion ******************

// Any data type can be converted to a string using String() or toString()

let num = 100;
let strNum = String(num); // Converts number to string
console.log(typeof strNum); // Output: string

let bool = true;
let strBool = String(bool); // Converts boolean to string
console.log(typeof strBool); // Output: string

let arr = [1, 2, 3];
let strArr = String(arr); // Converts array to string
console.log(strArr); // Output: "1,2,3"

// Using toString() method (works on numbers, booleans, arrays, but not null or undefined)
console.log((50).toString()); // Output: "50"

// ****************** 2️⃣ Number Conversion ******************

// A string, boolean, or null can be converted to a number using Number() or parseInt()/parseFloat()

let str = "123";
let numStr = Number(str); // Converts string to number
console.log(typeof numStr, numStr); // Output: number 123

let strInvalid = "123abc";
let numInvalid = Number(strInvalid); // Converts to NaN (Not a Number)
console.log(numInvalid); // Output: NaN

// Using parseInt() and parseFloat()
console.log(parseInt("123.45")); // Output: 123 (Extracts integer part)
console.log(parseFloat("123.45")); // Output: 123.45 (Keeps decimal part)

// Boolean to Number
console.log(Number(true)); // Output: 1
console.log(Number(false)); // Output: 0

// Null and Undefined to Number
console.log(Number(null)); // Output: 0
console.log(Number(undefined)); // Output: NaN

// ****************** 3️⃣ Boolean Conversion ******************

// Any value can be converted to a boolean using Boolean()

console.log(Boolean(1)); // Output: true
console.log(Boolean(0)); // Output: false
console.log(Boolean("hello")); // Output: true (Non-empty string is true)
console.log(Boolean("")); // Output: false (Empty string is false)
console.log(Boolean(null)); // Output: false
console.log(Boolean(undefined)); // Output: false
console.log(Boolean([])); // Output: true (Empty array is considered true)
console.log(Boolean({})); // Output: true (Empty object is considered true)

// ****************** 4️⃣ Implicit Type Conversion (Type Coercion) ******************

// JavaScript automatically converts data types in certain operations

console.log("5" + 2); // Output: "52" (Number is converted to a string and concatenated)
console.log("5" - 2); // Output: 3 (String is converted to a number)
console.log("5" * "2"); // Output: 10 (Both strings are converted to numbers)
console.log("5" * "abc"); // Output: NaN (Invalid multiplication)

// Boolean in Arithmetic Operations
console.log(true + 1); // Output: 2 (true is converted to 1)
console.log(false + 1); // Output: 1 (false is converted to 0)

// Null and Undefined in Arithmetic
console.log(null + 10); // Output: 10 (null is treated as 0)
console.log(undefined + 10); // Output: NaN (undefined cannot be converted to a number)

// ****************** Summary of Best Practices ******************

// - Use String(), Number(), and Boolean() for explicit conversion.
// - Avoid relying on implicit type conversion, as it may lead to unexpected results.
// - Be careful when working with null and undefined to avoid NaN errors.
