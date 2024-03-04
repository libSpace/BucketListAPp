// Import PostgreSQL connection pool
const Pool = require("pg").Pool;

// Create a new connection pool configuration
const pool = new Pool({
    // Database user
    user: "postgres",
    
    // User password
    password: "94072",
    
    // Database host (localhost in this case)
    host: "localhost",
    
    // Port on which the PostgreSQL server is running (default is 5432)
    port: 5432,
    
    // Database name
    database: "busket_buddies"
});

// Export the created connection pool for external use
module.exports = pool;
