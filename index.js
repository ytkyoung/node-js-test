// const functions = require('./functions');
// console.log(functions.calculator(6, '/', 2));
const fs = require('fs');
const dataImport = require('./data.json');
console.log(dataImport);

let rawdata = fs.readFileSync('./data.json');
console.log(rawdata);
let data = JSON.parse(rawdata);

console.log(data.map((x) => x.title));

let title = data.map((x) => x.title);
console.log(title);

// let description = data.map((x) => x.description);

// console.log(description);

fs.writeFile('test.txt', rawdata, (err) => {
  if (err) throw err;
  console.log('Test Ordner erstellt!');
});
