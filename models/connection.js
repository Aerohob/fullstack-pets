// require 'pg-promise'
const pgp = require('pg-promise')({
    query: e => {
        //print SQL query
        console.log(`Query: ${e.query}`)
    }
});


// Next give info about our specific DB
const options = {
    host: 'localhost',
    database: 'fullstack-pets'
};

const db = pgp(options);
module.exports = db;