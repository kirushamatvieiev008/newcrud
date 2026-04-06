import { getData } from "./api/getdata";
import { createItem } from "./api/createitemdata";
import { deleteUser } from "./api/deluser";
import { update } from "./api/updateitemdata";

import { renderStudents } from "./templates/rendertemplate";
// import { newUser } from "./templates/insert";

const btnGetStudents = document.getElementById("get-students-btn");
const formAddtudents = document.getElementById("add-student-form");
const usersList = document.querySelector(".usersList");
const modalBack = document.querySelector(".backdrop");
const tablestudents = document.getElementById("students-table");
const updateForm = document.getElementById("update-student-form");

let isClicked = false;

btnGetStudents.addEventListener("click", () => {
  getData().then((res) => {
    usersList.innerHTML = renderStudents(res);
    isClicked = true;
  });
});

formAddtudents.addEventListener("submit", (event) => {
  event.preventDefault();

  const userObject = {
    name: event.currentTarget.elements.name.value,
    age: event.currentTarget.elements.age.value,
    course: event.currentTarget.elements.course.value,
    skills: event.currentTarget.elements.skills.value,
    email: event.currentTarget.elements.email.value,
    isEnrolled: event.currentTarget.elements.isEnrolled.checked
      ? "enroled"
      : "not enrolled",
  };

  // const zeroInps = () => {
  //   console.log(event.currentTarget);
    
  
  // }
  
  // console.log(event.currentTarget);
  createItem(userObject).then(() => {
    if (isClicked) {
      getData().then((res) => {
        usersList.innerHTML = renderStudents(res);
      });
    }
    // zeroInps();
    
    
  });
  event.currentTarget.elements.name.value = '';
  event.currentTarget.elements.age.value = '';
  event.currentTarget.elements.course.value = '';
  event.currentTarget.elements.skills.value = '';
  event.currentTarget.elements.email.value = '';
  event.currentTarget.elements.isEnrolled.checked = false;
});

let elementsInp = null;

tablestudents.addEventListener("click", (event) => {
  // console.log(event.target.classList);
  const userId = event.target.closest("tr").children[0].textContent;

  if (event.target.classList[0] === "delete") {
    deleteUser(userId).then(() => {
      getData().then((res) => {
        usersList.innerHTML = renderStudents(res);
      });
    });
  } else if (event.target.classList[0] === "change") {
    modalBack.style.display = "block";
    elementsInp = Array.from(event.target.closest("tr").children);

    updateForm.elements.name.value = elementsInp[1].textContent;
    updateForm.elements.age.value = elementsInp[2].textContent;
    updateForm.elements.course.value = elementsInp[3].textContent;
    updateForm.elements.skills.value = elementsInp[4].textContent;
    updateForm.elements.email.value = elementsInp[5].textContent;
    updateForm.elements.isEnrolled.checked =
      elementsInp[6].textContent === "enrolled" ? true : false;
  }
});

updateForm.addEventListener("submit", (eventIns) => {
  eventIns.preventDefault();

  const updatedUser = {
    name: `${eventIns.currentTarget.elements.name.value}`,
    age: eventIns.currentTarget.elements.age.value,
    course: eventIns.currentTarget.elements.course.value,
    skills: `${eventIns.currentTarget.elements.skills.value}`,
    email: `${eventIns.currentTarget.elements.email.value}`,
    isEnrolled: eventIns.currentTarget.elements.isEnrolled.checked,
  };

  update(elementsInp[0].textContent, updatedUser).then(() => {
    getData().then((res) => {
      usersList.innerHTML = renderStudents(res);
    });
  });
  modalBack.style.display = "none";
});
