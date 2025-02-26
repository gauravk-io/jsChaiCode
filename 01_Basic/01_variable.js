
const accountId = 17361; // cannot change like your birth date—once set, it’s forever!

let accountEmail = "gaurav@gmail.com"; // Can be changed.

var accountPassword = "29328"; // var should be avoided because it has function scope (not block scope), can be redeclared, and leads to unexpected bugs due to hoisting. Instead, use let or const for safer, predictable behavior.

accountCity = "Jharkhand"; // Declared without let/var/const—JavaScript allows it, but it's like leaving your house door open! (not a good practice)

let accountState; // Undefined for now, like an empty coffee cup waiting to be filled!

// accountId = "Jaipur"; // ❌ A const variable in JavaScript cannot be redeclared because it is designed to hold a constant reference in memory, preventing accidental changes and ensuring data integrity.

accountEmail = "xyz@gmail.com"; //value changed
accountPassword = "212121212"; // value changed
accountCity = "Delhi"; // value changed

console.log(accountId);
//  console.log() is used to print messages

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
//console.table() is used to display array or object data in a structured table format, making it easier to read and analyze in the console.








