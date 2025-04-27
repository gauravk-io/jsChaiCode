// ****************** High Order Array Loops in JavaScript ******************

// ****************** Explanation ******************

// High Order Array Loops are **methods built into arrays** that allow you to iterate over arrays 
// and perform operations like transforming data, filtering, or accumulating values.
// These methods are preferred over `for` loops for cleaner and more functional code.

// These methods take **callback functions** (functions passed as arguments), making them **higher-order functions**.


// ************************************************************************************************************

// ****************** 1️⃣ forEach() ******************

// ➡️ Executes a **callback function once for each element** in the array.
// ➡️ Does not return anything (undefined). Used for **side effects** like logging, updating UI, etc.

const numbers = [1, 2, 3, 4];

numbers.forEach(function(number, index) {
    console.log(`Index ${index}: Value ${number}`);
});

// Explanation:
// - Callback takes up to 3 arguments: **value, index, array**.
// - Use when you need to **iterate**, not transform or return data.


// ************************************************************************************************************

// ****************** 2️⃣ map() ******************

// ➡️ Used to **transform each element** into something else.
// ➡️ Creates a **new array** by applying a **transformation function** to each element.

const squaredNumbers = numbers.map(function(number) {
    return number * number;
});
console.log(squaredNumbers); // [1, 4, 9, 16]

// Explanation:
// - `map()` returns a **new array** of the same length.
// - Use `map()` when you want to **transform each item**.


// ************************************************************************************************************

// ****************** 3️⃣ filter() ******************

// ➡️ Used to **filter elements** based on a condition (true/false check).
// ➡️ Creates a **new array** with **only elements that pass the condition**.

const evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});
console.log(evenNumbers); // [2, 4]

// Explanation:
// - `filter()` returns a **new array** with only **matching items**.
// - Use `filter()` when you want to **remove items that don't meet criteria**.


// ************************************************************************************************************

// ****************** 4️⃣ reduce() ******************

// ➡️ Used to **reduce the array to a single value** (like sum, average, max, etc.).
// ➡️ Returns that **single value**.

const sum = numbers.reduce(function(accumulator, current) {
    return accumulator + current;
}, 0);
console.log(sum); // 10

// Explanation:
// - `reduce()` takes a **callback with accumulator & current item**.
// - Use for **cumulative calculations**, like totals, averages, etc.


// ************************************************************************************************************

// ****************** Combined Example - filter(), map(), reduce() ******************

// ➡️ Find square of even numbers and sum them up.

const evenSquareSum = numbers
    .filter(function(number) {
        return number % 2 === 0;  // Only even numbers
    })
    .map(function(number) {
        return number * number;  // Square each even number
    })
    .reduce(function(accumulator, current) {
        return accumulator + current;  // Sum up squares
    }, 0);
console.log(evenSquareSum); // Output: 56 (2^2 + 4^2 + 6^2)

// Explanation:
// - `filter()` keeps even numbers.
// - `map()` squares each even number.
// - `reduce()` adds up all squares.


// ************************************************************************************************************

// ****************** 5️⃣ some() ******************

// ➡️ Returns **true** if **at least one element** passes the test.

const hasNegative = numbers.some(function(number) {
    return number < 0;
});
console.log(hasNegative); // false

// Explanation:
// - Returns **true/false**.
// - Stops once it finds **one matching item**.


// ************************************************************************************************************

// ****************** 6️⃣ every() ******************

// ➡️ Returns **true** if **every element** passes the test.

const allPositive = numbers.every(function(number) {
    return number > 0;
});
console.log(allPositive); // true

// Explanation:
// - Returns **true/false**.
// - Stops if **any item fails the condition**.


// ************************************************************************************************************

// ****************** 7️⃣ find() ******************

// ➡️ Returns the **first element** that matches the condition.

const firstEven = numbers.find(function(number) {
    return number % 2 === 0;
});
console.log(firstEven); // 2

// Explanation:
// - Returns **first matching element**, or `undefined` if none match.


// ************************************************************************************************************

// ****************** 8️⃣ findIndex() ******************

// ➡️ Returns the **index** of the first matching element.

const indexEven = numbers.findIndex(function(number) {
    return number % 2 === 0;
});
console.log(indexEven); // 1 (index of 2)

// Explanation:
// - Returns **-1** if no match found.


// ************************************************************************************************************

// ****************** Summary ******************

// ✅ High Order Array Methods Overview:
// - `forEach()`: Loops for **side effects** (logging, modifying UI).
// - `map()`: Creates a **new transformed array**.
// - `filter()`: Creates a **filtered array**.
// - `reduce()`: **Reduces array to a single value** (sum, product).
// - `some()`: Checks if **at least one item matches condition**.
// - `every()`: Checks if **all items match condition**.
// - `find()`: Finds **first matching item**.
// - `findIndex()`: Finds **index of first matching item**.

// ✅ Best Practices:
// - Use **forEach()** for side effects.
// - Use **map()** for **data transformation**.
// - Use **filter()** to **remove unwanted items**.
// - Use **reduce()** for **aggregation tasks**.
// - Use **find()** when looking for **a single specific element**.

// ************************************************************************************************************
