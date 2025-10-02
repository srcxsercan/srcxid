const express = require('express');
const router = express.Router();

router.get('/info', (req, res) => {
  res.json({
    env_url: process.env.REACT_APP_PLAID_ENV_URL,
    client_id: process.env.REACT_APP_PLAID_CLIENT_ID,
    user_token: process.env.REACT_APP_PLAID_USER_TOKEN,
    recovery_code: process.env.REACT_APP_PLAID_RECOVERY_CODE
  });
});

module.exports = router;