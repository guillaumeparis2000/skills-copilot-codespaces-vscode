// create web server and listen on port 3000
// to run this file, type: node comments.js
// to test, open browser and type: http://localhost:3000

// load modules
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Comment = require('./models/comment');
var app = express();

// connect to database
mongoose.connect('mongodb://localhost/commentDB');

// configure body-parser
app.use(bodyParser.urlencoded({extended: true}));

// configure routes
// serve static file (index.html, images, css)
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/scripts'));

// GET /comments - return all comments
app.get('/comments', function(req, res) {
  console.log(r
