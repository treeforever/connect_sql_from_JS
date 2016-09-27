'use strict';

const db = require('./people_db');
const searchPeople = db.searchPeople;


const name = process.argv[2];
searchPeople(name, (result) => {
    console.log('Searching ...');
    console.log(`
       Found ${result.rowCount} person(s) by the name ${name}
     ${result.rows[0].first_name} ${result.rows[0].last_name}, born ${result.rows[0].birthdate}`)
  });
