// DB connection
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/default', { useNewUrlParser: true });

const express = require("express");
const cors = require('cors')

// var path = require('path');
const serverless = require('serverless-http');

const Filter = require('bad-words');
const filter = new Filter();

const app = express();
const router = express.Router();

const userSchema = mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String},
  initials: {type: String, required: true},
  score: {type: Number, required: true},
});

const User = mongoose.model('User', userSchema);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

router.get('/ping', (req, res) => {
  res.send('pong!');
});

router.get('/', (req, res) => {
  res.send('try /user/leaderboard');
});

// Get users record
router.get('/user/leaderboard', (req,res) => {
  User.find()
    .then( users => res.send(users))
    .catch( err => {
      res.send(err); 
    }); 
});

// Create User
router.post('/user/create', (req, res) => {
  const { initials, name } = req.body;
  let initialsProfanityCheck = filter.isProfane(initials);
  let nameProfanityCheck = filter.isProfane(name);
  if (initialsProfanityCheck || nameProfanityCheck) {
    res.status(403).send('Profanity not allowed');
  } else {
    return User.create(req.body)
      .then(user => res.send(user))
      .catch(err => res.send(err));
  }
});

// Update User
router.put('/user/update/:id', (req, res) => {
  const { initials, name } = req.body;
  let initialsProfanityCheck = filter.isProfane(initials);
  let nameProfanityCheck = filter.isProfane(name);
  if (initialsProfanityCheck || nameProfanityCheck) {
    res.status(403).send('Profanity not allowed');
  } else {
    return User.findOneAndUpdate({_id:req.params.id},{$set:req.body},{new: true})
      .then(user => res.send(user))
      .catch(err => res.send(err));
  }
});

// Delete all users
// Use this route only when db cleanup required
/*
router.post('/users/delete', (req, res) => {
    return User.deleteMany({ })
      .then(user => res.send(user))
      .catch(err => res.send(err));
});
*/

// Model routes
app.use(`/.netlify/functions/api`, router);


module.exports = app;

module.exports.handler = serverless(app);