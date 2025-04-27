// ****************** Comparison of Data Types in JavaScript ******************

// JavaScript allows comparison of different data types using:
// 1️⃣ Loose Equality (==) → Converts types before comparing.
// 2️⃣ Strict Equality (===) → Compares both value and type without conversion.
// 3️⃣ Relational Operators (>, <, >=, <=) → Used for number, string, and mixed-type comparisons.

// ****************** 1️⃣ Loose Equality (==) ******************

// Loose equality allows type coercion before comparison.

console.log(5 == "5"); // Output: true (String "5" is converted to number 5)
console.log(0 == false); // Output: true (false is converted to 0)
console.log("" == false); // Output: true (Empty string is treated as false)
console.log(null == undefined); // Output: true (Special case)

// Unexpected cases:
console.log(" \t\n" == 0); // Output: true (Whitespace is treated as 0)
console.log("123abc" == 123); // Output: false (Invalid number conversion results in NaN)

// ****************** 2️⃣ Strict Equality (===) ******************

// Strict equality does not allow type conversion.

console.log(5 === "5"); // Output: false (Different data types)
console.log(0 === false); // Output: false (Boolean and number are different types)
console.log("" === false); // Output: false (String and boolean are different types)
console.log(null === undefined); // Output: false (Different data types)

// ****************** 3️⃣ Relational Operators (> , < , >= , <=) ******************

// These operators work differently for numbers, strings, and mixed data types.

// ---------- Comparison with Numbers ----------
console.log(10 > 5); // Output: true (10 is greater than 5)
console.log(10 < 20); // Output: true (10 is less than 20)
console.log(10 >= 10); // Output: true (10 is equal to 10)
console.log(5 <= 2); // Output: false (5 is not less than or equal to 2)

// ---------- Comparison with Strings ----------
// Strings are compared based on Unicode values (lexicographically).

console.log("apple" > "banana"); // Output: false ('a' comes before 'b' in Unicode)
console.log("car" < "cat"); // Output: true ('r' comes before 't')
console.log("Zebra" > "apple"); // Output: false ('Z' has a lower Unicode value than 'a')

console.log("2" > "12"); // Output: true (Character-wise, "2" > "1")

// Explanation:
// - "2" > "12" because the first character '2' (Unicode 50) is greater than '1' (Unicode 49).
// - String comparison does **not** compare numbers mathematically.

// ---------- Comparison Between Different Data Types ----------
// JavaScript converts non-number types into numbers when using relational operators.

console.log("10" > 5); // Output: true (String "10" is converted to number 10)
console.log("5" < 10); // Output: true (String "5" is converted to number 5)
console.log(true > false); // Output: true (true is 1, false is 0)

console.log(null > 0); // Output: false (null is converted to 0)
console.log(null == 0); // Output: false (null is only equal to undefined)
console.log(null >= 0); // Output: true (null is treated as 0 in relational comparisons)

console.log(undefined > 0); // Output: false (undefined is NaN, cannot be compared)
console.log(undefined < 0); // Output: false (undefined is NaN, cannot be compared)
console.log(undefined == 0); // Output: false (undefined is not equal to any number)

// ****************** 4️⃣ Comparing Objects and Arrays ******************

// Objects and arrays are compared by reference, not value.

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr1 == arr2); // Output: false (Different memory locations)
console.log(arr1 === arr2); // Output: false (Still different memory locations)

let obj1 = { key: "value" };
let obj2 = { key: "value" };
console.log(obj1 == obj2); // Output: false (Different objects in memory)
console.log(obj1 === obj2); // Output: false (Same reason as above)

// When comparing two references pointing to the same object:
let obj3 = obj1;
console.log(obj1 === obj3); // Output: true (Both point to the same memory location)

// ****************** 5️⃣ Comparing Special Values ******************

console.log(NaN == NaN); // Output: false (NaN is not equal to itself)
console.log(Object.is(NaN, NaN)); // Output: true (Correct way to compare NaN)

console.log(null == 0); // Output: false (null is only loosely equal to undefined)
console.log(undefined == 0); // Output: false (undefined is not equal to any number)

// ****************** Summary of Best Practices ******************

// 1. Use === (Strict Equality) to avoid unexpected type conversions.
// 2. Avoid relying on == for comparisons involving different data types.
// 3. Use Object.is() when comparing NaN values.
// 4. Remember that objects and arrays are compared by reference, not by value.
// 5. Be cautious with relational operators, as they perform implicit type conversion.
