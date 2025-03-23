function hotelCost(nights) {
  const costPerNight = 140;
  return nights * costPerNight;
}

function planeRideCost(destination) {
  destination = destination.toLowerCase().trim();
  if (destination === "london") return 183;
  if (destination === "paris") return 220;
  return 300;
}

function rentalCarCost(days) {
  const costPerDay = 40;
  let totalCost = days * costPerDay;
  if (days > 10) {
      totalCost *= 0.95;
  }
  return totalCost;
}

function totalVacationCost() {
  let nights, destination, rentalDays;

  do {
      nights = parseInt(prompt("How many nights will you stay at the hotel?"), 10);
  } while (isNaN(nights) || nights <= 0);

  do {
      destination = prompt("Where are you flying to?").trim();
  } while (!destination || typeof destination !== "string");


  do {
      rentalDays = parseInt(prompt("How many days will you rent a car?"), 10);
  } while (isNaN(rentalDays) || rentalDays <= 0);


  const hotelPrice = hotelCost(nights);
  const planePrice = planeRideCost(destination);
  const carPrice = rentalCarCost(rentalDays);
  const totalCost = hotelPrice + planePrice + carPrice;


  console.log(`The hotel cost: $${hotelPrice}, the plane tickets cost: $${planePrice}, the car rental cost: $${carPrice}.`);
  console.log(`Total vacation cost: $${totalCost}`);
}


totalVacationCost();
