console.log('May Node be with you')

const express = require('express');
const app = express();

var port = 8080;

app.get('/', function(req, res){
  res.sendFile(__dirname + "/index.html")
})

app.listen(port, function() {
  console.log('listening on ' + port)
})
