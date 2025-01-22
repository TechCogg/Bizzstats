require('dotenv').config(); // Load environment variables from .env file

module.exports = {
  client: 'pg', // PostgreSQL client
  connection: {
    host: process.env.DB_HOST, // Use host from .env
    user: process.env.DB_USER, // Use user from .env
    password: process.env.DB_PASSWORD, // Use password from .env
    database: process.env.DB_NAME, // Use database name from .env
  },
  pool: { min: 0, max: 7 }, // Optional: connection pool settings
  migrations: {
    tableName: 'knex_migrations', // Optional: migration table name
  },
};


