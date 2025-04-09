const fs = require('fs');

const directoryPath = './';

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Unable to scan directory:', err);
    return;
  }

  console.log('Files in directory:');
  files.forEach(file => {
    console.log(file);
  });
});
