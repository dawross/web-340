/*
============================================
; Title: Assignment 1.4
; Author: Dan Ross
; Date: 8 August 2020
; Description: Node.js server
;===========================================
*/
var http = require("http");
function processRequest(req, res) {
  var body = "Hello Universe";
  var contentLength = body.length;
  res.writeHead(200, {
    "Content-Length": contentLength,
    "Content-Type": "text/plain",
  });
  res.end(body);
}
var s = http.createServer(processRequest);
s.listen(8080);
