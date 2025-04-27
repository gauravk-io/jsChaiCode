// ****************** Editing and Removing Elements in the DOM ******************

// ****************** Explanation ******************

// In JavaScript, the DOM (Document Object Model) allows us to **modify existing elements** and **remove elements** from the page dynamically.
// We can update **text, attributes, styles**, and completely delete elements using simple DOM methods.

// Editing usually involves changing:
// - **Text content** (innerText, textContent)
// - **HTML content** (innerHTML)
// - **Attributes** (setAttribute, removeAttribute)
// - **CSS styles** (style property)

// Removing involves:
// - Selecting the element to remove.
// - Calling **remove()** or **removeChild()**.


// ************************************************************************************************************

// ****************** 1️⃣ Editing Text and HTML ******************

// Example - Changing the text inside a paragraph.

let para = document.getElementById('myPara');

// Change text content
para.innerText = 'Updated Text';

// Change HTML content (including tags)
para.innerHTML = '<strong>Updated Text with Bold</strong>';

// Explanation:
// - `innerText` → Only plain text, no HTML parsing.
// - `innerHTML` → Parses HTML tags and updates the element.

// ************************************************************************************************************

// ****************** 2️⃣ Editing Attributes ******************

// Example - Adding and removing attributes.

let image = document.getElementById('myImage');

// Set a new src attribute
image.setAttribute('src', 'new-image.jpg');

// Remove an attribute
image.removeAttribute('alt');

// Explanation:
// - `setAttribute()` adds/updates any attribute (src, href, class, id, etc.).
// - `removeAttribute()` removes an attribute.


// ************************************************************************************************************

// ****************** 3️⃣ Editing Styles ******************

// Example - Adding inline styles.

let box = document.getElementById('myBox');

// Directly set styles
box.style.backgroundColor = 'lightblue';
box.style.border = '2px solid black';

// Explanation:
// - `element.style` allows setting **inline styles**.
// - Prefer using CSS classes for maintainability.


// ************************************************************************************************************

// ****************** 4️⃣ Removing Elements ******************

// Example - Remove an element directly.

let item = document.getElementById('removeMe');

// Remove the element
item.remove();

// Explanation:
// - `remove()` directly deletes the element from the DOM.


// ****************** Remove using parent element ******************

let parent = document.getElementById('parentDiv');
let child = document.getElementById('childDiv');

// Remove child element
parent.removeChild(child);

// Explanation:
// - `removeChild()` removes an element, but requires its **parent element**.
// - Useful if you are looping through children.


// ************************************************************************************************************

// ****************** Summary ******************

// ✅ **Editing Elements:**
// - Change text with `innerText`, `textContent`.
// - Change HTML with `innerHTML`.
// - Edit attributes with `setAttribute()`, `removeAttribute()`.
// - Change styles with `element.style`.


// ✅ **Removing Elements:**
// - Direct removal with `element.remove()`.
// - Parent-based removal with `parent.removeChild()`.


// ✅ Best Practices:
// - Use `innerText` when only text is needed (faster, safer).
// - Use `innerHTML` carefully to avoid **XSS vulnerabilities**.
// - Prefer **CSS classes** over `element.style` for better separation of concerns.

// ************************************************************************************************************
