const fs = require("fs");

function readFile() {
    try{
        const fileData = fs.readFileSync('data.json');
    } catch(e) {
        console.log('An error Occurred!');
        console.log(e.message);
    }
    
    console.log('Hi there!');
}

readFile();
