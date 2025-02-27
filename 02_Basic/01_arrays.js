// ********** 1️⃣ Introduction to Arrays **********
// Arrays in JavaScript are used to store multiple values in a single variable.
// They can hold different data types, including numbers, strings, objects, and even other arrays.

let numbers = [10, 20, 30, 40]; // Array of numbers
let fruits = ["Apple", "Banana", "Mango"]; // Array of strings
let mixed = [1, "Hello", true, [2, 3]]; // Array with mixed data types

console.log(numbers); // Output: [10, 20, 30, 40]
console.log(fruits[1]); // Output: "Banana" (Accessing elements using index)

// ********** 2️⃣ Creating Arrays **********
// Arrays can be created using the array literal or the Array constructor.

let arrLiteral = [1, 2, 3]; // Using array literal
let arrConstructor = new Array(4, 5, 6); // Using Array constructor

console.log(arrLiteral); // Output: [1, 2, 3]
console.log(arrConstructor); // Output: [4, 5, 6]

// ********** 3️⃣ Accessing and Modifying Elements **********
let colors = ["Red", "Green", "Blue"];

console.log(colors[0]); // Output: "Red" (Access first element)
console.log(colors[colors.length - 1]); // Output: "Blue" (Access last element)

colors[1] = "Yellow"; // Modifying an element
console.log(colors); // Output: ["Red", "Yellow", "Blue"]

// ********** 4️⃣ Array Methods **********
let arr = [1, 2, 3, 4, 5];

// Push & Pop (Add/Remove from end)
arr.push(6); // Adds 6 at the end
console.log(arr); // Output: [1, 2, 3, 4, 5, 6]

arr.pop(); // Removes last element
console.log(arr); // Output: [1, 2, 3, 4, 5]

// Unshift & Shift (Add/Remove from start)
arr.unshift(0); // Adds 0 at the beginning
console.log(arr); // Output: [0, 1, 2, 3, 4, 5]

arr.shift(); // Removes first element
console.log(arr); // Output: [1, 2, 3, 4, 5]

// ********** 5️⃣ Finding and Searching in Arrays **********
let nums = [10, 20, 30, 40];

console.log(nums.includes(20)); // Output: true (Checks if 20 exists)
console.log(nums.indexOf(30)); // Output: 2 (Finds index of 30)

// ********** 6️⃣ Extracting and Modifying Arrays **********
// Slice (Extracts elements without modifying the original array)
let slicedArr = nums.slice(1, 3); // Extracts elements from index 1 to 2
console.log(slicedArr); // Output: [20, 30]

// Splice (Removes elements and modifies the original array)
nums.splice(2, 1, 99); // Removes 1 element at index 2 and inserts 99
console.log(nums); // Output: [10, 20, 99, 40]

// ********** 7️⃣ Looping Through Arrays **********
let items = ["Pen", "Notebook", "Eraser"];

// Using forEach
items.forEach((item, index) => {
  console.log(`Item ${index + 1}: ${item}`);
});

// Using map (Creates a new array)
let upperCaseItems = items.map(item => item.toUpperCase());
console.log(upperCaseItems); // Output: ["PEN", "NOTEBOOK", "ERASER"]

// ********** 8️⃣ Filtering and Reducing Arrays **********
let numArr = [5, 10, 15, 20, 25];

let filteredArr = numArr.filter(num => num > 10); // Filters numbers greater than 10
console.log(filteredArr); // Output: [15, 20, 25]

let sum = numArr.reduce((acc, num) => acc + num, 0); // Calculates sum of all numbers
console.log(sum); // Output: 75

// ********** 9️⃣ Sorting and Reversing Arrays **********
let sortArr = [4, 1, 8, 3];
sortArr.sort(); // Sorts array in ascending order (Lexicographic by default)
console.log(sortArr); // Output: [1, 3, 4, 8]

sortArr.reverse(); // Reverses the order
console.log(sortArr); // Output: [8, 4, 3, 1]

/// ********** 🔟 Combining, Spreading, and Flattening Arrays **********
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// Merging using concat
let merged = arr1.concat(arr2);
console.log(merged); // Output: [1, 2, 3, 4, 5, 6]

// Using Spread Operator
let spreadArr = [...arr1, ...arr2];
console.log(spreadArr); // Output: [1, 2, 3, 4, 5, 6]

// Using flat() to flatten a nested array
let nestedArr = [1, [2, 3], [4, [5, 6]]];
let flatArr = nestedArr.flat();
console.log(flatArr); // Output: [1, 2, 3, 4, [5, 6]]


// ********** 🔟1️⃣  Summary **********
// - Arrays store multiple values and support operations like adding, removing, and searching.
// - Methods like push/pop and shift/unshift modify arrays dynamically.
// - Slice and splice help extract and modify elements within an array.
// - Iteration can be done using forEach, map, filter, and reduce.
// - Sorting and reversing allow organizing arrays effectively.
// - Arrays can be merged using concat or the spread operator.





// ********** 🔟2️⃣ Using from() Method **********
// The from() method creates a new array from an iterable or array-like object.

let str = "Hello";
let arrFromStr = Array.from(str); // Converts string to an array
console.log(arrFromStr); // Output: ['H', 'e', 'l', 'l', 'o']

// Using from() with a Set (removes duplicates)
let uniqueNumbers = new Set([1, 2, 3, 3, 4]);
let arrFromSet = Array.from(uniqueNumbers);
console.log(arrFromSet); // Output: [1, 2, 3, 4]

// Using from() with a mapping function
let numberss = Array.from([1, 2, 3], num => num * 2);
console.log(numberss); // Output: [2, 4, 6]

// Creating an array from an array-like object (arguments)
function createArray() {
  let arr = Array.from(arguments);
  console.log(arr);
}
createArray(10, 20, 30); // Output: [10, 20, 30]

// ********** Interesting Case: from() on an Object **********
let obj = { name: "abc" };
let arrFromObj = Array.from(obj); 

// Explanation:
// Array.from() works on iterable or array-like objects (e.g., strings, Sets, Maps, NodeLists).
// However, a plain object like { name: "abc" } is neither iterable nor an array-like object.
// Since it doesn't have indexed elements or a length property, Array.from() returns an empty array.

console.log(arrFromObj); // Output: []



// ********** 🔟3️⃣ Using of() Method **********
// The of() method creates a new array from the given values.

let arr3 = Array.of(1, 2, 3, 4);
console.log(arr3); // Output: [1, 2, 3, 4]

// Creating an array with a single number
let arr4 = Array.of(5);
console.log(arr4); // Output: [5]

// Difference between Array.of() and Array() constructor
let arr5 = Array(5); // Creates an empty array with length 5
console.log(arr5); // Output: [ <5 empty slots> ]

let arr6 = Array.of(5); // Creates an array with a single element
console.log(arr6); // Output: [5]

// Using Array.of() with different data types
let mixedArr = Array.of(1, "hello", true, null);
console.log(mixedArr); // Output: [1, "hello", true, null]

// ********** Creating an Array from Different Variables **********
let num = 10;
let str1 = "JavaScript";
let bool = false;
let obj1 = { key: "value" };

let newArray = Array.of(num, str1, bool, obj1);
console.log(newArray); // Output: [10, "JavaScript", false, { key: "value" }]

