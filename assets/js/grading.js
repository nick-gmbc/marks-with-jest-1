function findGrade(mark) {
    if (mark < 0) throw('Mark cannot be negative');
    let grade = "";
    if (mark >= 40) {
        grade = "Pass";
    } else {
        grade = "Fail";
    }
    return grade;
}

module.exports = findGrade;

