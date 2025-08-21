const Tour = require("../models/tourModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const User = require("../models/userModel");
const Booking = require("../models/bookingModel");
const axios = require("axios");
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

exports.getGame = catchAsync(async (req, res, next) => {
  console.log("getting game");
  let gameId = req.params.id;
  try {
    const giantBombURL = `http://www.giantbomb.com/api/game/${gameId}/?api_key=${process.env.GIANT_BOMB_API_KEY}&format=json`;
    console.log({ giantBombURL });
    const result = await axios({
      method: "GET",
      url: giantBombURL,
    });
    console.log("after fetch");
    // console.log(res.data);
    if (result.data.error === "ok") console.log("success");

    // console.log("data :");
    // console.log(res.data.results);
    let game = result.data.results;
    console.log(game.name);
    res.status(200).render("game", {
      title: `${game.name}`,
      game,
    });
  } catch (err) {
    console.log({ err });
    return next(new AppError("There is no game with that id", 404));
  }
  // 1) get data from giantbomb
  // http://www.giantbomb.com/api/game/3030-21268/?api_key=db6653f30c6fd574d86a82d15149c97a820c7891&format=json&field_list=genres,name
  // 2) get supplemental data from our reviews model
  // 3) render template using data
});

exports.getGameSearch = catchAsync(async (req, res, next) => {
  try {
    const name = req.params.name;
    const page = req.params.page || 1;
    const giantBombURL = `http://www.giantbomb.com/api/search/?api_key=${process.env.GIANT_BOMB_API_KEY}&format=json&query="${name}"&resources=game`;
    console.log(giantBombURL);
    const result = await axios({
      method: "GET",
      url: giantBombURL,
    });

    // console.log(res.data);
    if (result.data.error === "ok") console.log("success");
    searchResults = result.data.results;
    res.status(200).render("search", {
      title: `search results`,
      searchResults,
    });
  } catch (err) {}
});
