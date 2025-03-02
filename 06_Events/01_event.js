// ****************** Events in JavaScript ******************

// ****************** Explanation ******************

// Events are **actions or occurrences** that happen in the browser, like a **click, scroll, or key press**.
// JavaScript can **listen to events** and **run code** when they occur, enabling **interactive web pages**.

// Examples of common events:
// - `click`: When user clicks an element.
// - `mouseover`: When mouse moves over an element.
// - `keydown`: When a key is pressed.
// - `submit`: When a form is submitted.


// ************************************************************************************************************

// ****************** 1️⃣ Adding Event Listeners ******************

// ➡️ Use `addEventListener()` method to attach a listener to an element.
// ➡️ Syntax: element.addEventListener(eventType, callbackFunction)

const button = document.querySelector('button');

button.addEventListener('click', function() {
    console.log('Button clicked!');
});

// Explanation:
// - `addEventListener()` takes 2 arguments: **event name** and **callback function**.
// - The callback is called when the event happens.


// ************************************************************************************************************

// ****************** 2️⃣ Event Object ******************

// ➡️ When an event occurs, JavaScript **passes an event object** to the handler.
// ➡️ This object contains **details about the event**, like mouse position, key pressed, etc.

button.addEventListener('click', function(event) {
    console.log(event);  // Logs complete event object
    console.log(event.type);  // "click"
    console.log(event.target);  // The button itself
});

// Explanation:
// - The event object is **automatically passed** to the callback.
// - It contains **information** like `type`, `target`, `timeStamp`, etc.


// ************************************************************************************************************

// ****************** 3️⃣ Common Events ******************

// ➡️ Click Event
button.addEventListener('click', function() {
    console.log('Button clicked!');
});

// ➡️ Mouseover Event
button.addEventListener('mouseover', function() {
    console.log('Mouse over button!');
});

// ➡️ Keydown Event
document.addEventListener('keydown', function(event) {
    console.log(`Key pressed: ${event.key}`);
});

// ➡️ Form Submit Event
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Stops page reload
    console.log('Form submitted!');
});

// Explanation:
// - Use `event.preventDefault()` to **prevent default behavior** (like form submission).


// ************************************************************************************************************

// ****************** 4️⃣ Removing Event Listeners ******************

// ➡️ Use `removeEventListener()` to remove an event handler.
// ➡️ The **exact same function reference** is required.

function handleClick() {
    console.log('Button clicked!');
}
button.addEventListener('click', handleClick);

// Later
button.removeEventListener('click', handleClick);  // Removes listener

// Explanation:
// - Anonymous functions **cannot be removed** because they don’t have a reference.


// ************************************************************************************************************

// ****************** 5️⃣ Inline Event Handling (Not Recommended) ******************

// ➡️ Events can be added **directly in HTML** (inline), but this is outdated.

{/* <button onclick="alert('Button clicked')">Click Me</button> */}

// Explanation:
// - Inline events are harder to manage and not recommended in modern JavaScript.


// ************************************************************************************************************

// ****************** Summary ******************

// ✅ Events allow you to **respond to user interactions** (clicks, keys, forms, etc.).
// ✅ Use `addEventListener()` for attaching handlers.
// ✅ Use `removeEventListener()` to detach handlers (if needed).
// ✅ The **event object** provides useful information like `type`, `target`, `key`, etc.
// ✅ Common events: `click`, `mouseover`, `keydown`, `submit`, `scroll`, `change`, etc.
// ✅ Avoid inline event handlers; prefer **modern event listeners** for clean code.

// ************************************************************************************************************
