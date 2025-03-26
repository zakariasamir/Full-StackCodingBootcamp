const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((element, index) => {
  console.log(`${index + 1}# Choise is ${element}`);
});

const check = colors.some((value) => value == "Violet")

console.log(check ? "Yeah" : "No...");