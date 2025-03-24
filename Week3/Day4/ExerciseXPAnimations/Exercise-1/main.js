// Part I
setTimeout(() => {
  alert("Hello World");
}, 2000);

// Part II
setTimeout(() => {
  const container = document.getElementById("container");
  const newP = document.createElement("p");
  newP.textContent = "Hello World";
  container.appendChild(newP);
}, 2000);

// Part III
const container = document.getElementById("container");
const clearButton = document.getElementById("clear");

let intervalId = setInterval(() => {
  const newParagraph = document.createElement("p");
  newParagraph.textContent = "Hello World";
  container.appendChild(newParagraph);

  if (container.getElementsByTagName("p").length >= 5) {
    clearInterval(intervalId);
  }
}, 2000);

clearButton.addEventListener("click", () => {
  clearInterval(intervalId);
});
