// - 1
const h1 = document.querySelector("h1");
console.log(h1);

// - 2
const article = document.querySelector("article");
const paragraphs = article.querySelectorAll("p");
if (paragraphs.length > 0) {
  article.removeChild(paragraphs[paragraphs.length - 1]);
}

// - 3
const h2 = document.querySelector("h2");
h2.addEventListener("click", () => {
  h2.style.backgroundColor = "red";
});

// - 4
const h3 = document.querySelector("h3");
h3.addEventListener("click", () => {
  h3.style.display = "none";
});

// - 5
const button = document.createElement("button");
button.textContent = "Make Paragraphs Bold";
document.body.appendChild(button);

button.addEventListener("click", () => {
  paragraphs.forEach((p) => {
    p.style.fontWeight = "bold";
  });
});

// BONUS 1
h1.addEventListener("mouseover", () => {
  const randomSize = Math.floor(Math.random() * 101);
  h1.style.fontSize = `${randomSize}px`;
});

// BONUS 2
const secondParagraph = paragraphs[1];
if (secondParagraph) {
  secondParagraph.style.transition = "opacity 1s ease-in-out";

  secondParagraph.addEventListener("mouseover", () => {
    secondParagraph.style.opacity = "0";
  });

  secondParagraph.addEventListener("mouseout", () => {
    secondParagraph.style.opacity = "1";
  });
}
