function findGrade(mark) {
    if (mark === undefined) throw('A single integer argument must be passed');
    if (isNaN(mark)) throw('Mark must be numeric');
    if (!Number.isInteger(mark)) throw('Mark must be integer');
    if (mark < 0) throw('Mark must be 0 of greater');
    let grade = "";
    if (mark >= 40) {
        grade = "Pass";
    } else {
        grade = "Fail";
    }
    return grade;
}

module.exports = findGrade;

