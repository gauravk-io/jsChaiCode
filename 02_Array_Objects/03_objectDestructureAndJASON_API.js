// ****************** Object Destructuring & JSON API ******************

// Object destructuring allows you to **unpack values from objects into distinct variables** in a concise way.
// JSON (JavaScript Object Notation) is a **lightweight data format** commonly used for **API communication**, storing, and transferring structured data.

// ****************** 1️⃣ Object Destructuring ******************

// Destructuring simplifies extracting properties from objects directly into variables.

const user = {
    name: "Gaurav",
    age: 25,
    country: "India"
};

// Traditional way (without destructuring)
const nameOld = user.name;
const ageOld = user.age;

// With destructuring
const { name, age, country } = user;

console.log(name);     // Output: Gaurav
console.log(age);      // Output: 25
console.log(country);  // Output: India

// Explanation:
// - Destructuring extracts properties directly into variables with **matching names**.
// - It’s shorter, cleaner, and reduces redundancy.

// ****************** 2️⃣ Destructuring with Default Values ******************

const student = {
    name: "Amit",
    marks: 85
};

const { name: studentName, marks, city = "Unknown" } = student;

console.log(studentName);  // Output: Amit
console.log(marks);        // Output: 85
console.log(city);         // Output: Unknown (default applied)

// Explanation:
// - You can rename variables while destructuring (`name: studentName`).
// - Default values can be provided if a property is missing (`city = "Unknown"`).

// ****************** 3️⃣ Nested Object Destructuring ******************

const employee = {
    empName: "Raj",
    position: "Developer",
    address: {
        city: "Mumbai",
        pin: 400001
    }
};

const { empName, address: { city1, pin } } = employee;

console.log(empName);  // Output: Raj
console.log(city1);     // Output: Mumbai
console.log(pin);      // Output: 400001

// Explanation:
// - Nested properties can be directly unpacked using nested destructuring.
// - `address` is skipped; only `city` and `pin` are extracted.

// ****************** 4️⃣ Destructuring in Function Parameters ******************

const product = {
    productName: "Laptop",
    price: 60000
};

function printProduct({ productName, price }) {
    console.log(`Product: ${productName}, Price: ${price}`);
}

printProduct(product);  // Output: Product: Laptop, Price: 60000

// Explanation:
// - Function parameters can directly destructure incoming object arguments.
// - This is useful in functions working with structured data.

// ****************** 5️⃣ JSON (JavaScript Object Notation) ******************

// JSON is a **data format** that looks like JavaScript objects but follows stricter rules:
// 1. Keys must be **strings** (in double quotes).
// 2. Values must be **string, number, boolean, null, array, or object** (no functions).

// Example JSON object (notice double quotes)
const jsonData = `{
    "name": "Ravi",
    "age": 28,
    "skills": ["JavaScript", "Node.js", "React"]
}`;

// Explanation:
// - JSON is used for **data transfer** between servers and clients (APIs).
// - It is **language-independent** — almost all languages can parse JSON.

// ****************** 6️⃣ Parsing JSON String to JavaScript Object ******************

const parsedData = JSON.parse(jsonData);

console.log(parsedData.name);   // Output: Ravi
console.log(parsedData.skills); // Output: [ 'JavaScript', 'Node.js', 'React' ]

// Explanation:
// - `JSON.parse()` converts JSON string into a **JavaScript object**.
// - This is required when fetching data from APIs (response comes as JSON string).

// ****************** 7️⃣ Converting JavaScript Object to JSON String ******************

const userObj = {
    username: "Gaurav",
    isActive: true
};

const jsonString = JSON.stringify(userObj);

console.log(jsonString);  // Output: {"username":"Gaurav","isActive":true}

// Explanation:
// - `JSON.stringify()` converts a JavaScript object into a **JSON string**.
// - This is required when sending data to a server (request body in JSON format).

// ****************** 8️⃣ Example - Fetch Data from JSON Placeholder API ******************

// Sample GET Request to fetch user data (simulated example)

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(user => {
        const { name, email, address: { city } } = user;
        console.log(`Name: ${name}, Email: ${email}, City: ${city}`);
    })
    .catch(err => console.error("Error fetching data:", err));

// Explanation:
// - `fetch()` retrieves data from the given URL.
// - `.json()` parses response into a **JavaScript object**.
// - Destructuring extracts nested data (name, email, city).
// - This is a **common pattern in API handling**.

// ****************** 9️⃣ Summary ******************

// - **Object Destructuring** simplifies extracting values into variables.
// - Supports **default values**, **renaming variables**, and **nested destructuring**.
// - Destructuring is also useful in **function parameters** when working with objects.
// - **JSON (JavaScript Object Notation)** is a common format for structured data exchange.
// - JSON has stricter rules than regular objects (double quotes, no functions).
// - Use `JSON.parse()` to convert JSON string to object.
// - Use `JSON.stringify()` to convert object to JSON string.
// - Fetching data from APIs often involves parsing JSON and using destructuring to access properties.

