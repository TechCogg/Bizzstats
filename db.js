const knex = require('knex');
const knexfile = require('./knexfile');

const db = knex(knexfile); // Use the configuration from knexfile.js

module.exports = db;
