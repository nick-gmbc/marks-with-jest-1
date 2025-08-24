/**
 * @jest-environment jsdom
 */

const {findGrade}  = require("../grading.js");
const {gradeButtonClick}  = require("../grading.js");

//import { findGrade, gradeButtonClick } from "../grading.js";

beforeEach(() => {
    document.body.innerHTML = "<p id='par'></p>";
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html","utf-8");
    document.open();
    document.write(fileContents);
    document.close();

});

 describe ("Grading", () => {
    test("Should return Pass given a mark of 100", () =>{
        expect(findGrade(100)).toBe("Pass");
    });
    test("Should return Pass given a mark of 50", () =>{
        expect(findGrade(50)).toBe("Pass");
    });
    test("Should return Fail given a mark of 39", () =>{
        expect(findGrade(39)).toBe("Fail");
    });
    test("Should return Pass given a mark of 40", () =>{
        expect(findGrade(40)).toBe("Pass");
    });
    test('throws an exception if mark is negative', () => {
        expect(() => findGrade(-1)).toThrow('Mark must be than greater 0');
    });
    test('throws an exception if mark is negative', () => {
        expect(() => findGrade(1.1)).toThrow('Mark must be integer');
    });
    test('throws an exception if mark is not a number', () => {
        expect(() => findGrade("cat")).toThrow('Mark must be numeric');
    });
    test('throws an exception if a value for mark is not passed', () => {
        expect(() => findGrade()).toThrow('A single integer argument must be passed');
    });
    test('throws an exception if a value for mark null', () => {
        expect(() => findGrade(null)).toThrow('Mark cannot be null');
    });
    test('throws an exception if a value for mark over 100', () => {
        expect(() => findGrade(101)).toThrow('Mark must be than less than 100');
    });
 });

describe("DOM tests", () => {
   test("Expects content to change to Pass", () => {
        const input = document.getElementById("mark");
        input.value = "100";
        gradeButtonClick();
        expect(document.getElementById("result").innerHTML).toEqual("Pass");
    });
   test("Expects content to change to Fail", () => {
        const input = document.getElementById("mark");
        input.value = "39";
        gradeButtonClick();
        expect(document.getElementById("result").innerHTML).toEqual("Fail");
    });
   test("Expects content to change to missing number error", () => {
        const input = document.getElementById("mark");
        input.value = "";
        gradeButtonClick();
        expect(document.getElementById("result").innerHTML).toEqual("Mark must be numeric");
    });
   test("Expects content to change to number too low error", () => {
        const input = document.getElementById("mark");
        input.value = "-1";
        gradeButtonClick();
        expect(document.getElementById("result").innerHTML).toEqual("Mark must be than greater 0");
    });
   test("Expects content to change to number too high error", () => {
        const input = document.getElementById("mark");
        input.value = "101";
        gradeButtonClick();
        expect(document.getElementById("result").innerHTML).toEqual("Mark must be than less than 100");
    });
   test("Expects content to change to number must be integer", () => {
        const input = document.getElementById("mark");
        input.value = "10.1";
        gradeButtonClick();
        expect(document.getElementById("result").innerHTML).toEqual("Mark must be integer");
    });
});