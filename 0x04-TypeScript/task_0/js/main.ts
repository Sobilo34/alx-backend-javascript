export interface Student {
  firstname: string;
  lastname: string;
  age: number;
  location: string;
};

const studentA: Student = {
  firstname: "Ibrahim",
  lastname: "Soliu",
  age: 14,
  location: "Oyo state, Nigeria"
};

const studentB: Student = {
  firstname: "Muhammad",
  lastname: "Soliu",
  age: 12,
  location: "Costain Lagos, Nigeria"
};

const studentsList: Array<Student> = [
  studentA,
  studentB,
];

const styleSheet = `
html {
  margin: 0;
  height: 100%;
}

body {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  margin: 10%;
}

table {
  border-collapse: collapse;
}

thead {
  font-weight: bold;
}

td {
  padding: 10px;
  border: 1px solid gray;
  cursor: pointer;
}

td:hover {
  background: gainsboro;
}

td:nth-child(1) {
  text-align: center;
}
`;

export const displayStudents = (students: Array<Student>): void => {
  const table = document.createElement("table");
  const tableHeader = document.createElement("thead");
  const tableBody = document.createElement("tbody");
  const tableHeaderRow = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  td1.textContent = "Firstname";
  td2.textContent = "Location";
  tableHeaderRow.insertAdjacentElement("beforeend", td1);
  tableHeaderRow.insertAdjacentElement("beforeend", td2);
  tableHeader.insertAdjacentElement("beforeend", tableHeaderRow);

  for (const student of students) {
      const tr = document.createElement("tr");
      const td1 = document.createElement("td");
      const td2 = document.createElement("td");
      td1.textContent = student.firstname;
      td2.textContent = student.location;
      tr.insertAdjacentElement("beforeend", td1);
      tr.insertAdjacentElement("beforeend", td2);
      tableBody.insertAdjacentElement("beforeend", tr);
  }

  table.insertAdjacentElement("beforeend", tableHeader);
  table.insertAdjacentElement("beforeend", tableBody);
  document.body.insertAdjacentElement("beforeend", table);
};

displayStudents(studentsList);
const styleSheetElement = document.createElement("style");
styleSheetElement.innerHTML = styleSheet;
document.head.insertAdjacentElement("beforeend", styleSheetElement);
document.title = "Task 0";
