/*
============================================
; Title: Assignment 8.4
; Author: Dan Ross
; Date: 27 September 2020
; Description: EMS
;===========================================
*/

//Imports the ross-header.js file from the root directory
const header = require("../ross-header.js");

// output header
console.log(header.display("Dan", "Ross", "Assignment 5.4"));
console.log("");
//require statements
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var helmet = require("helmet");
var mongoose = require("mongoose");
var Employee = require("./models/employee");
var csrf = require("csurf");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

// setup csrf protection
var csrfProtection = csrf({ cookie: true });

//initialize express
var app = express();

// mLab connection
var mongoDB = "mongodb+srv://admin:6553rush@buwebdev-cluster-1.cnaxx.mongodb.net/test";
mongoose.connect(mongoDB, {
  useMongoClient: true,
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function () {
  console.log("Application connected to mLab MongoDB instance");
});

//set statements
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//use statements
app.use(express.static(__dirname + "/public"));
app.use(logger("short"));
app.use(helmet.xssFilter());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(csrfProtection);
app.use(function (req, res, next) {
  var token = req.csrfToken();
  res.cookie("XSRF-TOKEN", token);
  res.locals.csrfToken = token;
  next();
});

// http calls
app.get("/", function (req, res) {
  res.render("index", {
    title: "Home Page",
  });
});

app.get("/new", function (req, res) {
  res.render("new", {
    title: "Add New Employee",
  });
});

app.get("/list", function (req, res) {
  Employee.find({}, function (error, employees) {
    if (error) throw error;

    res.render("list", {
      title: "Employee List",
      employees: employees,
    });
  });
});


app.post("/process", function (req, res) {
  // console.log(req.body.first);
  if (!req.body.first || !req.body.last) {
    res.status(400).send("Entries must have a name");
    return;
  }
  //get the request forms data
  var firstName = req.body.first;
  var lastName = req.body.last;
  console.log(firstName + lastName);

  //model
  var employee = new Employee({
    firstName: firstName,
    lastName: lastName,
  });

  //save
  employee.save(function (error) {
    if (error) throw error;
    console.log(firstName + " " + lastName + " saved successfully");
  });
  res.redirect("/");
});

// create/start Node server
http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080!");
});
