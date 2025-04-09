const {products} = require("./products.js");

async function searchProducts(name) {
  const product = products.find(p => p.name == name)
  product ? console.log(product) : console.log("Product not found");
}

searchProducts("Laptop");
searchProducts("Phone");
searchProducts("Tablet");