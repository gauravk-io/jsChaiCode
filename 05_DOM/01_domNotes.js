// ****************** DOM (Document Object Model) in JavaScript ******************

// ****************** Explanation ******************

// The DOM is a **programming interface** for web documents. 
// It represents the structure of an HTML page as a **tree of nodes (elements)**.
// JavaScript can interact with the DOM to **read, modify, add, or delete elements and attributes** in real-time.

// In simple words, the DOM lets JavaScript **control the webpage** dynamically.


// ************************************************************************************************************

// ****************** 1️⃣ Accessing DOM Elements ******************

// JavaScript provides multiple methods to **select elements** from the DOM.

// ➡️ document.getElementById()

const heading = document.getElementById("main-heading");
console.log(heading);

// Explanation:
// - Returns a **single element** matching the given `id`.
// - If no match is found, returns `null`.


// ************************************************************************************************************

// ➡️ document.getElementsByClassName()

const boxes = document.getElementsByClassName("box");
console.log(boxes);

// Explanation:
// - Returns a **live HTMLCollection** (like an array) of all matching elements.
// - Live means if DOM changes, this collection updates automatically.


// ************************************************************************************************************

// ➡️ document.getElementsByTagName()

const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

// Explanation:
// - Returns a **live HTMLCollection** of all elements with the given tag name.


// ************************************************************************************************************

// ➡️ document.querySelector()

const firstBox = document.querySelector(".box");
console.log(firstBox);

// Explanation:
// - Returns the **first matching element** for the given CSS selector (class, id, tag, etc.).


// ************************************************************************************************************

// ➡️ document.querySelectorAll()

const allBoxes = document.querySelectorAll(".box");
console.log(allBoxes);

// Explanation:
// - Returns a **NodeList** of all matching elements.
// - NodeList is **not live** (it doesn’t auto-update if DOM changes).


// ************************************************************************************************************

// ****************** 2️⃣ Modifying Elements ******************

// ➡️ Changing Inner Text

const title = document.getElementById("main-heading");
title.innerText = "New Heading";

// Explanation:
// - Changes the **visible text content** of the element.


// ************************************************************************************************************

// ➡️ Changing HTML Content

title.innerHTML = "<em>New Emphasized Heading</em>";

// Explanation:
// - Changes the **HTML inside** the element.


// ************************************************************************************************************

// ➡️ Modifying Attributes

const link = document.querySelector("a");
link.href = "https://www.example.com";

// Explanation:
// - Directly updates any attribute, like `href`, `src`, `id`, etc.


// ************************************************************************************************************

// ➡️ Changing Styles

title.style.color = "red";
title.style.backgroundColor = "yellow";

// Explanation:
// - `style` allows **inline CSS styling** via JavaScript.


// ************************************************************************************************************

// ****************** 3️⃣ Creating and Appending Elements ******************

const newDiv = document.createElement("div");
newDiv.innerText = "I am a new div";
document.body.appendChild(newDiv);

// Explanation:
// - `createElement` creates an element.
// - `appendChild` adds it to the page (usually at the end).


// ************************************************************************************************************

// ➡️ Removing Elements

const oldDiv = document.querySelector(".old");
oldDiv.remove();

// Explanation:
// - `remove()` deletes the element from the DOM.


// ************************************************************************************************************

// ****************** 4️⃣ Event Handling ******************

const button = document.getElementById("clickBtn");
button.addEventListener("click", function() {
    alert("Button clicked!");
});

// Explanation:
// - `addEventListener()` attaches an event (like `click`) to an element.
// - You can add multiple events to the same element.


// ************************************************************************************************************

// ****************** 5️⃣ Traversing the DOM ******************

// ➡️ Parent Node

const box = document.querySelector(".box");
console.log(box.parentNode);

// ➡️ Child Nodes

console.log(box.childNodes); // Includes text, elements, comments, etc.

console.log(box.children); // Only element nodes (no text, no comments)


// ➡️ Siblings

console.log(box.nextElementSibling);
console.log(box.previousElementSibling);

// Explanation:
// - Parent, child, and sibling properties let you **navigate** the DOM tree.


// ************************************************************************************************************

// ****************** Summary ******************

// ✅ DOM Overview
// - DOM is the **interface** between HTML and JavaScript.
// - Allows reading, modifying, adding, or removing elements and attributes dynamically.

// ✅ Selecting Elements
// - `getElementById()` - Single element by id.
// - `getElementsByClassName()` - Collection of elements by class (live).
// - `querySelector()` - First element by CSS selector.
// - `querySelectorAll()` - NodeList of elements (not live).

// ✅ Modifying Elements
// - Use `innerText`, `innerHTML`, `setAttribute()`, `style` to change content or styling.

// ✅ Creating and Removing
// - `createElement()` and `appendChild()` to add.
// - `remove()` to delete.

// ✅ Events
// - `addEventListener()` to handle user interactions.

// ✅ DOM Traversal
// - Use `.parentNode`, `.children`, `.nextElementSibling`, etc., to navigate the DOM tree.

// ************************************************************************************************************
