const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'PetCare Connect API running' }));

// app.use('/api/auth', require('./routes/authRoutes'));
// app.use('/api/pets', require('./routes/petRoutes'));

module.exports = app;