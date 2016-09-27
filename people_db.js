'use strict';

const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

const searchPeople = (name, cb) => {

  client.connect((err) => {
    if (err) {
      return console.error("Connection Error", err);
    }
    client.query("SELECT * FROM famous_people WHERE last_name = $1::text", [name], (err, result) => {
       if(err){ throw (err); }
       cb(result);
      client.end();
    });
  });
};

module.exports = {
  searchPeople: searchPeople
};
