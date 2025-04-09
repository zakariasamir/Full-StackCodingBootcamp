const _ = require('lodash');
const {addition, multiplication} = require('./math.js');

const sum = addition(5, 10);
const multi = multiplication(5, 10);

const numbers = [4, 6, 2, 8, 10];
const max = _.max(numbers);
const min = _.min(numbers);
const mean = _.mean(numbers);

console.log(sum)
console.log(multi)
console.log(max)
console.log(min)
console.log(mean.toFixed(2))

