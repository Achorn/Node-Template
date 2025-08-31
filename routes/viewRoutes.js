const express = require("express");
const viewsController = require("../controllers/viewsController");
const authController = require("../controllers/authController");
// const bookingController = require('../controllers/bookingController');

const router = express.Router();

router.use(viewsController.alerts);
router.use(authController.isLoggedIn);

router.get("/", viewsController.getOverview);
router.get("/game/search/:name", viewsController.getGameSearch);
router.get("/game/:id", viewsController.getGame);

router.get("/relationship/edit/:id", viewsController.getRelationshipForm);
router.get("/tour/:slug", viewsController.getTour);
router.get("/login", viewsController.getLoginForm);
router.get("/signup", viewsController.getSignupForm);

router.get("/me", authController.protect, viewsController.getAccount);
router.get("/my-tours", authController.protect, viewsController.getMyTours);
router.get("/user/:username", viewsController.getUserPage);

router.post(
  "/submit-user-data",
  authController.protect,
  viewsController.updateUserData
);

module.exports = router;
