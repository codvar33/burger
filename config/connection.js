"use strict";

// require mysql
var mysql = require("mysql");

// create a new databsae connection to the burgers_db
var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});

// initiate the connection
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else{
    connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : '',
      database : 'burgers_db'
    });
  };

// export the connection for the ORM to use
module.exports = connection;