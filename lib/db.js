 import mysql from 'mysql2/promise';

export const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Galib1234$',
  database: 'school_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});