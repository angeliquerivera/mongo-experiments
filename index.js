const mongoose = require("mongoose"); //installed library import
const Idol = require("./schema/Idol"); //local import

async function run() {
  try {
    /**
     * 1.
     */

    const idolSubaru = await Idol.findOne({ name: "Oozora Subaru" });
    idolSubaru.subcount = 1260000;
    await idolSubaru.save();
    // THIS IS WHERE THE .post("save") happens; before the console.log
    console.log(idolSubaru);
    // idols.forEach((idol) => {
    //   console.log(idol.nameAndSubs);
    // });
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
