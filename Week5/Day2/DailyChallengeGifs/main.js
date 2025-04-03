const form = document.getElementById("gifForm");
const searchInput = document.getElementById("searchInput");
const gifContainer = document.getElementById("gifContainer");
const deleteAllBtn = document.getElementById("deleteAll");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const query = searchInput.value.trim();

  if (query === "") return;

  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?tag=${query}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
    );
    if (response.status !== 200) {
      alert("Error fetching GIF. Please try again.");
      return;
    }
    const data = await response.json();

    if (!data.data || !data.data.images) {
      alert("No GIF found!");
      return;
    }

    const gifUrl = data.data.images.fixed_height.url;
    appendGif(gifUrl);
    searchInput.value = "";
  } catch (error) {
    console.error("Error fetching GIF:", error);
    alert("Failed to fetch GIF. Please try again.");
  }
});

function appendGif(gifUrl) {
  const gifItem = document.createElement("div");
  gifItem.classList.add("gif-item");

  const img = document.createElement("img");
  img.src = gifUrl;
  img.alt = "GIF";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "DELETE";
  deleteBtn.addEventListener("click", () => gifItem.remove());

  gifItem.appendChild(img);
  gifItem.appendChild(deleteBtn);
  gifContainer.appendChild(gifItem);
}

deleteAllBtn.addEventListener("click", () => {
  gifContainer.innerHTML = "";
});
