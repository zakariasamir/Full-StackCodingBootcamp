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

const solarSystem = document.querySelector(".listPlanets");

planets.forEach(planet => {
  const planetDiv = document.createElement("div");
  planetDiv.classList.add("planet");
  planetDiv.style.backgroundColor = planet.color;
  planetDiv.textContent = planet.name;
  planetDiv.style.color = "white";
  
  planetDiv.style.display = "inline-block";
  planetDiv.style.margin = "10px";

  for (let i = 0; i < planet.moons; i++) {
      const moonDiv = document.createElement("div");
      moonDiv.classList.add("moon");

      moonDiv.style.top = `${Math.random() * 100}px`;
      moonDiv.style.left = `${Math.random() * 100}px`;

      planetDiv.appendChild(moonDiv);
  }

  solarSystem.appendChild(planetDiv);
});
