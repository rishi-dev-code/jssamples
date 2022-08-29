function createStudent(im_studentID, im_studentName, im_studentCity) {
    this.studentID = im_studentID;
    this.studentName = im_studentName;
    this.studentCity = im_studentCity;
}
function createStudentwithGrades(im_studentID, im_studentName, im_studentCity, im_studentGrade) {
    this.studentID = im_studentID;
    this.studentName = im_studentName;
    this.studentCity = im_studentCity;
    this.studentGrade = im_studentGrade;

}
const originalStudents = [
    new createStudent(100, "Student1", "Sydney"),
    new createStudent(200, "Student2", "Melbourne"),
    new createStudent(300, "Student3", "Brisbane"),
    new createStudent(400, "Student4", "Adelaide"),
];
export const testMap = () => {


    const newList = originalStudents.map((currStudent) =>
        new createStudentwithGrades(currStudent.studentID, currStudent.studentName, currStudent.studentCity, 70)
    );

    console.log(originalStudents);
    console.log(newList);
    //
    const mapListResult = document.getElementById('mapListResult');
    mapListResult.innerHTML = createHtmlList();

}

export const createHtmlList = () => {
    const newArrayHtml = originalStudents.map(currStudent => {
        return `<h2>${currStudent.studentName}</h2><br/><hr/>`
    })
    return newArrayHtml;

}