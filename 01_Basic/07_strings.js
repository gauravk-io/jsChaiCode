// ****************** Strings in JavaScript ******************

// A string is a sequence of characters enclosed in quotes. JavaScript provides multiple ways to create and manipulate strings.

// ********** 1️⃣ Declaring Strings **********

// Strings can be declared using single quotes, double quotes, or template literals.

let str1 = 'Hello, World!';   // Single quotes
let str2 = "Hello, JavaScript!";  // Double quotes
let str3 = `Hello, ${str1}`;  // Template literals (supports interpolation)

console.log(str1); // Output: Hello, World!
console.log(str2); // Output: Hello, JavaScript!
console.log(str3); // Output: Hello, Hello, World!


//********************************************************************************************

// Declaring a string using a string literal (recommended)
let str4 = "Hello"; 

// Declaring a string using the String object (not recommended)
let str5 = new String("Hello"); 

console.log(typeof str4); // Output: string
console.log(typeof str5); // Output: object

// Comparing string literal vs. String object
console.log(str4 === str5); // Output: false (different types)

// Object-wrapped strings can cause unexpected behavior
console.log(str4 == str5); // Output: true (due to type coercion)

//**********************************************************************************************




// ********** 2️⃣ String Properties and Methods **********

// Strings have properties like `length` and various methods for manipulation.

let text = "JavaScript";

console.log(text.length);   // Output: 10 (Total number of characters)
console.log(text.toUpperCase()); // Output: JAVASCRIPT (Converts to uppercase)
console.log(text.toLowerCase()); // Output: javascript (Converts to lowercase)
console.log(text.charAt(2)); // Output: v (Character at index 2)
console.log(text.indexOf('S')); // Output: 4 (Index of the first occurrence)
console.log(text.includes('Script')); // Output: true (Checks if substring exists)


// ********** 3️⃣ String Concatenation **********

// Strings can be combined using `+` or `concat()`.

let firstName = "Gaurav";
let lastName = "Kumar";

let fullName1 = firstName + " " + lastName; // Using +
let fullName2 = firstName.concat(" ", lastName); // Using concat()

console.log(fullName1); // Output: Gaurav Kumar
console.log(fullName2); // Output: Gaurav Kumar

// ********** 4️⃣ Template Literals (String Interpolation) **********

// Template literals allow embedding variables and expressions inside strings.

let age = 25;
let greeting = `Hello, my name is ${firstName} and I am ${age} years old.`;

console.log(greeting); 
// Output: Hello, my name is Gaurav and I am 25 years old.

// ********** 5️⃣ String Slicing and Substrings **********

// Extracting parts of a string using `slice()`, `substring()`, and `substr()`.

let sentence = "JavaScript is awesome!";

console.log(sentence.slice(0, 10)); // Output: JavaScript (Extracts from index 0 to 9)
console.log(sentence.substring(4, 10)); // Output: Script (Similar to slice but doesn’t accept negative indexes)
console.log(sentence.substr(4, 6)); // Output: Script (Starts at index 4, extracts 6 characters)

// ********** 6️⃣ Splitting and Joining Strings **********

// Splitting a string into an array and joining it back into a string.

let words = sentence.split(" "); // Splits the string at spaces
console.log(words); 
// Output: ['JavaScript', 'is', 'awesome!']

let joinedSentence = words.join("-"); // Joins array elements with "-"
console.log(joinedSentence); 
// Output: JavaScript-is-awesome!

// ********** 7️⃣ Trimming and Replacing Strings **********

let messyString = "   Hello World!   ";

console.log(messyString.trim()); // Output: "Hello World!" (Removes spaces from start and end)
console.log(sentence.replace("awesome", "powerful")); // Output: JavaScript is powerful!

// ********** 8️⃣ Escape Characters in Strings **********

// Certain characters need to be escaped using a backslash (\).

let escapedString = 'It\'s a great day!'; // Single quote inside single quotes
console.log(escapedString); // Output: It's a great day!

let multilineString = "Hello\nWorld!"; // \n creates a new line
console.log(multilineString); 
// Output:
// Hello
// World!

// ********** 9️⃣ Checking String Mutability **********

// Strings are **immutable**, meaning any operation creates a new string instead of modifying the original.

let original = "Hello";
let modified = original.toUpperCase();

console.log(original); // Output: Hello (Unchanged)
console.log(modified); // Output: HELLO (New string created)

// ********** 🔟 Summary **********

// - Strings can be declared using '', "", or ``.
// - Use `length`, `toUpperCase()`, `toLowerCase()`, `charAt()`, and `indexOf()` for basic operations.
// - Concatenation is done using `+` or `concat()`.
// - Use template literals for cleaner string interpolation.
// - `slice()`, `substring()`, and `substr()` extract parts of a string.
// - `split()` turns a string into an array, and `join()` converts it back.
// - Strings are **immutable**, meaning modifications create a new string.
