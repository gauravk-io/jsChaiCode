// ****************** Stack and Heap Memory in JavaScript ******************

// JavaScript manages memory using two types of storage:
// 1️⃣ Stack Memory → Used for **primitive data types** (Number, String, Boolean, Null, Undefined, Symbol, BigInt).
// 2️⃣ Heap Memory → Used for **reference data types** (Objects, Arrays, Functions).

// ****************** 1️⃣ Stack Memory (Primitive Data Types) ******************

// Stack stores **values directly** and works in a **Last In, First Out (LIFO)** manner.

let name1 = "Gaurav";
let name2 = name1; // A copy of the value is created

console.log(name1); // Output: Gaurav
console.log(name2); // Output: Gaurav

// Modifying name2 does not affect name1
name2 = "Raj";

console.log(name1); // Output: Gaurav (Original value remains unchanged)
console.log(name2); // Output: Raj (Only the copy is modified)

// Explanation:
// - name1 is stored in stack memory.
// - name2 gets a **copy** of name1's value, so changes to name2 do not affect name1.

// ****************** 2️⃣ Heap Memory (Reference Data Types) ******************

// Heap stores **objects, arrays, and functions** by reference.

let user1 = { name: "Gaurav", age: 25 };
let user2 = user1; // Reference to the same object in memory

console.log(user1); // Output: { name: "Gaurav", age: 25 }
console.log(user2); // Output: { name: "Gaurav", age: 25 }

// Modifying user2 also affects user1
user2.age = 30;

console.log(user1); // Output: { name: "Gaurav", age: 30 } (Updated because of reference)
console.log(user2); // Output: { name: "Gaurav", age: 30 } (Same object reference)

// Explanation:
// - user1 is stored in heap memory.
// - user2 is assigned the **reference** to user1, not a copy.
// - Any changes in user2 also modify user1 because both point to the **same** memory location.

// ****************** 3️⃣ How to Create Independent Copies of Objects ******************

// Using the spread operator:
let user3 = { ...user1 }; // Creates a shallow copy

user3.age = 35;

console.log(user1.age); // Output: 30 (Original remains unchanged)
console.log(user3.age); // Output: 35 (Modified copy)

// Using JSON methods (Deep Copy - No references):
let user4 = JSON.parse(JSON.stringify(user1));

user4.age = 40;

console.log(user1.age); // Output: 30 (Original remains unchanged)
console.log(user4.age); // Output: 40 (Completely independent copy)

// ****************** 4️⃣ Stack vs Heap Summary ******************

// Stack:
// - Stores **primitive values**.
// - Copies are passed, so modifications do not affect the original.
// - Fast and memory-efficient.

// Heap:
// - Stores **reference types** (Objects, Arrays, Functions).
// - Variables hold a **reference**, not the actual value.
// - Changes to one reference affect all references to the same object.

// ****************** 5️⃣ Best Practices ******************

// 1. Use `const` for objects/arrays if you do not want the reference to change.
// 2. Use the spread operator `{ ...obj }` or `Array.slice()` to create copies.
// 3. Be cautious when modifying objects, as changes affect all references.
// 4. Prefer `Object.freeze(obj)` if an object should remain immutable.
