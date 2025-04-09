import readFile from "./files/read-file.js";
import greet from "./greeting.js";
import colorfulMessage from "./colorful-message.js";

console.log(greet("John"));
colorfulMessage("Hello, colorful world!", "green");
readFile();