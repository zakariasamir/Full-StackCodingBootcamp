// 2
document.getElementById("navBar").setAttribute("id", "socialNetworkNavigation")
//------------------------------------

// 3
// - 1
const li = document.createElement("li")
// - 2
const logout = "Logout";
// - 3
li.textContent = logout
// - 4
const ul = document.getElementById("socialNetworkNavigation").querySelector("ul")
ul.appendChild(li)
//------------------------------------

// 4
console.log("First Link:", ul.firstElementChild.textContent);
console.log("Last Link:", ul.lastElementChild.textContent);