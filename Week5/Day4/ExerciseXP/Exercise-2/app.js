import persons from "./data.js";

function averageAge(persons) {
  const totalAge = persons.reduce((acc, person) => acc + person.age, 0);
  const average = totalAge / persons.length;
  console.log(`The average age is ${average}`);
}

averageAge(persons)