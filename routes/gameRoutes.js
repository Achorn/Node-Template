const express = require("express");
const relationshipRouter = require("./relationshipRoutes");
const gameController = require("../controllers/gameController");

const router = express.Router();

router.use("/:gameId/relationships", relationshipRouter);

// router.use((req, res, next) => {
//not sure if this is even needed. stripped from tour routes
// });

router.route("/search").get(gameController.searchForGame);
router.route("/:id").get(gameController.getGame);

module.exports = router;
