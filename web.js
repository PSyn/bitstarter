var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('fs.readFile(index.html,buf.toString(String, 0, buffer.length)');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
