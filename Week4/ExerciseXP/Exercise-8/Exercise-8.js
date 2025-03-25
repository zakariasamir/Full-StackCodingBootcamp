function makeJuice(size) {
    
  function addIngredients(ing1, ing2, ing3) {
      const orderDiv = document.getElementById("order");
      orderDiv.innerHTML = `The client wants a ${size} juice, containing ${ing1}, ${ing2}, and ${ing3}.`;
  }

  addIngredients("apple", "banana", "mango");
}

makeJuice("large");

function makeJuice(size) {
  let ingredients = []

  function addIngredients(ing1, ing2, ing3) {
      ingredients.push(ing1, ing2, ing3);
  }

  function displayJuice() {
      const orderDiv = document.getElementById("order");
      orderDiv.innerHTML = `The client wants a ${size} juice, containing ${ingredients.join(", ")}.`;
  }

  addIngredients("apple", "banana", "mango");
  addIngredients("strawberry", "kiwi", "orange");

  displayJuice();
}

makeJuice("large");
