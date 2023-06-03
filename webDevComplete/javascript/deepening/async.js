const fs = require("fs/promises");

async function readFile() {
    
    // const fileData = fs.readFile('data.txt', (error, fileData) => {
    //     console.log('File parsing done!');
    //     console.log(fileData.toString());
    // });

    fs.readFile('data.txt').then(function(fileData) {
        console.log('File parsing done!');
        console.log(fileData.toString());
    });
    console.log('Hi there!');
}

readFile();
