var mysql = require('mysql');

module.exports = mysql.createConnection({
  database:'zipcodeService',
  user: "root"
});

