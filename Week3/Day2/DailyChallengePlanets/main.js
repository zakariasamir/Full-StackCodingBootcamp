// Array of planets with their properties
const planets = [
  { name: "Mercury", color: "gray", moons: 0 },
  { name: "Venus", color: "yellow", moons: 0 },
  { name: "Earth", color: "blue", moons: 1 },
  { name: "Mars", color: "red", moons: 2 },
  { name: "Jupiter", color: "orange", moons: 79 },
  { name: "Saturn", color: "goldenrod", moons: 83 },
  { name: "Uranus", color: "lightblue", moons: 27 },
  { name: "Neptune", color: "darkblue", moons: 14 }
];

// Select the section where planets will be displayed
const solarSystem = document.querySelector(".listPlanets");

// Loop through planets array and create elements
planets.forEach(planet => {
  // Create a div for the planet
  const planetDiv = document.createElement("div");
  planetDiv.classList.add("planet");
  planetDiv.style.backgroundColor = planet.color;
  planetDiv.textContent = planet.name;
  planetDiv.style.color = "white";
  
  // Position planets in a row
  planetDiv.style.display = "inline-block";
  planetDiv.style.margin = "10px";

  // Create moons
  for (let i = 0; i < planet.moons; i++) {
      const moonDiv = document.createElement("div");
      moonDiv.classList.add("moon");

      // Position moons randomly around the planet
      moonDiv.style.top = `${Math.random() * 100}px`;
      moonDiv.style.left = `${Math.random() * 100}px`;

      // Append the moon to the planet
      planetDiv.appendChild(moonDiv);
  }

  // Append the planet to the solar system section
  solarSystem.appendChild(planetDiv);
});
