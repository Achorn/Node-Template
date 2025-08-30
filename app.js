/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const ExpressMongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const cors = require("cors");

const app = express();
const viewRouter = require("./routes/viewRoutes");
const tourRouter = require("./routes/tourRoutes");
const userRouter = require("./routes/userRoutes");
const reviewRouter = require("./routes/reviewRoutes");
const relationshipRouter = require("./routes/relationshipRoutes");
const gameRouter = require("./routes/gameRoutes");

const followerRouter = require("./routes/followerRoutes");

const bookingRouter = require("./routes/bookingRoutes");
const bookingController = require("./controllers/bookingController");
const globalErrorHandler = require("./controllers/errorController");
const AppError = require("./utils/appError");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views")); //prevents multi-slash bug

// 1) GLOBAL MIDDLEWARES
// Implement CORS
app.use(cors()); // Access-Control-Allow-Origin
// api.natours.com -> natours.com (whitelisting)
// app.use(cors({ origin: 'https://www.natours.com' }));

app.options("*", cors());
//can also only allow complex requests on whitelisted routes
// app.options('api/v1/tours/:id', cors()); only tours can be deleted on CORS req

// Serving static files
app.use(express.static(path.join(__dirname, "public")));

// Set Security HTTP headers
app.use(helmet());
// Further HELMET configuration for Security Policy (CSP)
const scriptSrcUrls = [
  "https://unpkg.com/",
  "https://tile.openstreetmap.org",
  "https://js.stripe.com/v3/",
];
const styleSrcUrls = [
  "https://unpkg.com/",
  "https://tile.openstreetmap.org",
  "https://fonts.googleapis.com/",
];
const connectSrcUrls = [
  "https://unpkg.com",
  "https://tile.openstreetmap.org",
  "https://js.stripe.com/v3/",
];
const fontSrcUrls = ["fonts.googleapis.com", "fonts.gstatic.com"];

//set security http headers
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'", "https://js.stripe.com/v3/"],
      frameSrc: ["'self'", "https://js.stripe.com/v3/"],
      connectSrc: ["'self'", ...connectSrcUrls],
      scriptSrc: ["'self'", ...scriptSrcUrls],
      styleSrc: ["'self'", "'unsafe-inline'", ...styleSrcUrls],
      workerSrc: ["'self'", "blob:"],
      objectSrc: [],
      imgSrc: ["'self'", "blob:", "data:", "https:"],
      fontSrc: ["'self'", ...fontSrcUrls],
    },
  })
);

// Development Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Limit request from same API
const limiter = rateLimit({
  max: 100,
  windowms: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour.",
});
app.use("/api", limiter);

// not in booking routes as the body is a steam in raw form. dont want it changed by body parser below
app.post(
  "/webhook-checkout",
  express.raw({ type: "application/json" }),
  bookingController.webhookCheckout
);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(ExpressMongoSanitize());

// Data sanitization against XSS malitious html code with javascript
app.use(xss());

// prevent prarameter pollution
app.use(
  hpp({
    whitelist: [
      "duration",
      "ratingsQuantity",
      "ratingsAvarage",
      "maxGroupSize",
      "difficulty",
      "price",
    ],
  })
);

app.use(compression()); //compresses all text sent to client

//test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//2) ROUTES

app.use("/", viewRouter);
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/reviews", reviewRouter);
app.use("/api/v1/bookings", bookingRouter);
app.use("/api/v1/relationships", relationshipRouter);
app.use("/api/v1/games", gameRouter);
app.use("/api/v1/followers", followerRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl}`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
