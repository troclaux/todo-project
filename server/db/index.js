const { Pool } = require('pg')
const dotenv = require('dotenv').config({ path: '../../.env' });
 
const pool = new Pool({
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    // host: "192.168.0.20",
    // host: "189.6.59.232",
    host: "localhost",
    port: process.env.PGPORT,
    database: process.env.PGDATABASE
    // ssl: true,
    // dialect: "postgres",
    // dialectOptions: {
    //     ssl: {
    //         require: true,
    //         rejectUnauthorized: false
    //     }
    // },
});

module.exports = pool;
    // query: (text, params) => pool.query(text, params),
