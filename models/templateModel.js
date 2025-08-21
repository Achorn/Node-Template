const mongoose = require("mongoose");
const slugify = require("slugify");
// const validator = require('validator');

const templateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A Template must have a name"],
      unique: true,
      trim: true,
      maxlength: [
        40,
        "A template name must have less or equal than 40 characters",
      ],
      minlength: [
        10,
        "A template name must have more or equal than 10 characters",
      ],
      // validate: [validator.isAlpha, 'name can only contain letters'],
    },
    slug: { type: String },
    duration: {
      type: Number,
      required: [true, "A template must have a duration"],
    },
    maxGroupSize: {
      type: Number,
      required: [true, "A template must have a group size"],
    },
    difficulty: {
      type: String,
      required: [true, "A template must have a difficulty"],
      enum: {
        values: ["easy", "medium", "difficult"],
        message: "Difficulty is either: easy, medium, difficult",
      },
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, "Rating must be above or equal to 1.0"],
      max: [5, "Rating must be below or equal to 5.0"],
      set: (val) => Math.round(val * 10) / 10,
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "A template must have a price"],
    },
    priceDiscount: {
      type: Number,
      validate: {
        validator: function (val) {
          // [this] only works in current documents on new doc creations not updates
          return val < this.price; //100 < 200
        },
        message: `Discount price ({VALUE}) should be below regular price`,
      },
    },
    summary: { type: String, trim: true },
    description: { type: String, trim: true },
    imageCover: {
      type: String,
      required: [true, "A template must have a cover image"],
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    startDates: [Date],
    secretTemplate: {
      type: Boolean,
      default: false,
    },
    startLocation: {
      //GeoJSON
      type: {
        type: String,
        default: "Point",
        enum: ["Point"],
      },
      coordinates: [Number],
      address: String,
      description: String,
    },
    locations: [
      {
        type: {
          type: String,
          default: "Point",
          enum: ["Point"],
        },
        coordinates: [Number],
        address: String,
        description: String,
        day: Number,
      },
    ],
    guides: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
// templateSchema.index({ price: 1 });
templateSchema.index({ price: 1, ratingsAverage: -1 });
templateSchema.index({ slug: 1 });
templateSchema.index({ startLocation: "2dsphere" });

// Virtual Property
templateSchema.virtual("durationWeeks").get(function () {
  return this.duration / 7;
});

templateSchema.virtual("reviews", {
  ref: "Review",
  foreignField: "template",
  localField: "_id",
});

/**
 *  DOCUMENT MIDDLEWARE funs before .save() and .create(). != insertMany()
 */

// pre
templateSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// query middleware (pre find middlware) pointed at query and not document
templateSchema.pre(/^find/, function (next) {
  this.find({ secretTemplate: { $ne: true } });
  this.start = Date.now();
  next();
});

templateSchema.pre(/^find/, function (next) {
  this.populate({
    path: "guides",
    select: "-__v -passwordChangedAt",
  });
  next();
});

// templateSchema.post(/^find/, function (docs, next) {
//   console.log(`query took ${Date.now() - this.start} milliseconds`);
//   next();
// });

// Aggrigation middleware
// templateSchema.pre('aggregate', function (next) {
//   this.pipeline().unshift({ $match: { secretTemplate: { $ne: true } } });
//   next();
// });

// class that utilizes our schema
const Template = mongoose.model("Template", templateSchema);

module.exports = Template;
