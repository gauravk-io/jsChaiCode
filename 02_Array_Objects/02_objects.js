// ****************** Objects in JavaScript ******************

// Objects in JavaScript are **collections of key-value pairs**.
// Each **key** (also called property name) is a string (or Symbol), and each **value** can be of any type — primitive, array, function, or even another object.
// Objects are used to group related data and functionality, making them essential for modeling real-world entities like users, products, or configurations.

// Example: An object representing a person
const person = {
    name: "John",
    age: 30,
    isEmployed: true
};

// Objects are **reference types**, meaning they are stored in heap memory, and variables hold references (pointers) to the object, not the actual data.


// ??????????????????????????????????????????????????????????????????????????????????????????????????????

// Create a Symbol
const mySymbol = Symbol('myUniqueKey')

// Create an object using the Symbol as a key
const obj = {
    name: 'Alice',                             // Normal key-value pair
    [mySymbol]: 'This is a symbol key value'  // Symbol key-value pair
}

// Access the value using the symbol
console.log(obj[mySymbol])  // Output: This is a symbol key value

// Symbols don't show up in for...in loops or Object.keys
console.log(Object.keys(obj))  // Output: []

// To get symbol keys, use Object.getOwnPropertySymbols
console.log(Object.getOwnPropertySymbols(obj))  // Output: [ Symbol(myUniqueKey) ]

// ????????????????????????????????????????????????????????????????????????????????????????????????????????

// ****************** 1️⃣ Creating Objects ******************

// 1. Object Literal (Most common way)
const car = {
    brand: "Tesla",
    model: "Model 3",
    year: 2023
};

// 2. Using `new Object()` constructor (less common)
const book = new Object();
book.title = "JavaScript Mastery";
book.author = "John Doe";

// Explanation:
// - Object literals are **simple and concise**, preferred in most cases.
// - `new Object()` can be useful when creating objects dynamically but is rarely needed in modern JavaScript.

// ****************** 2️⃣ Accessing & Modifying Properties ******************

// Access properties using **dot notation** (recommended for known keys)
console.log(car.brand);  // Output: Tesla

// Access properties using **bracket notation** (useful for dynamic keys)
let key = "model";
console.log(car[key]);  // Output: Model 3

// Add a new property
car.color = "Red";

// Modify an existing property
car.year = 2024;

// Delete a property
delete car.color;

console.log(car);  // Output : { brand: 'Tesla', model: 'Model 3', year: 2024 }

// Explanation:
// - Dot notation is cleaner and preferred when property names are known and valid identifiers.
// - Bracket notation allows accessing properties dynamically (when key is stored in a variable).

// ****************** 3️⃣ Nested Objects ******************

const student = {
    name: "Alice",
    marks: {
        math: 95,
        science: 90
    }
};

console.log(student.marks.math);  // Output: 95

// Explanation:
// - Objects can contain other objects.
// - Nested objects allow representing complex data structures like user profiles, orders, etc.
// - Use **dot notation** to drill into nested levels.

// ****************** 4️⃣ Methods in Objects ******************

const dog = {
    name: "Buddy",
    bark: function() {
        console.log(this.name + " says Woof!");
    }
};

dog.bark();  // Output: Buddy says Woof!

// Explanation:
// - When a **function is stored as a property**, it is called a **method**.
// - Inside methods, `this` refers to the object itself, allowing access to other properties.

// ****************** 5️⃣ Looping Through Objects ******************

const user = {
    name: "Gaurav",
    age: 25,
    country: "India"
};

for (let key in user) {
    console.log(key, user[key]);
}

// Explanation:
// - `for...in` loops through all **enumerable properties** of an object.
// - Each iteration provides a **key**, which can be used to access the corresponding **value**.

// ****************** 6️⃣ Useful Object Methods ******************

console.log(Object.keys(user));      // Output: ['name', 'age', 'country']
console.log(Object.values(user));    // Output: ['Gaurav', 25, 'India']
console.log(Object.entries(user));   // Output: [['name', 'Gaurav'], ['age', 25], ['country', 'India']]

