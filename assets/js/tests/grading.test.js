 const findGrade = require("../grading.js");

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
        expect(() => findGrade(-1)).toThrow('Mark must be 0 of greater');
    });
    test('throws an exception if mark is negative', () => {
        expect(() => findGrade(1.1)).toThrow('Mark must be integer');
    });
 });