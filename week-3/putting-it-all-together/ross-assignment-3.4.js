/*
============================================
; Title: Assignment 3.4
; Author: Dan Ross
; Date: 23 August 2020
; Description: PUtting it all together

;===========================================
*/
//Imports the ross-header.js file from the root directory
const header = require("../../ross-header.js");

// output header
console.log(header.display("Dan", "Ross", "Exercise 3.4"));
console.log("");
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
app.get("/", function (req, res) {
  res.render("index", {
    message: "home page",
  });
});

app.get("/about", function (req, res) {
  res.render("about", {
    message: "about page",
  });
});

app.get("/contact", function (req, res) {
  res.render("contact", {
    message: "contact page",
  });
});

app.get("/products", function (req, res) {
  res.render("products", {
    message: "products page",
  });
});

http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080");
});
