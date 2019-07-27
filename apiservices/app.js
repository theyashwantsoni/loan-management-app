var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Router = require('./routers/routes');
var cors = require('cors');

var app = express();
app.use(cors());

var PORT = 8080;
var HOST_NAME = 'localhost';
var DATABASE_NAME = 'mydb';

mongoose.connect('mongodb://' + HOST_NAME + '/' + DATABASE_NAME);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api', Router);

app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});
