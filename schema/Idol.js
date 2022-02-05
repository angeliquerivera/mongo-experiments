const mongoose = require("mongoose");

const hashtagSchema = new mongoose.Schema({
  streamTags: [String],
  fanArt: [String],
});

const idolSchema = new mongoose.Schema({
  name: { type: String, required: true, minLength: 2 },
  height: Number,
  subcount: {
    type: Number,
    required: true,
    min: 1,
    max: 10000000000,
    validate: {
      validator: (value) => value % 2 === 0,
      message: (props) => `${props.value} is not an even subcount.`,
    },
  },
  debut: Date,
  fanName: String,
  seiso: Boolean,
  unit: String,
  unitMembers: { type: [mongoose.SchemaTypes.ObjectId], ref: "Idol" },
  // hashTags: { // <- explicit object, no new Schema created, therefore created at document creation time
  //   streamTags: [String],
  //   fanArt: [String],
  // },
  hashTags: hashtagSchema, // <- this is a NEW Schema
  createdAt: { type: Date, default: () => Date.now(), immutable: true },
  updatedAt: { type: Date, default: () => Date.now() },
});

idolSchema.methods.sayHello = function () {
  console.log(`Hello! My name is ${this.name}!`);
};

idolSchema.statics.findByName = function (name) {
  return this.find({ name });
};

idolSchema.query.bySubcount = function (subcount) {
  return this.where("subcount").equals(subcount);
};

idolSchema.virtual("nameAndSubs").get(function () {
  return `Hello! I'm ${this.name}, and I currently have ${this.subcount} subs on YouTube.`;
});

module.exports = mongoose.model("Idol", idolSchema);
