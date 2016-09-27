'use strict';

const db = require('./people_db');
const searchPeople = db.searchPeople;


const name = process.argv[2];

searchPeople(name);
