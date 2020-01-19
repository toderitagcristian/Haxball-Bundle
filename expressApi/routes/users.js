const express = require('express');

const router = express.Router();

const HaxROUsers = require('../../database-init');

/* GET all jucatori from DB. */
router.get('/', (req, res) => {
  HaxROUsers.findAll().then((jucatori) => {
    if (Object.keys(jucatori).length === 0) {
      res.status(200).send('Database is empty !');
    } else {
      res.status(200).send(jucatori);
    }
  }).catch((err) => {
    res.send(err);
  });
});

router.get('/bydiscordid', (req, res) => {
  if (!req.query.discordid) {
    res.status(200).json(null);
  }
  const { discordid } = req.query;
  HaxROUsers.findOne({ where: { discordId: discordid } })
    .then((jucator) => {
      res.status(200).json(jucator);
    })
    .catch((error) => {
      console.error('[/users/bydscordid] Catch Error: ', error);
    });
});

router.param('haxball_auth_key', async (req, res, next, haxballAuthKey) => {
  HaxROUsers.findOne({ where: { haxballAuthKey: haxballAuthKey } })
    .then((jucator) => {
      req.jucator = jucator;
      next();
    }).catch(next);
});

// GET only 1 jucator
router.get('/:haxball_auth_key', (req, res) => {
  res.json(req.jucator);
});

router.post('/:haxball_auth_key/stats', (req, res) => {
  if (req.jucator === null) {
    res.status(200).json('Jucator inexistent !');
  } else {
    const valuesDb = {};
    valuesDb[req.body.stat] = req.body.value;

    HaxROUsers.update(
      valuesDb,
      { where: { haxballAuthKey: req.jucator.haxballAuthKey } }
    ).then((rowsUpdated) => {
      if (rowsUpdated[0] === 1) {
        res.status(200).json(`${req.jucator.haxballAuthKey} - ${req.jucator.discordUsername} - ${req.body.stat} - ${req.body.value}`);
      } else {
        res.status(200).json('None or too many modified !');
      }
    }).catch((err) => {
      res.send(err);
    });
  }
});

module.exports = router;
