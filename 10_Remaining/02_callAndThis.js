// ****************** Call and This in JavaScript ******************

// ****************** Explanation ******************

// `this` keyword refers to the object that is executing the current function.
// - In a method → `this` refers to the object.
// - Alone → `this` refers to the global object (window in browsers).
// - In strict mode → `this` is `undefined`.
// - In event handlers → `this` refers to the element triggering the event.

// `call()` method:
// - Allows you to **call a function with a specific `this` value** and arguments passed individually.

// ************************************************************************************************************

// ****************** 1️⃣ Understanding `this` ******************

const user = {
    name: "Gaurav",
    greet: function() {
        console.log(`Hello, ${this.name}`);
    }
};

user.greet(); // Hello, Gaurav

// Explanation:
// - Here, `this` refers to `user` object.

// In Global Scope:

console.log(this); // Window (in browsers)

// In Strict Mode:

"use strict";

function showThis() {
    console.log(this);
}

showThis(); // undefined

// ************************************************************************************************************

// ****************** 2️⃣ `this` in Arrow Functions ******************

const person = {
    name: "Raj",
    greet: () => {
        console.log(`Hello, ${this.name}`);
    }
};

person.greet(); // Hello, undefined

// Explanation:
// - Arrow functions do **not have their own `this`**.
// - They take `this` from their lexical (parent) environment.

// ************************************************************************************************************

// ****************** 3️⃣ Using `call()` Method ******************

function greetUser(city, country) {
    console.log(`Hello, ${this.name} from ${city}, ${country}`);
}

const user1 = {
    name: "Simran"
};

greetUser.call(user1, "Delhi", "India"); 
// Hello, Simran from Delhi, India

// Explanation:
// - `call()` immediately invokes the function with a given `this` value.
// - Arguments are passed one-by-one (separated by commas).

// ************************************************************************************************************

// ****************** 4️⃣ call() vs apply() vs bind() ******************

// call():
// - Executes the function immediately with individual arguments.

greetUser.call(user1, "Delhi", "India");

// apply():
// - Executes the function immediately with arguments in an array.

greetUser.apply(user1, ["Delhi", "India"]);

// bind():
// - Returns a new function with bound `this` value, NOT executed immediately.

const newGreet = greetUser.bind(user1, "Delhi", "India");
newGreet(); // Hello, Simran from Delhi, India

// ************************************************************************************************************

// ****************** 5️⃣ Example: Borrowing Methods ******************

const student1 = {
    name: "Akash",
    score: 90,
    showScore: function() {
        console.log(`${this.name} scored ${this.score}`);
    }
};

const student2 = {
    name: "Neha",
    score: 95
};

student1.showScore.call(student2); 
// Neha scored 95

// Explanation:
// - `student2` borrows `showScore` method from `student1` using `call()`.

// ************************************************************************************************************

// ****************** Summary ******************

// ✅ `this` refers to the object that calls the function.
// ✅ In arrow functions, `this` is inherited from parent scope.
// ✅ `call()` invokes a function with a specific `this` and arguments separately.
// ✅ `apply()` is like `call()` but takes arguments in an array.
// ✅ `bind()` returns a new function with bound `this`, useful for delayed execution.

// ************************************************************************************************************
