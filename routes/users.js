var express = require('express');
var router = express.Router();
const models = require('../models')
const bycrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post('/login', (req, res) => {
  const { username, password } = req.body
  models.User.findOne({
    where: {
      username: username
    }
  }).then(user => {
    if (user != null) {
      const checkPassword = bycrypt.compareSync(password, user.password);
      if (checkPassword === true) {
        const token = jwt.sign({user: user}, 'secret_key')
        res.status(200).json({message: "Success Login", data: {token: token}})
      } else {
        res.status(403).json({message: "Invalid Login"})
      }
    } else {
      res.status(403).json({message: "Invalid Login"})
    }
  })
})

router.get('/logout', (req, res) => {
  req.session.destroy(function(err) {
    // cannot access session here]
    if (err) {
      console.log(err)
    } else {
      res.redirect('/users/login')
    }
  })
})

module.exports = router;
