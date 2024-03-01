//connects to our database
const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "94072",
    host: "localhost",
    port: 5432,
    database: "bucketlist"
});

module.exports = pool;