const dotenv = require("dotenv");
// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);

  // process.exit(code) 0 success /1 uncaught exception
  process.exit(1);
});

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
const app = require("./app");

// HOT RELOAD FAIL
// if (process.env.NODE_ENV === "development") {
//   const browserSync = require("browser-sync").create();
//   const connectBrowserSync = require("connect-browser-sync");

//   browserSync.init({
//     server: {
//       baseDir: "./public", // Directory containing your static files
//     },
//     // proxy: "http://localhost:3000", // Your Express app's port
//     files: ["public/**/*.*", "views/**/*.pug"], // Files to watch for changes
//     port: 3001, // BrowserSync UI port
//     open: false, // Don't open a new browser window automatically
//   });
//   app.use(connectBrowserSync(browserSync));
// }

mongoose.connect(DB).then(() => console.log("DB connection successful!"));

// Description and validation

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

//final global safety net unhandled rejections
process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  // process.exit(code) 0 success /1 uncaught exception
  server.close(() => {
    process.exit(1);
  });
});

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  // process.exit(code) 0 success /1 uncaught exception
  server.close(() => {
    process.exit(1);
  });
});

// SIGTERM is used to stop a program from running
process.on("SIGTERM", () => {
  console.log("✋ SIGTERM RECIEVED. Shutting down gracefully");
  server.close(() => {
    console.log("💥 Process terminated");
  });
});
