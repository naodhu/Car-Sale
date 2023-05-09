var express = require("express");
var bodyParser = require("body-parser");
const mongoose = require('mongoose');

var app = express();

// Connect to MongoDB server
mongoose.connect('mongodb://localhost:27017/gfg', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error"));
db.once('open', function () {
  console.log("MongoDB database connection established successfully");
})

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

// Define user schema and model
var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: String
});

var User = mongoose.model('User', userSchema);

// Handle POST requests to /sign_up endpoint
app.post('/sign_up', function (req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var pass = req.body.password;
  var phone = req.body.phone;

  // Create new user object using Mongoose model
  var newUser = new User({
    name: name,
    email: email,
    password: pass,
    phone: phone
  });

  // Insert new user into MongoDB database
  newUser.save()
    .then(function () {
      console.log("Record inserted successfully");
      res.redirect('/signup_success.html');
    })
    .catch(function (err) {
      console.error(err);
      res.send("Error occurred while saving the record");
    });
});

// Handle GET requests to / endpoint
app.get('/', function (req, res) {
  res.set({
    'Access-control-Allow-Origin': '*'
  });
  res.redirect('/index.html');
});

// Start server
app.listen(3000, function () {
  console.log("Server listening on port 3000");
});