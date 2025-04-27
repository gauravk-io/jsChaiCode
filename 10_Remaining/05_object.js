// ****************** Objects in JavaScript ******************

// ****************** Explanation ******************

// An **object** is a collection of key-value pairs where keys are strings (or Symbols) and values can be any type.
// Objects help us group related data and functionality together.

// ************************************************************************************************************

// ****************** 1️⃣ Creating Objects ******************

// Using Object Literal
const person = {
    name: "Gaurav",
    age: 25,
    greet: function() {
        console.log("Hello");
    }
};

console.log(person.name); // Gaurav
person.greet(); // Hello

// Using Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const user1 = new Person("Raj", 30);
console.log(user1.name); // Raj

// Using Object.create()
const proto = {
    greet: function() {
        console.log("Hi from prototype");
    }
};
const obj = Object.create(proto);
obj.greet(); // Hi from prototype

// ************************************************************************************************************

// ****************** 2️⃣ Accessing and Modifying Object Properties ******************

// Dot Notation
console.log(person.age); // 25

// Bracket Notation (for dynamic keys)
console.log(person['name']); // Gaurav

// Add new property
person.city = "Delhi";

// Modify property
person.age = 26;

// Delete property
delete person.city;

// ************************************************************************************************************

// ****************** 3️⃣ Iterating Over Objects ******************

// Using for...in loop
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Using Object.keys(), Object.values(), Object.entries()
console.log(Object.keys(person)); // ['name', 'age', 'greet']
console.log(Object.values(person)); // ['Gaurav', 26, f]
console.log(Object.entries(person)); // [['name', 'Gaurav'], ['age', 26], ['greet', ƒ]]

// ************************************************************************************************************

// ****************** 4️⃣ Nested Objects ******************

const employee = {
    name: "Simran",
    address: {
        city: "Mumbai",
        pincode: 400001
    }
};

console.log(employee.address.city); // Mumbai

// ************************************************************************************************************

// ****************** 5️⃣ Object Methods ******************

const calculator = {
    num: 10,
    add: function(a) {
        return this.num + a;
    }
};

console.log(calculator.add(5)); // 15

// ************************************************************************************************************

// ****************** 6️⃣ Important Features ******************

// Shorthand Property
const a = 10, b = 20;
const obj1 = { a, b };
console.log(obj1); // { a: 10, b: 20 }

// Computed Property Name
const keyName = "email";
const obj2 = {
    [keyName]: "gaurav@example.com"
};
console.log(obj2.email); // gaurav@example.com

// Object Destructuring
const { name, age } = person;
console.log(name); // Gaurav
console.log(age); // 26

// ************************************************************************************************************

// ****************** 7️⃣ Object Copy (Shallow Copy) ******************

const original = { x: 1, y: 2 };
const copy = { ...original };

copy.x = 100;
console.log(original.x); // 1 (original remains unchanged)

// ************************************************************************************************************

// ****************** Summary ******************

// ✅ Objects store key-value pairs where keys are strings or Symbols.
// ✅ Properties can be accessed using dot or bracket notation.
// ✅ Objects can have nested structures and methods.
// ✅ for...in loop and Object methods are used for iteration.
// ✅ Destructuring and spread operators make handling objects easy.

// ************************************************************************************************************
