// ****************** Fetch API ******************

// ****************** Explanation ******************

// The **Fetch API** is used to make **HTTP requests** in JavaScript.
// It replaces the older `XMLHttpRequest` and provides a **modern, promise-based interface** to:
// - Fetch data from a server (GET request).
// - Send data to a server (POST request).
// - Handle JSON, text, or other response types.

// Basic Syntax:
// fetch(url, { options })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

// ************************************************************************************************************

// ****************** 1️⃣ Simple GET Request ******************

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())  // Convert response to JSON
    .then(data => console.log(data))    // Handle the data
    .catch(error => console.error('Error:', error));  // Handle errors

// Explanation:
// - `fetch()` returns a **promise** that resolves with a **Response object**.
// - `response.json()` converts the response body to JSON (another promise).
// - `catch()` handles network errors (like no internet).

// ************************************************************************************************************

// ****************** 2️⃣ Sending Data with POST Request ******************

let newPost = {
    title: 'My New Post',
    body: 'This is the content of my new post.',
    userId: 1
};

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',                     // HTTP Method
    headers: {                          // Headers (Content-Type is important)
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPost)      // Data to send (must be stringified)
})
.then(response => response.json())
.then(data => console.log('Created Post:', data))
.catch(error => console.error('Error:', error));

// Explanation:
// - `method: 'POST'` specifies the request type.
// - `headers` define the type of content (JSON).
// - `body` contains the data being sent (as a JSON string).

// ************************************************************************************************************

// ****************** 3️⃣ Handling Response Status ******************

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        if (!response.ok) {                     // Check response status (404, 500, etc.)
            throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json();
    })
    .then(data => console.log('Post:', data))
    .catch(error => console.error('Error:', error));

// Explanation:
// - `response.ok` is `true` if status is 200-299 (successful).
// - Always check `response.ok` to handle errors properly.

// ************************************************************************************************************

// ****************** 4️⃣ Using Fetch with Async/Await ******************

async function fetchPost() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        let data = await response.json();  // Convert to JSON
        console.log('Post Data:', data);   // Handle the data
    } catch (error) {
        console.error('Error:', error);    // Handle errors
    }
}

fetchPost();

// Explanation:
// - `async/await` makes asynchronous code look synchronous.
// - Always wrap `fetch()` in `try-catch` for error handling.
// - `await` pauses until the promise resolves.

// ************************************************************************************************************

// ****************** Summary ******************

// ✅ Fetch API provides a **promise-based** way to make HTTP requests.
// ✅ Use `fetch()` for:
//    - GET (fetch data)
//    - POST (send data)
//    - PUT (update data)
//    - DELETE (remove data)
// ✅ Always check `response.ok` for errors.
// ✅ Use `then/catch` or `async/await` for handling responses.

// ✅ Best Practices:
// - Always handle network errors with `catch()`.
// - Use `try-catch` with `async/await` for cleaner error handling.
// - Set proper headers when sending data (e.g., `Content-Type` for JSON).

// ************************************************************************************************************
