const button = document.getElementById("button");
const name = document.getElementById("name");
const height = document.getElementById("height");
const gender = document.getElementById("gender");
const birthYear = document.getElementById("birth-year");
const homeWorld = document.getElementById("home-world");

async function fetchPeople() {
  try {
    appendLoadin(true);
    const random = Math.floor(Math.random() * 88 + 1);
    const response = await fetch(`https://www.swapi.tech/api/people/${random}`);
    const data = await response.json();
    const character = data.result.properties;
    const homeworldResponse = await fetch(character.homeworld);
    const homeworldData = await homeworldResponse.json();
    homeWorld.textContent = homeworldData.result.properties.name;
    appendData(character);
  } catch (error) {
    appendError();
  } finally {
    appendLoadin(false);
  }
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  fetchPeople();
});

function appendData(data) {
  name.textContent = data.name;
  height.textContent = `Height: ${data.height}`;
  gender.textContent = `Gender: ${data.gender}`;
  birthYear.textContent = `Birth Year: ${data.birth_year}`;
}

function appendLoadin(isLoading) {
  if (isLoading) {
    name.innerHTML =
      '<i class="fa-solid fa-spinner fa-spin-pulse fa-3x"></i> <p>Loading...</p>';
    height.innerHTML = "";
    gender.innerHTML = "";
    birthYear.innerHTML = "";
    homeWorld.innerHTML = "";
  }
}
function appendError() {
  name.textContent = "Oh No! That person isnt available.";
  height.textContent = "";
  gender.textContent = "";
  birthYear.textContent = "";
  homeWorld.textContent = "";
}
