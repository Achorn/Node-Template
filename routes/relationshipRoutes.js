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

module.exports = router;
