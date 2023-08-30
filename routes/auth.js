var express = require('express');
var app = express();
var User = require('./../models/user');

// create user
app.post('/createuser', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    date: req.body.date
  })
  await user.save()
    .then(() => {
      res.status(200).send("user created successfully")
      return 0;
    })
    .catch(() => {
      return res;
    })
});

//get user
app.get('/getuser', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).send("user with this email doesn't exist");
  }
  if (password === user.password) {
    return res.status(200).send("login success");
  }
  else {
    return res.status(400).send("bad credentials");
  }
})

module.exports = app;