// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  
  // insertOne: function( cols1, cols2, vals1,cb) {
  //   orm.insertOne("burgers",  cols1, cols2, vals1, function(res) {
  //     cb(res);
  //   });
  // },
  
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

  updateAll: function(objColVals, condition, cb) {
    orm.updateAll("cats", objColVals, condition, function(res) {
      cb(res);
    });
  },

};

module.exports = burger;
