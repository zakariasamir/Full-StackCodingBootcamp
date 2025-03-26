let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

const displayGroceries = () =>
  groceries.fruits.forEach((element) => {
    console.log(element);
  });
displayGroceries();

const cloneGroceries = () => {
  let user = client;

  client = "Betty";

  console.log("Client:", client);
  console.log("User:", user); // "John" (unchanged because it's passed by value)

  let shopping = groceries;

  shopping.totalPrice = "35$"; // Will also modify groceries.totalPrice (because it Pass by Reference)
  shopping.other.paid = false; // Will also modify groceries.other.paid (because it Pass by Reference)

  console.log("Shopping Total Price:", shopping.totalPrice);
  console.log("Groceries Total Price:", groceries.totalPrice);
  console.log("Shopping Paid:", shopping.other.paid);
  console.log("Groceries Paid:", groceries.other.paid);
};

cloneGroceries();
