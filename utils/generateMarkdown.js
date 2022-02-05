const fs = require('fs');

// function to write the readme file.
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'README Generated!'
      });
    });
  });
};
module.exports = writeFile;