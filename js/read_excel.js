//import xlsx from 'xlsx';
var xlsx = require('xlsx');
// Parse a file
//const workSheetsFromFile = xlsx.parse(fs.readFileSync('js/test.xlsx'));
const workSheetsFromFile = xlsx.readFile('js/test.xlsx');
console.log(workSheetsFromFile.Sheets.Sheet1['A3'].w);