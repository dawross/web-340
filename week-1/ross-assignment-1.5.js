/*
============================================
; Title: Assignment 1.5
; Author: Dan Ross
; Date: 8 August 2020
; Description: Node.js server
;===========================================
*/
//Imports the ross-header.js file from the root directory
const header = require("../../ross-header.js");

// output header
console.log(header.display("Dan", "Ross", "Assignment 1.5"));
console.log("");
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
