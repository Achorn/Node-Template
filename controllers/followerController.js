const Follower = require("../models/followerModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const factory = require("./handlerFactory");

exports.setFollowerId = (req, res, next) => {
  req.body.user = req.user.id;
  next();
};
exports.getAllFollowers = factory.getAll(Follower);
exports.createFollower = factory.createOne(Follower);
exports.getFollower = factory.getOne(Follower);

exports.deleteFollower = catchAsync(async (req, res, next) => {
  const doc = await Follower.findOneAndDelete({
    _id: req.params.id,
    user: req.user,
  });
  if (!doc) {
    return next(new AppError("No document found with that ID", 404));
  }

  res.status(204).json({ status: "success", data: null });
});
