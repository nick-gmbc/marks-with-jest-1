function findGrade(mark) {
    if (mark === undefined) throw('A single integer argument must be passed');
    if (mark == null) throw('Mark cannot be null');
    if (isNaN(mark)) throw('Mark must be numeric');
    if (!Number.isInteger(mark)) throw('Mark must be integer');
    if (mark < 0) throw('Mark must be than greater 0');
    if (mark > 100) throw('Mark must be than less than 100');
    let grade = "";
    if (mark >= 40) {
        grade = "Pass";
    } else {
        grade = "Fail";
    }
    return grade;
}

function gradeButtonClick() {
    try {
        const mark = document.getElementById("mark").value;
        document.getElementById("result").innerHTML = findGrade(parseFloat(mark));
    } catch (err) {
        document.getElementById("result").innerHTML = err;
    }

}

module.exports = { findGrade, gradeButtonClick };



