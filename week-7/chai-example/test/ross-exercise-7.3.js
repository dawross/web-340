/*
============================================
; Title: Exercise 7.3
; Author: Dan Ross
; Date: 19 September 2020
; Description: Chai Example
;===========================================
*/

//Imports the ross-header.js file from the root directory
const header = require("../../../ross-header.js");

// output header
console.log(header.display("Dan", "Ross", "Exercise 7.3"));
console.log("");

var fruits = require("../ross-fruits");
var chai = require("chai");
var assert = chai.assert;

describe("fruits", function(){
    it("should return an array of fruits", function(){
        var f = fruits('Apple, Orange, Mango');
        assert(Array.isArray(f));
    });
});