const express = require('express');
const path = require('path');

const router = express.Router();

/* Set homepage to React build
    Will throw error if react not build
*/
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../react-client-build', 'index.html'));
});

module.exports = router;
