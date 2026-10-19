const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db'); // Menghubungkan ke db.js

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API Marketplace PetCare Connect Berjalan!');
});

app.listen(PORT, () => {
    console.log(`Server backend aktif di http://localhost:${PORT}`);
});