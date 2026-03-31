const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
require('dotenv').config();

const app = express();
app.use(cors());

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'practice_db',
  port: Number(process.env.DB_PORT || 3306),
  waitForConnections: true,
  connectionLimit: 10,
});

app.get('/tickets', async (_req, res) => {
  try {
    const [rows] = await pool.query('SELECT user_name, event, seat_no FROM tickets');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching tickets', err);
    res.status(500).json({ error: 'Database error' });
  }
});

const PORT = process.env.PORT || 4002;
app.listen(PORT, () => {
  console.log(`Tickets backend running on http://localhost:${PORT}`);
});
