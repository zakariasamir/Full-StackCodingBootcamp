import fs from "fs";

const sourcePath = "source.txt";
const destinationPath = "destination.txt";

fs.readFile(sourcePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading source file:", err);
    return;
  }

  fs.writeFile(destinationPath, data, "utf8", (err) => {
    if (err) {
      console.error("Error writing to destination file:", err);
      return;
    }

    console.log(`Content copied Successfully`);
  });
});
