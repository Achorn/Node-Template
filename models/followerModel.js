const { default: mongoose } = require("mongoose");

const followingSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Following must belong to a user."],
  },
  following: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Following must have a following."],
    validate: {
      validator: function (val) {
        return !this.user.equals(val); // Ensure following is not the same as the follower
      },
      message: "you cannot follow yourself",
    },
  },
  createdAt: { type: Date, default: Date.now },
});

followingSchema.index({ user: 1, following: 1 }, { unique: true });

const Following = mongoose.model("Following", followingSchema);

module.exports = Following;
