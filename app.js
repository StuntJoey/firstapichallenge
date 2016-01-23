'use strict';

var express = require('express');
var app = express();
var times = require('./app/controllers/times');


app.use(express.static('public'));

app.get('/:date', times.time);
    

app.listen(8080,  function () {
	console.log('Node.js listening on port 8080');
});

