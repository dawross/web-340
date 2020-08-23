/*
============================================
; Title: Exercise 3.2
; Author: Dan Ross
; Date: 22 August 2020
; Description: Logging

;===========================================
*/
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var app = express();
app.set("views", path.resolve(__dirname,"views"));
app.set("view engine", "ejs");
app.use(logger("short"));

app.get("/", function (req, res) {
  res.render("index", {
    message: "Welcome to Dan Ross's Morgan Logger Example!",
  });
});
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080");
});