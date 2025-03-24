// - 1
const form = document.querySelector("form");
console.log(form);

// - 2
const fnameInput = document.getElementById("fname");
const lnameInput = document.getElementById("lname");
console.log(fnameInput);
console.log(lnameInput);

// - 3
const fnameByName = document.querySelector("[name='firstname']");
const lnameByName = document.querySelector("[name='lastname']");
console.log(fnameByName);
console.log(lnameByName);

// - 4
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // event.preventDefault() stops the form from reloding the page

  const firstNameValue = fnameInput.value.trim();
  const lastNameValue = lnameInput.value.trim();

  if (firstNameValue === "" || lastNameValue === "") {
    alert("Both fields are required.");
    return;
  }

  const usersAnswer = document.querySelector(".usersAnswer");

  usersAnswer.innerHTML = "";

  const firstNameLi = document.createElement("li");
  firstNameLi.textContent = firstNameValue;
  usersAnswer.appendChild(firstNameLi);

  const lastNameLi = document.createElement("li");
  lastNameLi.textContent = lastNameValue;
  usersAnswer.appendChild(lastNameLi);
});
