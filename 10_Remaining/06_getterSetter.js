// ****************** Getter, Setter and Stack Overflow in JavaScript ******************

// ****************** Explanation ******************

// - **Getter**: Special method to access (read) a property value.
// - **Setter**: Special method to set (modify) a property value.
// - **Stack Overflow**: Happens when too many function calls are made without stopping (like infinite recursion).

// ************************************************************************************************************

// ****************** 1️⃣ Getter and Setter Basics ******************

const student = {
    firstName: "Gaurav",
    lastName: "Sharma",

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(name) {
        const parts = name.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

console.log(student.fullName); 
// Output: Gaurav Sharma

student.fullName = "Raj Verma";
console.log(student.firstName); 
// Output: Raj
console.log(student.lastName);  
// Output: Verma

// Explanation:
// - `get` keyword makes a method behave like a property.
// - `set` keyword allows setting multiple properties with one value.

// ************************************************************************************************************

// ****************** 2️⃣ Why Use Getters and Setters? ******************

// ✅ Encapsulation → Control how properties are accessed or modified.
// ✅ Validation → You can add checks before setting a property.
// ✅ Computed Properties → Like combining firstName and lastName into fullName.

// ************************************************************************************************************

// ****************** 3️⃣ Example with Validation ******************

const product = {
    price: 100,

    get discountedPrice() {
        return this.price * 0.9;
    },

    set discountedPrice(value) {
        if (value > 0) {
            this.price = value / 0.9;
        } else {
            console.log("Invalid price!");
        }
    }
};

console.log(product.discountedPrice); 
// Output: 90

product.discountedPrice = 180;
console.log(product.price); 
// Output: 200

// ************************************************************************************************************

// ****************** 4️⃣ Stack Overflow Error ******************

// Stack Overflow occurs when a function keeps calling itself infinitely.

function recurse() {
    recurse();
}

recurse(); 
// ❌ Maximum call stack size exceeded (Stack Overflow)

// Explanation:
// - The call stack keeps adding `recurse()` without end.
// - JavaScript limits the call stack size → When exceeded, it throws an error.

// ************************************************************************************************************

// ****************** 5️⃣ How to Avoid Stack Overflow? ******************

// ✅ Always use a **base case** in recursion.
// Example:

function safeRecurse(n) {
    if (n <= 0) return;
    console.log(n);
    safeRecurse(n - 1);
}

safeRecurse(5);
// Output: 5 4 3 2 1

// ************************************************************************************************************

// ****************** Summary ******************

// ✅ **Getter** allows reading object properties like accessing variables.
// ✅ **Setter** allows controlled updating of properties with validation if needed.
// ✅ **Stack Overflow** happens when there is **uncontrolled recursion**.
// ✅ Always write **base conditions** in recursive functions to avoid infinite calls.

// ************************************************************************************************************
