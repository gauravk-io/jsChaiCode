// ****************** Why String to Number Conversion is Confusing in JavaScript ******************

// JavaScript allows strings to be converted into numbers explicitly (using Number(), parseInt(), parseFloat())
// and implicitly (via arithmetic operations). However, this process is not always predictable.

// ****************** 1️⃣ Implicit Conversion Issues ******************

// JavaScript automatically converts strings to numbers in arithmetic operations, 
// but behaves inconsistently in different cases.

console.log("10" - "5"); // Output: 5 (Both strings are treated as numbers)
console.log("10" + "5"); // Output: "105" (Strings are concatenated instead of converted)
console.log("10" * "5"); // Output: 50 (Strings are converted to numbers)
console.log("10" / "2"); // Output: 5 (Strings are converted to numbers)

// Explanation:
// - `+` concatenates if any operand is a string.
// - `-`, `*`, `/` force string-to-number conversion if both operands are valid numbers.

// ****************** 2️⃣ Issues with Non-Numeric Strings ******************

console.log(Number("123abc")); // Output: NaN (Not a Number)
console.log(parseInt("123abc")); // Output: 123 (Stops at first non-numeric character)
console.log(parseFloat("123.45abc")); // Output: 123.45 (Parses until invalid character)

// Explanation:
// - `Number("123abc")` returns NaN because the entire string is not a valid number.
// - `parseInt()` extracts only the initial numeric portion before encountering a non-numeric character.
// - `parseFloat()` works similarly but allows decimal points.

// ****************** 3️⃣ Unexpected Results with Empty Strings and Whitespace ******************

console.log(Number("")); // Output: 0 (Empty string is treated as 0)
console.log(Number(" ")); // Output: 0 (Whitespace is ignored)
console.log(parseInt(" ")); // Output: NaN (parseInt does not treat empty spaces as 0)

// Explanation:
// - `Number("")` and `Number(" ")` return 0, which may cause unexpected results in calculations.
// - `parseInt(" ")` returns NaN since it does not consider whitespace a valid number.

// ****************** 4️⃣ Edge Cases with Boolean, Null, and Undefined ******************

console.log(Number(true)); // Output: 1 (true is treated as 1)
console.log(Number(false)); // Output: 0 (false is treated as 0)
console.log(Number(null)); // Output: 0 (null is treated as 0)
console.log(Number(undefined)); // Output: NaN (undefined cannot be converted)

// Explanation:
// - Boolean values convert to 1 (true) and 0 (false).
// - `null` converts to 0, but `undefined` results in NaN, which can cause unexpected behavior.

// ****************** 5️⃣ Beware of Leading Zeros and Different Bases ******************

console.log(parseInt("0123")); // Output: 123 (Leading zero is ignored in base 10)
console.log(parseInt("0123", 8)); // Output: 83 (Interpreted as octal because of base 8)
console.log(parseInt("0x10")); // Output: 16 (Interpreted as hexadecimal)

// Explanation:
// - By default, parseInt() assumes base 10 but may interpret leading zeros as octal in older browsers.
// - Specifying a radix (base) explicitly avoids confusion (e.g., `parseInt("0123", 10)`).

// ****************** Summary of Best Practices ******************

// 1. Always use `Number()` when you expect a complete valid numeric string.
// 2. Use `parseInt()` or `parseFloat()` only if the input may contain extra characters.
// 3. Avoid relying on implicit conversion, especially in arithmetic operations.
// 4. Be cautious of empty strings, whitespace, null, and undefined values when converting.
// 5. Explicitly define a radix when using `parseInt()` to avoid unintended interpretations.
