var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  selectAll: function (cb) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function (burger_name, cb) {
    var queryString = "INSERT INTO burgers(burger_name, devoured) VALUES (?, false)"
    console.log(queryString);
    connection.query(queryString, burger_name, function (err, result) {
      if (err) throw err;
      cb(result);
    }
    );
  },
  updateOne: function (id, cb) {
    var queryString = "UPDATE burgers SET devoured=true WHERE id=(?)";
    connection.query(queryString, id, function (err, result) {
      if (err) throw err;
      cb(result);
    }
    );
  }
};

module.exports = orm;
