// ****************** Creating a New Element in the DOM ******************

// ****************** Explanation ******************

// JavaScript allows us to dynamically **create new HTML elements** and add them to the page.
// This is useful when you want to add new content after the page has already loaded, like:
// - Adding new items to a list
// - Creating new cards in a gallery
// - Dynamically loading user-generated content

// Key methods:
// - `document.createElement()` → Creates a new empty element (not added to DOM yet).
// - `appendChild()` → Adds the element to a parent.
// - `insertBefore()` → Inserts the element at a specific position.


// ************************************************************************************************************

// ****************** 1️⃣ Basic Element Creation ******************

let newDiv = document.createElement('div');

// Set content, attributes, and styles
newDiv.innerText = 'This is a new div';
newDiv.className = 'new-box';
newDiv.style.backgroundColor = 'lightgray';

// Add to the page (append to body or any other container)
document.body.appendChild(newDiv);

// Explanation:
// - `createElement()` makes an element (but it's not visible until added).
// - `appendChild()` adds it to the end of the chosen parent.


// ************************************************************************************************************

// ****************** 2️⃣ Adding Attributes and Classes ******************

let newButton = document.createElement('button');

// Set text
newButton.innerText = 'Click Me';

// Add attributes
newButton.setAttribute('id', 'newButton');
newButton.classList.add('btn', 'btn-primary');

// Append to a specific element
document.getElementById('container').appendChild(newButton);

// Explanation:
// - You can set `id`, `class`, and other attributes using `setAttribute()` or `classList` methods.


// ************************************************************************************************************

// ****************** 3️⃣ Adding HTML inside the Element ******************

let newCard = document.createElement('div');
newCard.className = 'card';

// Adding inner HTML (use with caution)
newCard.innerHTML = `
    <h3>Card Title</h3>
    <p>This is some card content.</p>
`;

// Append to parent
document.getElementById('cardContainer').appendChild(newCard);

// Explanation:
// - `innerHTML` allows setting **HTML content** directly.
// - Be careful if content comes from user input (security risk).


// ************************************************************************************************************

// ****************** 4️⃣ Inserting at Specific Position ******************

let list = document.getElementById('myList');
let newItem = document.createElement('li');
newItem.innerText = 'New List Item';

// Insert new item at the top of the list
list.insertBefore(newItem, list.firstChild);

// Explanation:
// - `insertBefore()` inserts the new element before the specified child.
// - Useful for inserting at the **beginning** of a list.


// ************************************************************************************************************

// ****************** Summary ******************

// ✅ Create an element with `document.createElement()`.
// ✅ Set content with `innerText` or `innerHTML`.
// ✅ Set attributes with `setAttribute()` or `classList.add()`.
// ✅ Add to the page with `appendChild()` or `insertBefore()`.
// ✅ Use `insertBefore()` for precise positioning.

// ✅ Best Practices:
// - Prefer `classList` for adding/removing classes (cleaner).
// - Avoid using `innerHTML` if user-generated content is involved (XSS risk).
// - Use `createDocumentFragment()` for bulk adding elements (better performance).

// ************************************************************************************************************
