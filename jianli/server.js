var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(9090, function() {
 console.log('App listening at port 9090;');
 console.log(__dirname);
});