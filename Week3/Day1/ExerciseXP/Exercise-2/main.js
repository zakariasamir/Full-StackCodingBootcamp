const colors = ["blue", "red", "green", "purple", "black"];
const suffixes = ["st", "nd", "rd", "th", "th"];

colors.forEach((color, index) => {
  console.log(`My # ${index + 1} choice is ${color}`);
});

colors.forEach((color, index) => {
  const suffix = suffixes[index] || "th"; // Default to "th" for numbers beyond 3
  console.log(`My ${index + 1}${suffix} choice is ${color}`);
});
