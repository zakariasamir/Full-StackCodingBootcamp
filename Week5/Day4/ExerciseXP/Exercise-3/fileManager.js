const fs = require("fs");

function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    console.log(data);
  } catch (err) {
    console.error(`Error reading file from disk: ${err}`);
  }
}

function writeFile(filePath, text) {
  try {
    fs.writeFileSync(filePath, text, "utf8");
    console.log(text);
  } catch (error) {
    console.error(`Error writing file to disk: ${error}`);
  }
}

module.exports = { readFile, writeFile };
