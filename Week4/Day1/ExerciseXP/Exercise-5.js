function kgToGrams(weightInKg) {
  return weightInKg * 1000;
}

console.log(kgToGrams(5));

const kgToGramsExpr = function(weightInKg) {
  return weightInKg * 1000;
};

console.log(kgToGramsExpr(3));

// Function declarations are hoisted (can be called before they are defined), while function expressions are not hoisted (must be defined before use).

const kgToGramsArrow = weightInKg => weightInKg * 1000;

console.log(kgToGramsArrow(2));
