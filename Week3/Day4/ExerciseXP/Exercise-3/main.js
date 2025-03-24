// - 1
let allBoldItems;

// - 2
function getBoldItems() {
  allBoldItems = document.querySelectorAll("p strong");
}
getBoldItems();

// - 3
function highlight() {
  allBoldItems.forEach((item) => {
    item.style.color = "blue";
  });
}

// - 4
function returnItemsToDefault() {
  allBoldItems.forEach((item) => {
    item.style.color = "black";
  });
}

// - 5
const paragraph = document.querySelector("p");
paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", returnItemsToDefault);