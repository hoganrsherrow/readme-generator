const fs = require('fs');
const { resolve } = require('path');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            // If error
            if (err) {
                reject(err);
                return;
            }
            // Otherwise
            resolve({
                ok: true,
                message: 'File Created'
            });
        });
    });
};
module.exports = writeFile;