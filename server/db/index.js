const { Pool } = require('pg')
 
const pool = new Pool({
    user: "postgres",
    password: "password",
    host: "localhost",
    port: 5432,
    database: "todo"
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
