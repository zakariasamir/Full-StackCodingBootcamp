const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let name = "";

for (let i = 0; i < names.length; i++) {
  name += names[i][0];
}
console.log(name.split('').sort().join('')); // JackPhilipSarahAmandaBernardKyle