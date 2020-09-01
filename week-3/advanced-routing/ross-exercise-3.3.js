/*
============================================
; Title: Exercise 3.3
; Author: Dan Ross
; Date: 22 August 2020
; Description: Advanced Routing

;===========================================
*/
//Imports the ross-header.js file from the root directory
const header = require("../../ross-header.js");

// output header
console.log(header.display("Dan", "Ross", "Exercise 3.3"));
console.log("");
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
const { response } = require("express");
var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));

app.get("/:employeeId", function (req, res) {
  var employeeId = parseInt(req.params.employeeId, 10);
  res.render("index", {
    employeeId: employeeId,
  });
});
http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080");
});
