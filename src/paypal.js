const express = require('express');
const router = express.Router();

router.get('/info', (req, res) => {
  res.json({
    api_key: process.env.REACT_APP_PAYPAL_API_KEY,
    api_secret: process.env.REACT_APP_PAYPAL_API_SECRET,
    sandbox_username: process.env.REACT_APP_PAYPAL_SANDBOX_USERNAME,
    merchant_id: process.env.REACT_APP_PAYPAL_MERCHANT_ID
  });
});

module.exports = router;