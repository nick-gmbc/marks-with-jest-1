 const findGrade = require("../grading.js");

 describe ("Grading", () => {
    test("Should return Pass given a mark of 100", () =>{
        expect(findGrade(100)).toBe("Pass");
    });
 });