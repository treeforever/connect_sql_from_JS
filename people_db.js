'use strict';

const pg = require("pg");
const settings = require("./settings"); // settings.json

const knex = require('knex')({
  client: 'pg',
  connection: {
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
  }
});
/*Using pg to connect db;*/
// const searchPeople = (name, cb) => {
//
//   client.connect((err) => {
//     if (err) {
//       return console.error("Connection Error", err);
//     }
//     client.query("SELECT * FROM famous_people WHERE last_name = $1::text", [name], (err, result) => {
//        if(err){ throw (err); }
//        cb(result);
//       client.end();
//     });
//   });
// };

const searchPeople = (name, cb) => {
  let query = knex('famous_people').where({
    last_name: name
  }).select('*');

  query.then((result) => {
      console.log(`
        Found ${result.length} person(s) by the name ${name}
        ${result[0].first_name} ${result[0].last_name}, born ${result[0].birthdate}`)
    });
};

module.exports = {
  searchPeople: searchPeople,
  knex: knex
};
