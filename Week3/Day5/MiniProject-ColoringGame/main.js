let color = null;
let mousedown = false;
const blocks = document.getElementById("main");

for (let i = 0; i < 900; i++) {
  const block = document.createElement("div");
  blocks.appendChild(block);
}

let body = document.getElementsByTagName("body")[0];
let color_blocks = document.querySelectorAll("#sidebar > *");
let fill_blocks = document.querySelectorAll("#main > *");
let clear_button = document.getElementsByTagName("button")[0];
console.log(fill_blocks);
console.log(clear_button);

clear_button.addEventListener("click", function () {
  for (let fill_block of fill_blocks) {
    fill_block.style.backgroundColor = "white";
  }
});

body.addEventListener("mousedown", function () {
  mousedown = true;
});

body.addEventListener("mouseup", function () {
  mousedown = false;
});

for (let color_block of color_blocks) {
  color_block.addEventListener("click", function (event) {
    color = event.target.style.backgroundColor;
  });
}

for (let fill_block of fill_blocks) {
  fill_block.addEventListener("mousedown", function (event) {
    if (color != null) event.target.style.backgroundColor = color;
  });
  fill_block.addEventListener("mouseover", function (event) {
    if (mousedown && color != null) event.target.style.backgroundColor = color;
  });
}

document.getEle