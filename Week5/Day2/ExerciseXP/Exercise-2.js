const fetchGiphy = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    if (response.status == 400) {
      throw new Error("Something went wrong");
    } else {
      let data = await response.json();
      console.log("data", data);
    }
  } catch (err) {
    console.log("In the catch ", err);
  }
};

fetchGiphy(
  "https://api.giphy.com/v1/gifs/search?q=sun&offset=2&limit=10&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
);
