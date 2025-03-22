const family = {
  father: "John",
  mother: "Jane",
  daughter: "Sally",
  son: "Billy",
};

for (let key in family) {
  console.log(key);
}

for (let value in family) {
  console.log(family[value]);
}
