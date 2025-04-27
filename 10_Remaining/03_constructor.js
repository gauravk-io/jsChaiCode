// ****************** Class, Constructor, and Static in JavaScript ******************

// ****************** Explanation ******************

// JavaScript introduced **Classes** in ES6 to provide a clearer and cleaner syntax for creating objects and handling inheritance.
// A **constructor** is a special method inside a class that gets called when a new object is created.
// **Static** methods are defined on the class itself, not on instances, and are called without creating an object.

// ************************************************************************************************************

// ****************** 1️⃣ Class and Constructor ******************

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }
}

const person1 = new Person("Gaurav", 25);
person1.greet(); 
// Hello, my name is Gaurav and I am 25 years old

// Explanation:
// - `constructor()` runs automatically when a new object is created using `new`.
// - `this` inside the constructor refers to the newly created object.
// - You can define instance methods inside the class.

// ************************************************************************************************************

// ****************** 2️⃣ Static Methods ******************

class MathOperations {
    static add(a, b) {
        return a + b;
    }

    static multiply(a, b) {
        return a * b;
    }
}

console.log(MathOperations.add(5, 3)); // 8
console.log(MathOperations.multiply(4, 6)); // 24

// Explanation:
// - `static` methods belong to the class, not to instances.
// - You call static methods directly using the class name, not through objects.

// ************************************************************************************************************

// ****************** 3️⃣ Static vs Instance Methods ******************

// Instance Method:
const person2 = new Person("Raj", 30);
person2.greet(); // Calls greet() which is an instance method.

// Static Method:
console.log(MathOperations.add(2, 7)); // Calls add() without creating an object.

// Explanation:
// - Instance methods are called on created objects.
// - Static methods are called on the class itself.

// ************************************************************************************************************

// ****************** 4️⃣ Example: Practical Usage of Static ******************

class User {
    constructor(username) {
        this.username = username;
    }

    static register(username) {
        return new User(username);
    }
}

const user1 = User.register("Simran");
console.log(user1.username); // Simran

// Explanation:
// - `register()` is a static method that creates and returns a new User instance.
// - Used for utility or helper functions related to the class.

// ************************************************************************************************************

// ****************** 5️⃣ Important Points ******************

// - Only functions inside `constructor` are attached directly to instances.
// - Static methods cannot access instance properties directly (they don't use `this` tied to instances).
// - Static methods are often used to create utility/helper functions for the class.

// ************************************************************************************************************

// ****************** Summary ******************

// ✅ Classes make object creation and inheritance easy and clean.
// ✅ `constructor()` initializes the object’s properties.
// ✅ `static` methods belong to the class itself and are used for utility purposes.
// ✅ Instance methods belong to object instances created by the class.
// ✅ Static methods cannot be called through an instance.

// ************************************************************************************************************
