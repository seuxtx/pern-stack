const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres', // Replace with your PostgreSQL username
  host: 'localhost',      // Replace with your host, e.g., 'localhost'
  database: 'tf2_inventory', // Your database name
  password: 'postgres', // Replace with your PostgreSQL password
  port: 5433,             // Default PostgreSQL port
});

module.exports = pool;
