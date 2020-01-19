const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

const catchAsyncErrors = fn => (
  (req, res, next) => {
    const routePromise = fn(req, res, next);
    if (routePromise.catch) {
      routePromise.catch(err => next(err));
    }
  }
);

router.get('/', catchAsyncErrors(async (req, res) => {
  const { clientcookietoken } = req.query;
  const response = await fetch('https://discordapp.com/api/users/@me',
    {
      method: 'GET',
      headers: { Authorization: `Bearer ${clientcookietoken}` }
    });
  const discordUserData = await response.json();

  res.send(discordUserData);
}));

module.exports = router;
