const mongoose = require("mongoose"); //installed library import
const Idol = require("./schema/Idol"); //local import

// const idolOne = new Idol({ name: "Houshou Marine", height: 150 });

// Using .then()
// idolOne.save().then(() => {
//   console.log("idolOne saved");
// });

// Using async/await; BEST PRACTICE
// async function run() {
//   const idolTwo = new Idol({ name: "Amelia Watson", height: 150 });
//   await idolTwo.save();
//   console.log(idolTwo);
// }
async function run() {
  try {
    const idolFive = await Idol.create({
      name: "Akai Haato",
      subcount: 1330000,
    });
    console.log(idolFive);
    // const idols = await Idol.find();
    // console.log(idols);
  } catch (error) {
    console.error(error.message);
  }
}
run();

mongoose.connect(
  "mongodb://localhost/hololive",
  () => {
    console.log("Connected to Hololive DB");
  },
  (err) => {
    console.error(err);
  }
);
