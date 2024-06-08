//import express Module
const express = require("express");
//import body-parser module
const bodyParser = require("body-parser");
//import mongoose module
const mongoose = require("mongoose");

//create an express application
const app = express();

// connect DB
mongoose.connect("mongodb://127.0.0.1:27017/educationDB");
//app configuration
//send JSON response from BE => FE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );

  next();
});

//Models Importation
const User = require("./models/user");
const Course = require("./models/course");

//business logic

//Business Logic : signUp
app.post("/users", (req, res) => {
  console.log("here into BL signUp", req.body);
  let user = new User(req.body);
  user.save();
  res.json({ msg: "Added with success" });
});

//Business Logic : Add Course
app.post("/courses", (req, res) => {
  console.log("here into Add Course", req.body);

  let courseObj = new Course(req.body);
  courseObj.save();

  res.json({ message: "Added with success" });
});
//Business Logic : GEt All Courses
app.get("/courses", (req, res) => {
  console.log("here into Get All Courses");
  res.json({ message: "Achieved with success" });
});
//Business Logic : Get Course By Id
app.get("/courses/:id", (req, res) => {
  console.log("here into BL:Get Course By Id", req.params.id);
  Course.findById(req.params.id).then((doc) => {
    console.log("here doc", doc);
    res.json({ course: doc });
  });
});

//Business Logic : Add User
app.post("/teachers", (req, res) => {
  console.log("here into Add teacher", req.body);

  res.json({ message: "Added with success" });
});
//Business Logic : GEt All Users
app.get("/teachers", (req, res) => {
  console.log("here into Get All teachers");
  res.json({ message: "Achieved with success" });
});

//make app exportable
module.exports = app;
