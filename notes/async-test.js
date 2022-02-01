/**
 * Standard non-async stuff
 */

function hello() {
  return "Hello!";
}

// console.log(hello());

/**
 * An async function
 */

// function noAsyncPromise() {
//   return Promise.resolve("this promise has resolved");
// }

// console.log(noAsyncPromise());

// async function noAwaitPromise() {
//   return Promise.resolve("this promise has resolved");
// }

// noAwaitPromise().then(console.log);

async function helloAsync() {
  return await Promise.resolve("Hello!!!");
}

// helloAsync().then(console.log);

async function helloTryCatch() {
  try {
    const message = await Promise.reject(new Error("from inside try block"));
    console.log(message);
  } catch (error) {
    console.error(error);
  }
}

// helloTryCatch();

// console.log(helloAsync()); // returns a Promise
// ES5
// helloAsync().then((value) => {
//   console.log(value);
// });

/**
 * Creating a basic Promise
 */

let successful = true;

// const myPromise = new Promise((resolve, reject) => {
//   // setTimeout(() => {
//   if (successful) {
//     resolve(console.log("We have success!!!"));
//   } else {
//     reject(console.log("Womp womp"));
//   }
//   // }, 3000);

//   console.log("Where does this message appear?");
// });

// console.log(myPromise);
