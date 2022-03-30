const pgp = require('pg-promise')();
const db = pgp({
	user: 'postgres',
	password: '12345',
	host: 'localhost',
	port: 5432,
	database: 'blog'
});

module.exports = db;