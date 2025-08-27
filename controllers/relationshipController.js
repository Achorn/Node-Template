const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const factory = require("./handlerFactory");
const Relationship = require("../models/relationshipModel");

exports.setGameUserId = (req, res, next) => {
  if (!req.body.game) req.body.game = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.createRelationship = factory.createOne(Relationship);

exports.getRelationships = factory.getAll(Relationship);
