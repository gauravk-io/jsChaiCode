// ********** 1️⃣ Numbers in JavaScript **********
// JavaScript has only one number type: `Number`, which includes both integers and decimals.
// It also supports special values like `Infinity` and `NaN` (Not a Number).

let num1 = 25;      // Integer
let num2 = 12.5;    // Floating-point number
let num3 = 1e6;     // Scientific notation (1 * 10^6 = 1000000)
let num4 = Infinity; // Represents infinity
let num5 = NaN;      // "Not a Number", occurs when a mathematical operation fails

console.log(typeof num1); // Output: number
console.log(typeof num2); // Output: number

// ********** 2️⃣ Arithmetic Operations **********
// JavaScript supports basic arithmetic operations like addition, subtraction, multiplication, etc.

let a = 10, b = 3;

console.log(a + b);  // Addition: Output -> 13
console.log(a - b);  // Subtraction: Output -> 7
console.log(a * b);  // Multiplication: Output -> 30
console.log(a / b);  // Division: Output -> 3.3333...
console.log(a % b);  // Modulus (Remainder): Output -> 1
console.log(a ** b); // Exponentiation (10^3): Output -> 1000

// ********** 3️⃣ Number Methods **********
// JavaScript provides built-in methods to handle numbers efficiently.

let num = 7.56789;
console.log(num.toFixed(2));  // Rounds to 2 decimal places: Output -> "7.57"
console.log(num.toPrecision(3)); // Rounds to 3 significant figures: Output -> "7.57"

console.log(Number("123"));   // Converts string to number: Output -> 123
console.log(Number.isInteger(5)); // Checks if number is integer: Output -> true
console.log(Number.isNaN("abc" / 2)); // Checks if value is NaN: Output -> true

let number = 1234567.89;
console.log(number.toLocaleString("en-US"));  // Output: "1,234,567.89"
console.log(number.toLocaleString("en-IN"));  // Output: "12,34,567.89"

// ********** 4️⃣ Math Object in JavaScript **********
// The `Math` object provides various mathematical functions for calculations.

console.log(Math.PI);        // Output: 3.141592653589793
console.log(Math.abs(-10));  // Absolute value: Output -> 10
console.log(Math.round(4.6)); // Rounds to nearest integer: Output -> 5
console.log(Math.floor(4.9)); // Rounds down: Output -> 4
console.log(Math.ceil(4.1));  // Rounds up: Output -> 5
console.log(Math.sqrt(25));   // Square root: Output -> 5
console.log(Math.pow(2, 3));  // Power (2^3): Output -> 8
console.log(Math.max(10, 20, 30)); // Maximum value: Output -> 30
console.log(Math.min(10, 20, 30)); // Minimum value: Output -> 10
console.log(Math.random());   // Generates a random number between 0 and 1

// ********** 5️⃣ Generating Random Numbers in a Range **********

// Generates a random integer between min and max (both inclusive)
// 1. Math.random() gives a number between 0 and 1.
// 2. Multiplying by (max - min + 1) scales it to the desired range.
// 3. Math.floor() ensures it's a whole number, and adding min shifts the range.

let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);

// ********** 6️⃣ Summary **********
// - JavaScript has a single `Number` type, including integers, decimals, `Infinity`, and `NaN`.
// - Use `toFixed()` and `toPrecision()` for formatting numbers.
// - The `Math` object provides methods for rounding, power, square root, and random number generation.
// - `Math.random()` generates random values, often used with `floor()` to set a range.
