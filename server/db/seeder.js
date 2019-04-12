const data = require('../../zipcodes.js');
const db = require('./db.js');

var seeder = () => {
  data.forEach((record) => {
    const { zipcode, address, street, product_ids } = record;
    let query = 'INSERT INTO zipcodes (zipcode, address, street, product_ids) VALUES (?,?,?,?)';
    db.query(query, [zipcode, address, street, product_ids], (err, results) => {
      if (err) {
        console.log(err, null);
      } else {
        console.log('done');
      }
    });
  });
};

seeder();