const mongoose = require("mongoose"); //installed library import
const Idol = require("./schema/Idol"); //local import

async function run() {
  try {
    /**
     * 1. Create entry for Lamy
     * 2. Create one for Botan too
     * 3. Add both of Lamy's and Botan's ObjectId's to Nene's unitMembers
     * - used .findOne() for Nene
     * - used .findOne() for Lamy and Botan
     * - assigned variables for Lamy and Botan's ObjectIds
     * - used .push() to add both Lamy and Botan's ObjectIds to Nene's unitMembers array
     * - saved the updated Nene document
     * 4. Return a populated Nene document containing each of her three unitMember's data.
     */
    const idol = await Idol.find().bySubcount(1080000);
    console.log(idol[0].nameAndSubs);
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
