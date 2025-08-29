const mongoose = require("mongoose");
const Tour = require("./tourModel");
const { getGiantBombGame } = require("../utils/giantBombGameHelper");

async function doesGiantBombGameExist(val) {
  const game = await getGiantBombGame(val);
  return !!game;
}

const relationshipSchema = mongoose.Schema({
  game: {
    type: String,
    required: [true, "Relationship must belong to a game."],
    validate: {
      validator: doesGiantBombGameExist,
      message: "game does not exist",
    },
  },
  experience: {
    type: String,
    enum: ["want-to-play", "played"],
    required: [true, "Please select 'Want to play' or 'Have played'."],
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  review: {
    type: String,
    min: 5,
    max: 1000,
    // validate: {
    //   validator: function () {
    //     console.log("am i validating the review with the rating?");
    //     console.log(this.rating);
    //     return !!this.rating;
    //   },
    //   message: "A review needs a rating",
    // },
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Relationship must belong to a user."],
  },
});

relationshipSchema.index({ game: 1, user: 1 }, { unique: true });

relationshipSchema.pre(/^find/, function (next) {
  this.populate({ path: "user", select: "name photo _id" });
  next();
});

const Relationship = mongoose.model("Relationship", relationshipSchema);

module.exports = Relationship;
