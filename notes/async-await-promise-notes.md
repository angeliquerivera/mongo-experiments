# Promises and async/await

## What is a `Promise`?

- Promises are objects that represent the eventual completion or failure of an asynchronous operation and its resulting value. It is a proxy for a value that is not necessarily known when the promise is created. This is useful because promises return values to asynchronous methods that promise to supply the final value at some point in the future (acts as a placeholder).

### What are the states of a promise?

- 1st state: Pending (intial state)
  - indicates that promise has not been fulfilled nor rejected
  - a pending promise can be fulfilled with a value or rejected with a reason (aka an error)
- 2nd state: Fulfilled
  - indicates operation was successful
- 3rd state: Rejected
  - indicates operation failed

## `async` keyword

- An asynchronous function is a function that knows how to expect the possibility of the `await` keyword being used to invoke asychronous code.
- Asynchronous code is code that you run that needs time to eventually return a value. Synchronous code can be evaluated immediately and return a value.

## Examples of asynchronous code

- Database operations
- APIs
-
