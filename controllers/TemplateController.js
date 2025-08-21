const Template = require("../models/templateModel");
const factory = require("./handlerFactory");

exports.getAllTemplates = factory.getAll(Template);
exports.getTemplate = factory.getOne(Template);
exports.createTemplate = factory.createOne(Template);
exports.updateTemplate = factory.updateOne(Template);
exports.deleteTemplate = factory.deleteOne(Template);
