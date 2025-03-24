document.getElementById("libform").addEventListener("submit", function (event) {
  event.preventDefault();

  const noun = document.getElementById("noun").value.trim();
  const adjective = document.getElementById("adjective").value.trim();
  const person = document.getElementById("person").value.trim();
  const verb = document.getElementById("verb").value.trim();
  const place = document.getElementById("place").value.trim();
  const storyElement = document.getElementById("story");

  if (!noun || !adjective || !person || !verb || !place) {
    alert("Please fill in all fields.");
    return;
  }

  const stories = [
    `Once upon a time, a ${adjective} ${noun} met ${person} at ${place} and decided to ${verb} together.`,
    `${person} went to ${place} and saw a ${adjective} ${noun} trying to ${verb}.`,
    `At ${place}, a ${adjective} ${noun} was ${verb} when suddenly ${person} appeared and joined in!`,
    `${person} found a ${adjective} ${noun} at ${place} and started to ${verb} uncontrollably.`,
    `In ${place}, a ${adjective} ${noun} challenged ${person} to a ${verb} competition!`
  ];

  storyElement.textContent = stories[Math.floor(Math.random() * stories.length)];
});

const shuffleButton = document.createElement("button");
shuffleButton.textContent = "Shuffle Story";
document.body.appendChild(shuffleButton);

shuffleButton.addEventListener("click", function () {
  const noun = document.getElementById("noun").value.trim();
  const adjective = document.getElementById("adjective").value.trim();
  const person = document.getElementById("person").value.trim();
  const verb = document.getElementById("verb").value.trim();
  const place = document.getElementById("place").value.trim();
  const storyElement = document.getElementById("story");

  if (!noun || !adjective || !person || !verb || !place) {
    alert("Please fill in all fields before shuffling.");
    return;
  }

  const stories = [
    `Once upon a time, a ${adjective} ${noun} met ${person} at ${place} and decided to ${verb} together.`,
    `${person} went to ${place} and saw a ${adjective} ${noun} trying to ${verb}.`,
    `At ${place}, a ${adjective} ${noun} was ${verb} when suddenly ${person} appeared and joined in!`,
    `${person} found a ${adjective} ${noun} at ${place} and started to ${verb} uncontrollably.`,
    `In ${place}, a ${adjective} ${noun} challenged ${person} to a ${verb} competition!`
  ];

  storyElement.textContent = stories[Math.floor(Math.random() * stories.length)];
});
