require('dotenv').config({ debug: process.env.DEBUG });
const express = require('express');
const fetch = require('node-fetch');
const btoa = require('btoa');

const router = express.Router();

const catchAsyncErrors = fn => (
  (req, res, next) => {
    const routePromise = fn(req, res, next);
    if (routePromise.catch) {
      routePromise.catch(err => next(err));
    }
  }
);

const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID;
const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET;

const redirect = encodeURIComponent('http://localhost:5000/api/discord/callback');

router.get('/login', (req, res) => {
  res.redirect(`https://discordapp.com/api/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&scope=identify&response_type=code&redirect_uri=${redirect}`);
});

router.get('/callback', catchAsyncErrors(async (req, res) => {
  if (!req.query.code) throw new Error('NoCodeProvided');
  const { code } = req.query;
  const creds = btoa(`${DISCORD_CLIENT_ID}:${DISCORD_CLIENT_SECRET}`);
  const response = await fetch(`https://discordapp.com/api/oauth2/token?grant_type=authorization_code&code=${code}&redirect_uri=${redirect}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${creds}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    });
  const json = await response.json();
  // cookie expires in: minute(ms) * nr.of.minutes
  const cookieOptions = {
    maxAge: 60000 * 60,
    httpOnly: false,
    signed: false
    // signed: true   => cookieParser(secret, options)
  };
  res.cookie('discordHAXROAuthToken', json.access_token, cookieOptions);
  res.redirect('http://localhost:3000/');
  // Use token for AUTH CONTEXT or something ...
}));

module.exports = router;
