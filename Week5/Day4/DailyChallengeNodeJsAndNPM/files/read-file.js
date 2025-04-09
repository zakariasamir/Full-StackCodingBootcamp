import fs from "fs";
function readFile() {
  fs.readFile('files/file-data.txt', "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    console.log(`Content of file-data.txt`);
    console.log(data);
  });
}

export default readFile;