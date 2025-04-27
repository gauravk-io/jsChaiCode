// ****************** OOPS (Object Oriented Programming) in JavaScript ******************

// ****************** Explanation ******************

// OOPS (Object-Oriented Programming) is a programming paradigm based on **objects** and **classes**.
// JavaScript supports OOPS through:
// - Object Literals
// - Constructor Functions
// - ES6 Classes
// - Prototypes

// Key OOPS Concepts:
// - **Encapsulation**: Grouping data and functions together.
// - **Abstraction**: Hiding unnecessary details.
// - **Inheritance**: Reusing code from other objects/classes.
// - **Polymorphism**: Same method behaving differently on different objects.

// ************************************************************************************************************

// ****************** 1️⃣ Object Literals ******************

const person = {
    name: "Gaurav",
    age: 25,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person.greet(); // Output: Hello, my name is Gaurav

// Explanation:
// - Object literals are the simplest way to create objects.
// - Methods can be defined inside the object directly.

// ************************************************************************************************************

// ****************** 2️⃣ Constructor Functions ******************

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello, I am ${this.name}`);
};

const person1 = new Person("Raj", 30);
const person2 = new Person("Simran", 28);

person1.greet(); // Hello, I am Raj
person2.greet(); // Hello, I am Simran

// Explanation:
// - `Person` is a constructor function.
// - `new` keyword creates a new object.
// - Prototypes are used to add methods to avoid memory waste.

// ************************************************************************************************************

// ****************** 3️⃣ ES6 Classes ******************

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise`);
    }
}

const dog = new Animal("Dog");
dog.speak(); // Dog makes a noise

// Explanation:
// - `class` is a cleaner syntax over constructor functions.
// - `constructor` is a special method for initializing objects.
// - Methods are defined without function keyword inside class.

// ************************************************************************************************************

// ****************** 4️⃣ Inheritance in JavaScript ******************

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the parent class constructor
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} the ${this.breed} barks`);
    }
}

const tommy = new Dog("Tommy", "Labrador");
tommy.speak(); // Tommy the Labrador barks

// Explanation:
// - `extends` keyword is used for inheritance.
// - `super()` calls parent class constructor.
// - Method overriding is done for polymorphism.

// ************************************************************************************************************

// ****************** 5️⃣ Encapsulation (Private Properties) ******************

class BankAccount {
    #balance = 0; // Private property

    deposit(amount) {
        if (amount > 0) this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const myAccount = new BankAccount();
myAccount.deposit(1000);
console.log(myAccount.getBalance()); // 1000

// Explanation:
// - `#` makes a property private.
// - Private properties cannot be accessed outside the class directly.

// ************************************************************************************************************

// ****************** 6️⃣ Polymorphism Example ******************

class Shape {
    draw() {
        console.log("Drawing a shape");
    }
}

class Circle extends Shape {
    draw() {
        console.log("Drawing a circle");
    }
}

const s = new Shape();
const c = new Circle();

s.draw(); // Drawing a shape
c.draw(); // Drawing a circle

// Explanation:
// - Same method `draw()` behaves differently based on the object.

// ************************************************************************************************************

// ****************** Summary ******************

// ✅ JavaScript supports OOPS through objects, constructor functions, and ES6 classes.
// ✅ Key Principles:
//    - Encapsulation: Hiding internal state.
//    - Abstraction: Hiding complexity.
//    - Inheritance: Reusing behavior.
//    - Polymorphism: Same method, different behaviors.
// ✅ Use `class` and `extends` for cleaner, modern OOPS code.
// ✅ Use `#` for private properties inside classes.

// ************************************************************************************************************
