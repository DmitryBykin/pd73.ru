var formidable= require('formidable'), 
    fs = require('fs'),
    http= require('http'),

sys = require('sys');

http.createServer(function(req, res) {

if (req.url == '/upload' && req.method.toLowerCase() == 'post') { // parse a file upload

var form= new formidable.IncomingForm(); 
form.parse(req, function(err, fields, files) {
  res.writeHead(200, {'content-type': 'text/plain'}); 
  res.write('received upload:\n\n'); 
  res.end(sys.inspect({fields: fields, files: files}));
  /*fs.rename(files.upload.path, "data/" + files.upload.name, function(err) {   
  });*/
  const spawn = require('child_process').spawn;
  const mv = spawn('mv', [files.upload.path, files.upload.name]);
  /*mv.stdout.on('data', function(data) {
    console.log('stdout: ${data}');
  });

  mv.stderr.on('data', function(data) {
    console.log('stderr: ${data}');
  });

  mv.on('close', function(code) {
    console.log('child process exited with code ${code}');
  });*/
}); return;

}

// show a file upload form

res.writeHead(200, {'content-type': 'text/html'}); res.end(
  '<form action="/upload" enctype="multipart/form-data"'+ 'method="post">'+
  '<input type="text" name="title"><br>'+
  '<input type="file" name="upload" multiple="multiple"><br>'+ '<input type="submit" value="Upload">'+
  '</form>'
); }).listen(8888);