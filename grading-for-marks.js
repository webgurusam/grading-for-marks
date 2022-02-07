// Grading for marks
function getMarks(inputMarks) {
    if (inputMarks >= 80 && inputMarks <= 100) {
        return 'A+';
    } else if (inputMarks <= 79 && inputMarks >= 70) {
        return 'A';
    } else if (inputMarks >= 60 && inputMarks <= 69) {
        return 'A-';
    } else if (inputMarks >= 50 && inputMarks <= 59) {
        return 'B';
    } else if (inputMarks >= 40 && inputMarks <= 49) {
        return 'C';
    } else if (inputMarks >= 33 && inputMarks <= 39) {
        return 'D';
    } else {
        return 'F';
    }
}
const inputMarks = 100;
const marksGrading = getMarks(inputMarks);
console.log('You got in SSC', marksGrading, 'grade result.');
















