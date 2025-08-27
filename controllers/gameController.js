const relationshipController = require("../controllers/relationshipController");
const Relationship = require("../models/relationshipModel");
const catchAsync = require("../utils/catchAsync");
const {
  getGiantBombGameSearch,
  getGiantBombGame,
} = require("../utils/giantBombGameHelper");

exports.searchForGame = catchAsync(async (req, res, next) => {
  const name = req.query.name;
  const games = await getGiantBombGameSearch(name);
  if (!games) return next(new AppError("No games found with that name", 404));
  res.status(200).json({
    status: "success",
    data: {
      data: games,
    },
  });
});
exports.getGame = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const game = await getGiantBombGame(id);
  if (!game) return next(new AppError("No game found with that id", 404));

  const relationships = await Relationship.find({ game: id });
  game.relationships = relationships;
  // get reviews???
  res.status(200).json({
    status: "success",
    data: {
      data: game,
    },
  });
});
