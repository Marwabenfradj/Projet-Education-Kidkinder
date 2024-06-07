//import mongoose module

const mongoose = require("mongoose");
// create CourseSchema
const CourseSchema = mongoose.Schema({
  name: String,
  description: String,
});
//Affect model name to schema
const course = mongoose.model("Course", CourseSchema);
// make course exportable
module.exports = course;
