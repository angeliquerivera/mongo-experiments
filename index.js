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
    // Nene: "61ef5944004f4e91fbc4adca"-
    // Polka:"61ef596c705f46b8ed0c418a"
    const findNene = await Idol.findById("61ef5944004f4e91fbc4adca");
    findNene.unitMembers.push("nene has almost a million husbands");
    await findNene.save();
    console.log(findNene);
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
