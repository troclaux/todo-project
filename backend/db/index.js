const { Pool } = require('pg')
 
const pool = new Pool({
    host: 'database-2.c6bi5vjpqcxm.sa-east-1.rds.amazonaws.com',
    user: 'postgres',
    password: 'password',
    database: 'db1',
    port: 5432
});

module.exports = {
    query: (text, params) => pool.query(text, params),
}
