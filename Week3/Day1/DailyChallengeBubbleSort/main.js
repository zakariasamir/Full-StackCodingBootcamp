const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];
console.log(numbers.toString());
console.log(numbers.join(""));
let swapper;

for (let i = 0; i <= numbers.length - 1; i++) {
  for (let j = 0; j < numbers.length - 1 - i; j++) {
    if (numbers[j] < numbers[j + 1]) {
      swapper = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = swapper;
    }
  }
}
console.log(numbers)
