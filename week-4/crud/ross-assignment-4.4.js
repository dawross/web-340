/*
============================================
; Title: Assignment 4.4
; Author: Dan Ross
; Date: 31 August 2020
; Description: cUrl
;===========================================
*/

//Imports the ross-header.js file from the root directory
const header = require("../../ross-header.js");

// output header
console.log(header.display("Dan", "Ross", "Assignment 4.4"));
console.log("");

var express = require("express");
var http = require("http");

var app = express();

app.get("/", function (request, response) {
  response.send("API invoked as an HTTP GET request.");
});

app.put("/", function (request, response) {
  response.send("API invoked as an HTTP PUT request.");
});

app.post("/", function (request, response) {
  response.send("API invoked as an HTTP POST request");
});

app.delete("/", function (request, response) {
  response.send("API invoked as an HTTP DELETE request");
});

http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080!");
});
