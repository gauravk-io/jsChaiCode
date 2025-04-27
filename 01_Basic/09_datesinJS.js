// ********** 1️⃣ Date and Time in JavaScript **********
// JavaScript provides the `Date` object to handle date and time-related operations.

// ********** 2️⃣ Creating a Date Object **********
// The `Date` object can be created in multiple ways.

let currentDate = new Date();  // Creates a Date object with the current date and time
console.log(currentDate);      // Output: Current date and time

let specificDate = new Date("2023-12-25"); // Creates a Date object for a specific date (YYYY-MM-DD)
console.log(specificDate); // Output: Mon Dec 25 2023

let customDate = new Date(2023, 11, 25, 10, 30, 0); 
// (Year, Month (0-based), Day, Hour, Minute, Second)
console.log(customDate); // Output: Mon Dec 25 2023 10:30:00

// ********** 3️⃣ Getting Date and Time Components **********
let date = new Date();

console.log(date.getFullYear());  // Output: Current year (e.g., 2025)
console.log(date.getMonth());     // Output: Month (0 = January, 11 = December)
console.log(date.getDate());      // Output: Day of the month (1-31)
console.log(date.getDay());       // Output: Day of the week (0 = Sunday, 6 = Saturday)
console.log(date.getHours());     // Output: Hours (0-23)
console.log(date.getMinutes());   // Output: Minutes (0-59)
console.log(date.getSeconds());   // Output: Seconds (0-59)
console.log(date.getMilliseconds()); // Output: Milliseconds (0-999)

// ********** 4️⃣ Setting Date and Time Components **********
date.setFullYear(2024);
date.setMonth(5);  // June (0-based index)
date.setDate(15);  // 15th day of the month
console.log(date); // Updated date

date.setHours(14);
date.setMinutes(45);
date.setSeconds(30);
console.log(date); // Updated time

// ********** 5️⃣ Converting Date to Strings **********
let now = new Date();

console.log(now.toDateString());   // Output: "Tue Feb 27 2025"
console.log(now.toTimeString());   // Output: "14:30:15 GMT+0000 (Coordinated Universal Time)"
console.log(now.toLocaleString()); // Output: Local format (e.g., "2/27/2025, 2:30:15 PM")
console.log(now.toLocaleDateString()); // Output: Local date format (e.g., "2/27/2025")
console.log(now.toLocaleTimeString()); // Output: Local time format (e.g., "2:30:15 PM")

// ********** 6️⃣ Working with Timestamps **********
let timestamp = Date.now(); // Returns the current timestamp (milliseconds since Jan 1, 1970)
console.log(timestamp);

let pastDate = new Date(1700000000000); // Convert timestamp to date
console.log(pastDate);

// ********** 7️⃣ Date Calculations **********
let date1 = new Date("2025-01-01");
let date2 = new Date("2025-02-01");

let difference = date2 - date1; // Difference in milliseconds
console.log(difference / (1000 * 60 * 60 * 24)); // Convert to days

// ********** 8️⃣ Summary **********
// - `Date` object handles date and time operations.
// - We can get and set specific date/time components using `get` and `set` methods.
// - `toLocaleString()` formats the date/time based on locale settings.
// - `Date.now()` provides the current timestamp in milliseconds.
// - Date differences can be calculated by subtracting two dates.







// *****************   01_BASIC ENDS HERE   *********************