const connection = require('./config.js');

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = connection;