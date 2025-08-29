const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();
const relationshipController = require("../controllers/relationshipController");

// router.use(authController.protect);

router
  .route("/")
  .post(
    authController.protect,
    relationshipController.setGameUserId,
    relationshipController.createRelationship
  )
  .get(relationshipController.getRelationships);

router
  .route("/:id")
  .patch(
    authController.protect,
    authController.restrictTo("user", "admin"),
    relationshipController.updateRelationship
  )
  .delete(
    authController.protect,
    authController.restrictTo("user", "admin"),
    relationshipController.deleteRelationship
  );

module.exports = router;
