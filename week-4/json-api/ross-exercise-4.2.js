/*
============================================
; Title: Exercise 4.2
; Author: Dan Ross
; Date: 31 August 2020
; Description: JSON APIs
;===========================================
*/

//Imports the ross-header.js file from the root directory
const header = require("../../ross-header.js");

// output header
console.log(header.display("Dan", "Ross", "Exercise 3.2"));
console.log("");
var express = require("express");
var http = require("http");
var app = express();
app.get("/employee/:id", function (request, response) {
  var id = parseInt(request.params.id, 10);
  response.json({
    firstName: "Dan",
    lastName: "Ross",
    employeeId: id,
  });
});
http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080");
});
