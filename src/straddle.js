const express = require('express');
const router = express.Router();

router.get('/info', (req, res) => {
  res.json({
    secret_api_key: process.env.REACT_APP_STRADDLE_SECRET_API_KEY
  });
});

module.exports = router;