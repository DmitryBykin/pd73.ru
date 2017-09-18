var fs = require('fs');
var xlsx = require('xlsx');
const workSheetsFromFile = xlsx.readFile('shedule.xlsx');
//console.log(workSheetsFromFile.Sheets.Sheet1['A3'].w);
console.log(workSheetsFromFile);

var resultData;
var data = fs.readFileSync("template.html", 'utf-8');

resultData = data.toString();
//resultData+= workSheetsFromFile.Sheets.Sheet1['A3'].w;

var strToChange = "";
var numColumns = 11;
var numRows = 20;
var fields = ['A','B','C','D','E','F','G','H','I','J','K'];

for(var row = 1; row <= numRows; row++) {
  strToChange+= "<tr>"+"\n";
  for(var curColumn = 0; curColumn < numColumns; curColumn++) {
    strToChange+="<td>";

    if(workSheetsFromFile.Sheets.Лист1[fields[curColumn]+row]) { // если поле не пустое
      var par = "Лист1";
      strToChange+= workSheetsFromFile.Sheets[par][fields[curColumn]+row].w;
    }
    strToChange+="</td>"+"\n";
  }
  strToChange+="</tr>"+"\n";
}
resultData = resultData.replace("{!change_here}", strToChange);

fs.writeFile("result.html", resultData, function(err) {
  if (err) throw err;
  }
);
