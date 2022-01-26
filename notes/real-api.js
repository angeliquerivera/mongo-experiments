const fetch = require("node-fetch");

const fetchData = async () => {
  try {
    const fetched = await fetch("https://jsonplaceholder.typicode.com/todos/");

    const data = await fetched.json();

    console.log("final:", data);
  } catch (error) {
    console.error(error);
  }
};

fetchData();
