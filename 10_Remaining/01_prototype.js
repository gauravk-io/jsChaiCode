// ****************** Prototype in JavaScript ******************

// ****************** Explanation ******************

// Every JavaScript object has an internal property called **[[Prototype]]**.
// **Prototype** is an object from which other objects inherit properties and methods.
// JavaScript uses **Prototype Chain** for inheritance:
// - If a property/method is not found in the object, JavaScript looks up its prototype.

// ************************************************************************************************************

// ****************** 1️⃣ Accessing Prototype ******************

const obj = {
    name: "Gaurav"
};

console.log(Object.getPrototypeOf(obj)); // Outputs the prototype of obj

// Explanation:
// - `Object.getPrototypeOf(object)` gets the prototype of an object.
// - All objects by default inherit from `Object.prototype`.

// ************************************************************************************************************

// ****************** 2️⃣ Adding Methods to Constructor Function Using Prototype ******************

function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding method to prototype
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

const person1 = new Person("Raj", 25);
const person2 = new Person("Simran", 27);

person1.greet(); // Hello, my name is Raj
person2.greet(); // Hello, my name is Simran

// Explanation:
// - Instead of adding methods inside constructor (wastes memory), add them to `prototype`.
// - All instances share the same `greet` method through prototype.

// ************************************************************************************************************

// ****************** 3️⃣ Prototype Chain ******************

let arr = [1, 2, 3];

console.log(arr.__proto__);         // Array.prototype
console.log(arr.__proto__.__proto__); // Object.prototype
console.log(arr.__proto__.__proto__.__proto__); // null

// Explanation:
// - `arr` inherits from `Array.prototype`.
// - `Array.prototype` inherits from `Object.prototype`.
// - `Object.prototype`'s prototype is `null` (end of chain).

// ************************************************************************************************************

// ****************** 4️⃣ Class and Prototype ******************

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise`);
    }
}

const dog = new Animal("Dog");

console.log(Animal.prototype); // See all methods attached

// Explanation:
// - In classes, methods are automatically added to `prototype`.
// - Saves memory because all instances share methods.

// ************************************************************************************************************

// ****************** 5️⃣ Prototype vs __proto__ ******************

// prototype:
// - Property of a function (like `Person.prototype`).
// - Used when creating new instances.

// __proto__:
// - Property of an object.
// - Points to the prototype from which the object inherits.

// Example:

function Car(model) {
    this.model = model;
}

const car1 = new Car("BMW");

console.log(car1.__proto__ === Car.prototype); // true

// Explanation:
// - `car1.__proto__` points to `Car.prototype`.

// ************************************************************************************************************

// ****************** Summary ******************

// ✅ Prototype is a fundamental feature for inheritance in JavaScript.
// ✅ Methods added to `Constructor.prototype` are shared by all instances.
// ✅ The Prototype Chain helps JavaScript look up properties and methods.
// ✅ `prototype` is for functions/classes, `__proto__` is for objects.
// ✅ Always prefer class syntax for modern code but understand how prototype works.

// ************************************************************************************************************
