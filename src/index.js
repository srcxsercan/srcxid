require('dotenv').config();
const express = require('express');
const plaidRoutes = require('./plaid');
const paypalRoutes = require('./paypal');
const straddleRoutes = require('./straddle');
const axios = require('axios');

const app = express();
app.use(express.json());

app.use('/plaid', plaidRoutes);
app.use('/paypal', paypalRoutes);
app.use('/straddle', straddleRoutes);

app.get('/', (req, res) => {
  res.send('SRCXID Banka ve Ödeme Sistemi Çalışıyor!');
});

async function getInstanceId() {
  try {
    const res = await axios.get('http://169.254.169.254/latest/meta-data/instance-id');
    return res.data;
  } catch (e) {
    return null;
  }
}

app.get('/info', async (req, res) => {
  const instanceId = await getInstanceId();
  res.json({
    message: 'SRCXID Banka ve Ödeme Sistemi Çalışıyor!',
    ec2_instance_id: instanceId || 'local'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// SSH into the server using the following command:
// ssh ec2-user@<EC2_PUBLIC_IP>i-0253dce6fa58ce3df