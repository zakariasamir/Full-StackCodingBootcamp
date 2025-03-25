(function(userName) {
  const userInfoDiv = document.getElementById("user-info");

  const userProfile = document.createElement("div");
  userProfile.classList.add("user-profile");

  const userImage = document.createElement("img");
  userImage.src = "https://i.pravatar.cc/40";
  userImage.alt = "User Profile Picture";

  const userNameText = document.createElement("span");
  userNameText.textContent = `Welcome, ${userName}!`;

  userProfile.appendChild(userImage);
  userProfile.appendChild(userNameText);

  userInfoDiv.appendChild(userProfile);
})("John");
