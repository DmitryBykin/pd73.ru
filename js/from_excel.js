var fs = require('fs');
var xlsx = require('xlsx');
var path = "/home/web/pd73.ru/test/";

const workSheetsFromFile = xlsx.readFile(path + 'schedule.xlsx');

var resultData;
var data = fs.readFileSync(path + "sched-template.html", 'utf-8');

resultData = data.toString();

var strToChange = "";
var numColumns = 11;
var numRows = 100;
var fields = ['A','B','C','D','E','F','G','H','I','J','K'];
var deleteEmpty;
for(var row = 1; row <= numRows; row++) {
  strToChange+= "<tr>";
  for(var curColumn = 0; curColumn < numColumns; curColumn++) {
    if(row === 1) strToChange+="<th>";
    else strToChange+="<td>";

    var par = 'Лист1';
    if(workSheetsFromFile.Sheets[par] != undefined)
      if(workSheetsFromFile.Sheets[par][fields[curColumn]+row]) { // если поле не пустое
        strToChange+= workSheetsFromFile.Sheets[par][fields[curColumn]+row].w;
    }
    par = "Sheet1";
    if(workSheetsFromFile.Sheets[par] != undefined)
      if(workSheetsFromFile.Sheets[par][fields[curColumn]+row]) { // если поле не пустое
        strToChange+= workSheetsFromFile.Sheets[par][fields[curColumn]+row].w;
    }
    if(row === 1) strToChange+="</th>";
    else strToChange+="</td>";
  }
  strToChange+="</tr>";
}
resultData = resultData.replace(new RegExp("{!change_here}",'g') , strToChange);

deleteEmpty = "<tr>";
for(var i = 0;i<numColumns;i++)
  deleteEmpty+="<td></td>";
deleteEmpty+="</tr>";

resultData = resultData.replace(new RegExp(deleteEmpty,'g'), "");

fs.writeFile(path + "sched.html", resultData, function(err) {
  if (err) throw err;
  }
);
