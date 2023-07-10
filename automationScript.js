const fs = require('fs');

function parseTextDocument(filePath) {
    // Read the text document
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Separate the texts and numbers
    const texts = fileContent.match(/[a-zA-Z]+/g);
    const numbers = fileContent.match(/[0-9.]+/g).map(Number);

    // Create the JavaScript object
    const data = {
        texts,
        numbers,
    };

    return data;
}

// Usage
const filePath = 'example.txt';
const result = parseTextDocument(filePath);
console.log(result);
