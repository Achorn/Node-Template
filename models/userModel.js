const crypto = require("crypto");
const mongoose = require("mongoose");
const validator = require("validator");
// eslint-disable-next-line import/no-extraneous-dependencies
const bcrypt = require("bcryptjs");

// name, email, photo(string), password, password-confirm

const isUsername = (v) => {
  console.log("is testing username?");
  return /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/.test(v);
};

// schema
const userSchema = mongoose.Schema({
  username: {
    type: String,
    validate: {
      validator: isUsername,
      message: (props) => `${props.value} is not a valid username!`,
    },
    required: [true, "Please give us a username"],
    unique: true,
    index: {
      // uniquness with case sensitivity
      unique: true,
      collation: { locale: "en", strength: 2 },
    },
  },
  email: {
    type: String,
    required: [true, "Please provide us your email"],
    unique: true,
    validate: [validator.isEmail, "Please provide a valid email"],
    lowercase: true,
  },
  photo: { type: String, default: "default.jpg" },
  role: {
    type: String,
    enum: ["user", "guide", "lead-guide", "admin"],
    default: "user",
  },
  password: {
    type: String,
    required: [true, "Pleae provide a password"],
    minLength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      //this only works CREATE on SAVE
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords do not match",
    },
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: { type: Boolean, default: true, select: false },
});

userSchema.set("toObject", { virtuals: true });
userSchema.set("toJSON", { virtuals: true });
// model
userSchema.virtual("following", {
  ref: "Following",
  foreignField: "user",
  localField: "_id",
});

userSchema.pre("save", async function (next) {
  // only run this function is password was modified
  if (!this.isModified("password")) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete password confirm field
  this.passwordConfirm = undefined;

  next();
});

userSchema.pre("save", async function (next) {
  //exit if password wasnt modified or if user is newly created
  if (!this.isModified("password") || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

// 141 Security best practices
userSchema.pre(/^find/, async function (next) {
  // this points to the current quiery
  this.find().populate("following");
  next();
});

userSchema.pre(/^find/, async function (next) {
  // this points to the current quiery
  this.find({ active: { $ne: false } });
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = async function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return JWTTimestamp < changedTimestamp;
  }

  //NOT changed
  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000; // 10 * seconds * milliseconds

  return resetToken;
};

const userModel = mongoose.model("User", userSchema);
//export

module.exports = userModel;
