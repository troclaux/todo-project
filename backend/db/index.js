const { Pool } = require('pg')
 
const pool = new Pool({
    host: '/cloudsql/myproject:zone:mydb',
    user: 'username',
    password: 'password',
    database: 'database_name',
})

module.exports = {
    query: (text, params) => pool.query(text, params),
}
