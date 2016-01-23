'use strict';

var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/:date', function(req, res){
    
});


app.listen(8080,  function () {
	console.log('Node.js listening on port 8080');
});