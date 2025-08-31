const Tour = require("../models/tourModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const User = require("../models/userModel");
const Booking = require("../models/bookingModel");
const {
  getGiantBombGameSearch,
  getGiantBombGame,
} = require("../utils/giantBombGameHelper");
const Relationship = require("../models/relationshipModel");

exports.alerts = (req, res, next) => {
  const { alert } = req.query;
  if (alert === "booking")
    res.locals.alert =
      "Your booking was successful! Please check your email for a confirmation. If your booking doesn't show up here immediately, please come back later.";
  next();
};

exports.getOverview = catchAsync(async (req, res, next) => {
  // 1) Get tour data from collection
  const tours = await Tour.find();

  // 2) Build template
  // 3) Render that template using tour data from 1)
  res.status(200).render("overview", {
    title: "All Tours",
    tours,
  });
});

exports.getTour = catchAsync(async (req, res, next) => {
  // 1) Get data
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: "reviews",
    fields: "review ratings user",
  });
  // 2) Build Template
  if (!tour) {
    return next(new AppError("There is no tour with that name", 404));
  }

  // 3) Render template using data
  res.status(200).render("tour", {
    title: `${tour.name} Tour`,
    tour,
  });
});

exports.getLoginForm = (req, res) => {
  res.status(200).render("login", { title: "Login" });
};

exports.getSignupForm = (req, res) => {
  res.status(200).render("signup", { title: "Signup" });
};

exports.getAccount = (req, res) => {
  res.status(200).render("account", { title: "Your account" });
};

exports.getMyTours = catchAsync(async (req, res, next) => {
  // 1) Find all bookings (virtual populate tours later)
  const bookings = await Booking.find({ user: req.user.id });

  // 2) find Tours with returned IDs
  const tourIDs = bookings.map((el) => el.tour.id);
  const tours = await Tour.find({ _id: { $in: tourIDs } }); // find all tours "in" tourIDs

  res.status(200).render("overview", {
    title: "My Tours",
    tours,
  });
});

exports.updateUserData = catchAsync(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    {
      name: req.body.name,
      email: req.body.email,
    },
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).render("account", { title: "Account", user: updatedUser });
});

exports.getGameSearch = catchAsync(async (req, res, next) => {
  try {
    const name = req.params.name;
    const page = req.params.page || 1;
    searchResults = await getGiantBombGameSearch(name, page);
    res.status(200).render("search", {
      title: `search results`,
      searchResults,
    });
  } catch (err) {}
});

exports.getGame = catchAsync(async (req, res, next) => {
  //get giantgame game info
  let gameId = req.params.id;

  let game = await getGiantBombGame(gameId);
  if (!game) return next(new AppError("There is no game with that id", 404));
  // 2) get supplemental data from our reviews model
  // 3) render template using data

  const relationships = await Relationship.find({ game: gameId });
  game.relationships = relationships;

  res.status(200).render("game", {
    title: `${game.name}`,
    game,
  });
});

exports.getRelationshipForm = catchAsync(async (req, res, next) => {
  let relationshipId = req.params.id;

  let relationship = await Relationship.findOne({ _id: relationshipId });
  if (!relationship) {
    return next(new AppError("There is no review with that id", 404));
  }

  let game = await getGiantBombGame(relationship.game);
  if (!game) return next(new AppError("There is no game with that id", 404));
  // let game = await getGiantBombGame(relationship.game);
  res.status(200).render("editRelationship", {
    // title: `edit relationship`,
    relationship,
    title: `${game.name}`,
    game,
  });
});

exports.getUserPage = catchAsync(async (req, res, next) => {
  const username = req.params.username;
  const selectedUser = await User.findOne({ username });

  if (!selectedUser) return next(new AppError("Cant find user", 404));

  //check is user is logged in and if user is self
  // do something with that later

  res.status(200).render("user", {
    title: username,
    selectedUser,
    // game,
  });
});
