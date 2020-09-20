/*
============================================
; Title: Exercise 7.2
; Author: Dan Ross
; Date: 19 September 2020
; Description: Test Driven Development
;===========================================
*/

//Imports the ross-header.js file from the root directory
const header = require("../../../ross-header.js");

// output header
console.log(header.display("Dan", "Ross", "Exercise 7.2"));
console.log("");

var assert = require("assert");
describe("String#split", function(){
    it("should return and array of fruits", function(){
        assert(Array.isArray('Apple,Orange,Mango'.split(',')));
    });
});
