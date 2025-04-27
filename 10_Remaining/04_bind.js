// ****************** bind() in JavaScript ******************

// ****************** Explanation ******************

// `bind()` is a method that creates a **new function** with a given `this` value and optional arguments pre-set.
// - Unlike `call()` and `apply()`, `bind()` does NOT execute the function immediately.
// - It returns a **new copy of the function** which you can call later.

// ************************************************************************************************************

// ****************** 1️⃣ Basic Usage of bind() ******************

const person = {
    name: "Gaurav",
    greet: function() {
        console.log(`Hello, ${this.name}`);
    }
};

const greetFunc = person.greet.bind(person);
greetFunc(); 
// Output: Hello, Gaurav

// Explanation:
// - `bind()` permanently binds `this` inside `greetFunc` to `person`.
// - You can call `greetFunc()` anytime and it will remember `this`.

// ************************************************************************************************************

// ****************** 2️⃣ bind() with Arguments ******************

function multiply(a, b) {
    return a * b;
}

const multiplyByTwo = multiply.bind(null, 2);

console.log(multiplyByTwo(5)); 
// Output: 10

// Explanation:
// - First argument `null` sets no `this` context (not important here).
// - Second argument `2` is pre-set, so function expects only one more argument when called.

// ************************************************************************************************************

// ****************** 3️⃣ bind() for Delayed Function Execution ******************

const button = document.querySelector("button");

const user = {
    name: "Raj",
    showName: function() {
        console.log(this.name);
    }
};

// Without bind
button.addEventListener('click', user.showName); // undefined

// With bind
button.addEventListener('click', user.showName.bind(user)); // Raj

// Explanation:
// - Without `bind()`, `this` inside `showName` will point to the button (event target).
// - With `bind(user)`, we ensure `this` always points to `user` object.

// ************************************************************************************************************

// ****************** 4️⃣ Real-life Example ******************

const car = {
    brand: "BMW",
    getBrand: function() {
        console.log(this.brand);
    }
};

const bike = {
    brand: "Ducati"
};

const bikeBrand = car.getBrand.bind(bike);
bikeBrand(); 
// Output: Ducati

// Explanation:
// - `bikeBrand` is a new function where `this` refers to `bike` object.

// ************************************************************************************************************

// ****************** 5️⃣ Difference: call(), apply(), bind() ******************

// call() → Immediately calls the function with provided `this` and arguments individually.
// apply() → Immediately calls the function with provided `this` and arguments as an array.
// bind() → Returns a new function with provided `this` and optional preset arguments (needs manual call).

// ************************************************************************************************************

// ****************** Summary ******************

// ✅ `bind()` returns a new function with bound `this` value.
// ✅ Does NOT invoke the function immediately.
// ✅ Useful when passing object methods as callbacks (like in event listeners).
// ✅ Can preset arguments when binding.

// ************************************************************************************************************
