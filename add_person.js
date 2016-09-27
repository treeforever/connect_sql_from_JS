'use strict';

const knex = require ('./people_db').knex;
let first = process.argv[2];
let last = process.argv[3];
let dob = process.argv[4];


var query = knex('famous_people').insert(
  { first_name: first,
    last_name: last,
    birthdate: dob}
).then(function() {
});

knex.destroy();
