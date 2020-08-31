/*
============================================
; Title: Exercise 4.3
; Author: Dan Ross
; Date: 231 August 2020
; Description: HTTP Status Codes
;===========================================
*/
var express = require("express");
var http = require("http");
const { response } = require("express");
var app = express();
app.get("/not-found", function (req, res) {
  res.status(404);
  res.json({
    error: "Resource not found.",
  });
});
app.get("/ok", function (req, res) {
  res.status(200);
  res.json({
    message: "OK",
  });
});
app.get("/not-implemented", function (req, res) {
  res.status(501);
  res.json({
    error: "Not implemented.",
  });
});
http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080!");
});
