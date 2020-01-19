const express = require('express');
const usersRouter = require('./users');
const discordAuth = require('./discord');
const cookieCheck = require('./cookie');

const router = express.Router();
router.use('/users', usersRouter);
router.use('/discord', discordAuth);
router.use('/cookie', cookieCheck);

router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
