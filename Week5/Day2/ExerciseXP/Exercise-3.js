async function fetchSwapi() {
  try {
    const responce = await fetch("https://www.swapi.tech/api/starships/9/");
    if (responce.status != 200) {
      throw new Error("Something went wrong");
    } else {
      let data = await responce.json();
      console.log("data", data);
    }
  } catch (error) {}
}
fetchSwapi();
