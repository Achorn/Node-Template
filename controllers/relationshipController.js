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
exports.deleteRelationship = factory.deleteOne(Relationship);

exports.updateRelationship = catchAsync(async (req, res, next) => {
  const filteredBody = filterObj(req.body, "review", "experience", "rating");
  filteredBody.updatedAt = Date.now();
  const updatedRelationship = await Relationship.findByIdAndUpdate(
    req.params.id,
    filteredBody,
    { new: true, runValidators: true }
  );
  res
    .status(200)
    .json({ status: "success", data: { relationship: updatedRelationship } });
});

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    if (allowedFields.includes(key)) newObj[key] = obj[key];
  });
  return newObj;
};
