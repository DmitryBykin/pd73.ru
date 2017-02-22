/* Скрипт для модификации файла с расписанием */

var fs = require('fs');

fs.readFile('/home/web/pd73.ru/test/Schedule.html', 'utf-8', function(err, data) {
  var index = data.indexOf('schedule-frame');
  if(index == -1) {
    var replaceWhat = "parent.postMessage(d.children[0].clientHeight, '*');";
    var replaceOn   = replaceWhat + '\n' + "parent.document.getElementById('schedule-frame').height = d.children[0].clientHeight;";

    data = data.replace(replaceWhat, replaceOn);

    replaceWhat = "/// Обновим содержимое комбиков";
    replaceOn = replaceWhat + '\n' + "parent.document.getElementById('schedule-frame').height = d.children[0].clientHeight;";
    var re = new RegExp(replaceWhat, 'g');
    data = data.replace(re, replaceOn);

    fs.writeFile('/home/web/pd73.ru/test/Schedule.html', data, function(err) {
      if (err) throw err;
      //console.log('It\'s saved!');
    } );
  }
});


/*
  parent.document.getElementById('schedule-frame').height = d.children[0].clientHeight;
*/
