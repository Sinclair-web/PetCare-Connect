const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const pool = require('./config/database');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'PetCare Connect API running',
  });
});

pool.query('SELECT NOW()', (err, result) => {
  if (err) {
    console.error('Database gagal terhubung:', err.message);
  } else {
    console.log('Database berhasil terhubung:', result.rows[0].now);
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});