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
  hashTags: hashtagSchema,
  createdAt: { type: Date, default: () => Date.now(), immutable: true },
  updatedAt: { type: Date, default: () => Date.now() },
});

module.exports = mongoose.model("Idol", idolSchema);
