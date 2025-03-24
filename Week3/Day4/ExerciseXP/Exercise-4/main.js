document.getElementById("MyForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const radiusInput = document.getElementById("radius");
  const volumeInput = document.getElementById("volume");

  const radius = radiusInput.value;

  if (isNaN(radius) || radius <= 0) {
    alert("Please enter a valid positive number for the radius.");
    volumeInput.value = "";
    return;
  }

  const volume = (4 / 3) * 3.14 * radius ** 3;

  volumeInput.value = volume.toFixed(2);
});
