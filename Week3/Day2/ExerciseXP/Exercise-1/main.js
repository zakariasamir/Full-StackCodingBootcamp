const people = ["Greg", "Mary", "Devon", "James"];

console.log(people);
// Part I
// 1
people.shift();

// 2
people[2] = "Jason";

// 3
people.push("Zakaria");

// 4
console.log(people.indexOf("Mary"));

// 5
console.log(people.slice(people.indexOf("Mary") + 1, people.length - 1));

// 6
console.log(people.indexOf("Foo"));
// it returns -1 because "Foo" is not in the array

// 7
let last = people[people.length - 1];

// Part II
// 1
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// 2
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Devon") {
    break;
  }
}

console.log(people);
