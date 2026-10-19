const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'petcare_db'
});

db.connect((err) => {
    if (err) {
        console.error('Koneksi database gagal:', err.message);
        return;
    }
    console.log('Berhasil terhubung ke database MySQL (petcare_db)!');
});

module.exports = db;