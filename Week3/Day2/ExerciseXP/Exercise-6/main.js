const details = {
  my: "name",
  is: "Rudolf",
  the: "reindeer",
};
let result = "";
for (let key in details) {
  console.log(key, details[key]);
  result += key +" "+ details[key] + " ";
}
console.log(result);
