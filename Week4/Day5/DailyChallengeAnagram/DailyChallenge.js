function areAnagrams(str1, str2) {
  const normalize = (str) => str.replace(/\s+/g, "").toLowerCase();

  str1 = normalize(str1);
  str2 = normalize(str2);

  if (str1.length !== str2.length) return false;

  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(areAnagrams("Astronomer", "Moon starer"));
console.log(areAnagrams("School master", "The classroom"));
console.log(areAnagrams("The Morse Code", "Here come dots"));
console.log(areAnagrams("Hello", "World"));