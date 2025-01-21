// module.exports = {
//   development: {
//       client: 'pg', // PostgreSQL
//       connection: {
//           host: '127.0.0.1', // PostgreSQL server address
//           user: 'user', // Replace with your PostgreSQL username
//           password: 'muiz135789', // Replace with your PostgreSQL password
//           database: 'Bizzstats', // Replace with your PostgreSQL database name
//       },
//       migrations: {
//           directory: './migrations', // Where migration files will be stored
//       },
//       seeds: {
//           directory: './seeds', // Optional, where seed files will be stored
//       },
//   },
// };

module.exports = {
    client: 'pg', // PostgreSQL client
    connection: {
      host: '127.0.0.1', // Replace with your database host
      user: 'user', // Replace with your database username
      password: 'muiz135789', // Replace with your database password
      database: 'Bizzstats', // Replace with your database name
    },
    pool: { min: 0, max: 7 }, // Optional: connection pool settings
    migrations: {
      tableName: 'knex_migrations', // Optional: migration table name
    },
  };
  
