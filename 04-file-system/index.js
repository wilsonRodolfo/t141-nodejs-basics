const fs = require('fs');

//NÃO FAZER, JEITO ERRADO
const fileContent = fs.readFileSync('./students.txt', 'utf8');
console.log(fileContent);
console.log('xurupitas\'s');

function printFileContent(error, data) {
    if(error) {
        console.log('File not found! ', error);
        return
    }
    console.log(data);
}

fs.readFile('./students.txt', 'utf8', printFileContent)
console.log('xurupitas\'s');