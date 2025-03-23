// 2
// - 1
let container = document.getElementById("container")
console.log(container)
// - 2
let lists = document.querySelectorAll(".list")
lists[0].children[1].textContent = "Richard";
// - 3
lists[1].children[1].remove();
// - 4
lists.forEach((ul) => {
  ul.children[0].textContent = "Zakaria";
});

//-------------------------------
// 3
// - 1
lists.forEach(element => {
  element.classList.add("student_list")
});
// - 2
lists[0].classList.add("university", "attendance")

//-------------------------------
// 4
// - 1
container.style.backgroundColor = "lightblue"
container.style.padding = "15px"
// - 2
const danLi = lists[1].querySelector("li:last-child");
if (danLi) {
    danLi.style.display = "none";
}
// - 3
const richardLi = lists[0].querySelector("li:nth-child(2)");
richardLi.style.border = "2px solid black";
// - 4
document.body.style.fontSize = "18px";
// - Bonus
if (container.style.backgroundColor === "lightblue") {
  let firstUlUsers = lists[0].querySelectorAll("li");
  let user1 = firstUlUsers[0].textContent;
  let user2 = firstUlUsers[1].textContent;
  alert(`Hello ${user1} and ${user2}`);
}