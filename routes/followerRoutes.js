const express = require("express");
const authController = require("../controllers/authController");
const followerController = require("../controllers/followerController");
const router = express.Router();

router.use(authController.protect);

router
  .route("/")
  .get(followerController.getAllFollowers)
  .post(followerController.setFollowerId, followerController.createFollower);

router
  .route("/:id")
  .get(followerController.getFollower)
  .delete(
    authController.restrictTo("user", "admin"),
    followerController.deleteFollower
  );

module.exports = router;
