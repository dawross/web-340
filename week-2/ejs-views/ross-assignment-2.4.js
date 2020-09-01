/*
============================================
; Title: Assignment 2.4
; Author: Dan Ross
; Date: 15 August 2020
; Description: EJS views

;===========================================
*/
//Imports the ross-header.js file from the root directory
const header = require("../../ross-header.js");

// output header
console.log(header.display("Dan", "Ross", "Exercise 3.2"));
console.log("");
var http = require("http");
var express = require("express");
var path = require("path");
var app = express();
app.set("views", path.resolve(__dirname, "views")); //Tell express the views are in the "views" directory
app.set("view engine", "ejs");
app.get("/", function (request, response) {
  response.render("index", {
    firstName: "Dan",
    lastName: "Ross",
    address: "1234 Nunya street",
  });
});
http.createServer(app).listen(8080, function () {
  console.log("EJS-Views app started on port 8080");
});
