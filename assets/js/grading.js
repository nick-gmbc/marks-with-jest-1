function findGrade(mark) {
    let grade = "";
    if (mark >= 40) {
        grade = "Pass";
    } else {
        grade = "Fail";
    }
    return grade;
}

module.exports = findGrade;

