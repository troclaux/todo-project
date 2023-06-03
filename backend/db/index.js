const { Pool } = require('pg')
 
const pool = new Pool({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'db',
})

module.exports = {
    query: (text, params) => pool.query(text, params),
}
