const { Pool } = require('pg')
 
const pool = new Pool({
    user: "postgres",
    password: "password",
    database: "postgres",
    host: "database-instance.c6bi5vjpqcxm.sa-east-1.rds.amazonaws.com",
    port: 5432,
    ssl: true,
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
});

module.exports = {
    query: (text, params) => pool.query(text, params),
}
