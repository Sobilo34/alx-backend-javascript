"use strict";
exports.__esModule = true;
exports.displayStudents = void 0;
;
var studentA = {
    firstname: "Ibrahim",
    lastname: "Soliu",
    age: 14,
    location: "Oyo state, Nigeria"
};
var studentB = {
    firstname: "Muhammad",
    lastname: "Soliu",
    age: 12,
    location: "Costain Lagos, Nigeria"
};
var studentsList = [
    studentA,
    studentB,
];
var styleSheet = "\nhtml {\n  margin: 0;\n  height: 100%;\n}\n\nbody {\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 80%;\n  margin: 10%;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nthead {\n  font-weight: bold;\n}\n\ntd {\n  padding: 10px;\n  border: 1px solid gray;\n  cursor: pointer;\n}\n\ntd:hover {\n  background: gainsboro;\n}\n\ntd:nth-child(1) {\n  text-align: center;\n}\n";
var displayStudents = function (students) {
    var table = document.createElement("table");
    var tableHeader = document.createElement("thead");
    var tableBody = document.createElement("tbody");
    var tableHeaderRow = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    td1.textContent = "Firstname";
    td2.textContent = "Location";
    tableHeaderRow.insertAdjacentElement("beforeend", td1);
    tableHeaderRow.insertAdjacentElement("beforeend", td2);
    tableHeader.insertAdjacentElement("beforeend", tableHeaderRow);
    for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
        var student = students_1[_i];
        var tr = document.createElement("tr");
        var td1_1 = document.createElement("td");
        var td2_1 = document.createElement("td");
        td1_1.textContent = student.firstname;
        td2_1.textContent = student.location;
        tr.insertAdjacentElement("beforeend", td1_1);
        tr.insertAdjacentElement("beforeend", td2_1);
        tableBody.insertAdjacentElement("beforeend", tr);
    }
    table.insertAdjacentElement("beforeend", tableHeader);
    table.insertAdjacentElement("beforeend", tableBody);
    document.body.insertAdjacentElement("beforeend", table);
};
exports.displayStudents = displayStudents;
(0, exports.displayStudents)(studentsList);
var styleSheetElement = document.createElement("style");
styleSheetElement.innerHTML = styleSheet;
document.head.insertAdjacentElement("beforeend", styleSheetElement);
document.title = "Task 0";