const target = { a: 1 }
const source = { b: 2, c: 3 }
Object.assign(target, source)   // target: The object to copy properties to.         when we create a new object for this method then putting curly braces is a good practice like const obj3 = Object.assign({}, target, source) here the {} is the target where all properties are copied.
                                // source : The object to copy properties from.

console.log(target)  // Output : { a: 1, b: 2, c: 3 }



// Explanation:
// - `Object.keys()` returns an **array of keys**.
// - `Object.values()` returns an **array of values**.
// - `Object.entries()` returns an **array of [key, value] pairs**.
// - `Object.assign()` copies properties from one or more source objects to a target object. It modifies the target directly and returns it, performing a shallow copy.
// - These are very useful when processing objects programmatically (conversions, filtering, etc.)

// ****************** 7️⃣ Object.freeze() and Object.seal() ******************

const profile = {name: "Raj", age: 22};

// Object.freeze - Locks all changes (add, remove, modify)
Object.freeze(profile);
profile.name = "Amit";  // No effect
delete profile.age;     // No effect
console.log(profile);   // Output: {name: "Raj", age: 22}

// Object.seal - Allows modifying existing properties but prevents adding/removing
const product = {name: "Laptop", price: 50000};
Object.seal(product);
product.price = 55000;   // Works (modification allowed)
product.brand = "HP";    // No effect (add not allowed)
delete product.name;     // No effect (delete not allowed)
console.log(product);    // Output: {name: "Laptop", price: 55000}

// Explanation:
// - `Object.freeze()` makes the object completely **immutable** (no changes allowed).
// - `Object.seal()` allows **modifying existing properties** but prevents adding or deleting properties.

// ****************** 8️⃣ Object Spread (Shallow Copy) ******************

const original = {a: 1, b: 2};
const copy = { ...original };

copy.b = 3;

console.log(original.b);  // Output: 2
console.log(copy.b);      // Output: 3

// Explanation:
// - Spread operator `{...}` creates a **shallow copy**.
// - Only top-level properties are copied, not nested objects.
// - Useful to create independent copies that can be modified safely.

// ****************** 9️⃣ Shallow Copy vs Deep Copy ******************

// Shallow Copy (Spread Operator) - Only top-level properties are copied
const shallowOriginal = {name: "Alice", marks: {math: 90}};
const shallowCopy = {...shallowOriginal};

shallowCopy.marks.math = 100;

console.log(shallowOriginal.marks.math);  // Output: 100 (affected)

// Deep Copy (JSON Method) - Entire object copied (including nested)
const deepOriginal = {name: "Alice", marks: {math: 90}};
const deepCopy = JSON.parse(JSON.stringify(deepOriginal));

deepCopy.marks.math = 100;

console.log(deepOriginal.marks.math);  // Output: 90 (unaffected)

// Explanation:
// - Shallow copy only copies top-level properties. Nested objects **still share references**.
// - Deep copy recursively copies the entire structure, making nested objects independent.
// - `JSON.parse(JSON.stringify(...))` is a common deep copy method, but doesn’t handle functions, `undefined`, or special objects (dates, regex).

// ****************** 🔟 Summary ******************

// - Objects store **key-value pairs** where keys are strings (or symbols) and values can be anything.
// - Use dot notation for static properties and bracket notation for dynamic properties.
// - Objects can have **nested objects** and **methods** (functions).
// - `for...in` loops allow iterating over object properties.
// - Use `Object.keys()`, `Object.values()`, `Object.entries()` for retrieving properties and values.
// - Use `Object.freeze()` to **completely lock** an object.
// - Use `Object.seal()` to allow modifications but prevent adding/removing properties.
// - Use the **spread operator** `{...}` for shallow copies.
// - Use `JSON.parse(JSON.stringify(...))` for deep copies (with some limitations).
// - Objects are stored in **heap memory**, and variables hold **references**, not actual objects.

