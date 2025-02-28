// ****************** Looping Over Arrays and Objects in JavaScript ******************

// ****************** Explanation ******************

// JavaScript offers several ways to loop over **arrays** and **objects**. 
// Arrays use **index-based iteration**, while objects use **key-based iteration**. 
// Each method is suited for different purposes, like accessing elements, transforming data, or performing side effects.


// ************************************************************************************************************

// ****************** 1️⃣ Looping Over Arrays ******************

// Arrays are ordered collections, so we often loop by index or directly by value.

// ➡️ Using for Loop
const fruits = ["Apple", "Banana", "Cherry"];

for (let i = 0; i < fruits.length; i++) {
    console.log(`Index ${i}: ${fruits[i]}`);
}

// Explanation:
// - Classic `for` loop gives both **index** and **value access**.


// ************************************************************************************************************

// ➡️ Using for...of Loop

for (const fruit of fruits) {
    console.log(`Fruit: ${fruit}`);
}

// Explanation:
// - `for...of` loops directly over **values**.
// - Cleaner when you only need the array elements.


// ************************************************************************************************************

// ➡️ Using forEach Method

fruits.forEach((fruit, index) => {
    console.log(`forEach - Index ${index}: ${fruit}`);
});

// Explanation:
// - `forEach` works only on arrays.
// - Provides **both value and index** via callback parameters.


// ************************************************************************************************************

// ➡️ Using map Method (for Transformations)

const fruitUppercase = fruits.map(fruit => fruit.toUpperCase());
console.log(fruitUppercase);

// Explanation:
// - `map` is useful when you want to create a **new array** by transforming items.


// ************************************************************************************************************

// ➡️ Using for...in Loop (Not Recommended for Arrays)

for (let index in fruits) {
    console.log(`for...in - Index ${index}: ${fruits[index]}`);
}

// Explanation:
// - Works, but `for...in` is designed for objects (keys, not array indexes).
// - Avoid using `for...in` for arrays unless necessary.


// ************************************************************************************************************

// ****************** 2️⃣ Looping Over Objects ******************

// Objects are **key-value pairs**, so loops focus on **keys**.

// ➡️ Using for...in Loop

const user = {
    name: "Gaurav",
    age: 25,
    city: "Mumbai"
};

for (let key in user) {
    console.log(`Key: ${key}, Value: ${user[key]}`);
}

// Explanation:
// - `for...in` is perfect for looping over **object properties (keys)**.
// - You can access values using `object[key]`.


// ************************************************************************************************************

// ➡️ Using Object.keys() with forEach

Object.keys(user).forEach(key => {
    console.log(`Key: ${key}, Value: ${user[key]}`);
});

// Explanation:
// - `Object.keys()` gives an **array of keys**, making it easy to use `forEach`.


// ************************************************************************************************************

// ➡️ Using Object.entries() with for...of

for (const [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
}

// Explanation:
// - `Object.entries()` returns **an array of `[key, value]` pairs**.
// - `for...of` works directly with these pairs.


// ************************************************************************************************************

// ➡️ Using Object.values() (When You Only Need Values)

Object.values(user).forEach(value => {
    console.log(`Value: ${value}`);
});

// Explanation:
// - `Object.values()` gives an **array of values** directly.


// ************************************************************************************************************

// ****************** Summary ******************

// ✅ Looping Arrays:
// - `for`: Full control, index-based.
// - `for...of`: Directly accesses values, cleaner.
// - `forEach`: Array method with callback, also gets index.
// - `map`: Creates a **new array** after transforming elements.
// - `for...in`: Technically works but **not recommended** for arrays.

// ✅ Looping Objects:
// - `for...in`: Loops directly over **keys**.
// - `Object.keys()` + `forEach`: Array-like loop over **keys**.
// - `Object.entries()` + `for...of`: Loops over `[key, value]` pairs directly.
// - `Object.values()` + `forEach`: Loops over **just values**.

// ✅ Best Practices:
// - Use **`forEach` or `map`** for arrays when working with transformations or side effects.
// - Use **`for...of`** for cleaner iteration of arrays and iterable objects.
// - Use **`for...in`** only for **objects**, not arrays.
// - Use **`Object.keys()` and `Object.entries()`** for more flexibility with object loops.

// ************************************************************************************************************
