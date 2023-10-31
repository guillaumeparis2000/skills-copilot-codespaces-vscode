// create web server with nodejs

// load modules
var express = require('express');
var bodyParser = require('body-parser');
var app = express();


// set template engine
app.set('view engine', 'ejs');

// set static files
app.use(express.static('public'));

// use body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set routes
app.get('/', (req, res) => {
  Comment.find({}, (err, comments) => {
    if (err) {
      console.log(err);
    } else {
      res.render('index', { comments: comments });
    }
  });
});

app.post('/create', (req, res) => {
  var comment = req.body.comment;
  Comment.create(comment, (err, comment) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/');
    }
  });
});

// start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
