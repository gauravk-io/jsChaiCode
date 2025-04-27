// ****************** Asynchronous JavaScript ******************

// ****************** Explanation ******************

// JavaScript is **single-threaded**, meaning it can only run **one task at a time**.
// But it supports **asynchronous programming** to handle **time-consuming tasks** (like fetching data) **without blocking the main thread**.
// Asynchronous code allows **non-blocking operations**, so other code can run while waiting for a task (like fetching data) to complete.

// Examples of asynchronous tasks:
// - Fetching data from a server
// - Reading files
// - Timers (`setTimeout`, `setInterval`)
// - DOM events (like clicks)

// ************************************************************************************************************

// ****************** 1️⃣ Callbacks ******************

// ➡️ A **function passed to another function** to be called **after a task completes**.

function fetchData(callback) {
    setTimeout(function() {
        console.log('Data fetched');
        callback();  // Call the callback when done
    }, 2000);
}

fetchData(function() {
    console.log('Callback executed');
});

// Explanation:
// - `fetchData()` simulates data fetch with `setTimeout`.
// - After 2 seconds, "Data fetched" is printed, then the callback runs.

// ❌ Callback Hell:
// - When callbacks are **nested deeply**, code becomes unreadable and hard to manage.

// ************************************************************************************************************

// ****************** 2️⃣ Promises ******************

// ➡️ A **Promise** represents a value that may be available now, later, or never.
// ➡️ Promises have **three states**: 
//    - `pending` (initial state)
//    - `fulfilled` (success)
//    - `rejected` (error)

function fetchDataPromise() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const success = true;  // Simulate success/failure
            if (success) {
                resolve('Data fetched successfully');
            } else {
                reject('Failed to fetch data');
            }
        }, 2000);
    });
}

// Usage
fetchDataPromise()
    .then(function(result) {
        console.log(result);  // Output: Data fetched successfully
    })
    .catch(function(error) {
        console.log(error);  // Output if failed
    });

// Explanation:
// - `resolve()` is called for success.
// - `reject()` is called for failure.
// - `then()` handles success, `catch()` handles errors.

// ************************************************************************************************************

// ****************** 3️⃣ async/await ******************

// ➡️ A cleaner way to write asynchronous code using Promises.
// ➡️ `async` marks a function asynchronous, so it **returns a promise**.
// ➡️ `await` pauses execution until the Promise resolves.

async function fetchDataAsync() {
    try {
        const result = await fetchDataPromise();
        console.log(result);  // Output: Data fetched successfully
    } catch (error) {
        console.log(error);  // Handle errors
    }
}

fetchDataAsync();

// Explanation:
// - `await` can only be used inside **async functions**.
// - It makes asynchronous code look **synchronous and easy to read**.

// ************************************************************************************************************

// ****************** 4️⃣ Real Example with Fetch API ******************

// ➡️ Fetching data from a public API using `fetch()` (returns a Promise).

async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();  // Convert response to JSON
        console.log(data);  // Output: Array of user objects
    } catch (error) {
        console.log('Error fetching data:', error);
    }
}

fetchUserData();

// Explanation:
// - `fetch()` returns a Promise.
// - `await` pauses until response is received.
// - `.json()` also returns a Promise, so `await` is needed again.

// ************************************************************************************************************

// ****************** Summary ******************

// ✅ Asynchronous JavaScript allows **non-blocking operations**.
// ✅ 3 Main Techniques:
//    - **Callbacks** (oldest, leads to callback hell)
//    - **Promises** (better, avoids callback hell with `.then()/.catch()`)
//    - **async/await** (modern, cleaner way to work with Promises)

// ✅ Best Practices:
//    - Use **async/await** for readability.
//    - Always **handle errors** (try-catch or `.catch()`).
//    - Prefer **Promises over callbacks** for better structure.
//    - Use tools like `Promise.all()` for parallel operations.

// ************************************************************************************************************
