/*
============================================
; Title: Exercise 2.2
; Author: Dan Ross
; Date: 15 August 2020
; Description: Hello World with Express

;===========================================
*/
//Imports the ross-header.js file from the root directory
const header = require("../../ross-header.js");

// output header
console.log(header.display("Dan", "Ross", "Exercise 2.2"));
console.log("");
var express = require("express");
var http = require("http");
var app = express();
app.use(function (request, response) {
  console.log("In comes a request to: " + request.url);
  response.end("Hello World");
});

http.createServer(app).listen(8080);
