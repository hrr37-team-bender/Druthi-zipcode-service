const data = require('../../zipcodes.js');
const db = require('./db.js');

var seeder = () => {
  data.forEach((record) => {
    const { zipcode, address, latitude, longitude, product_ids } = record;
    let query = `INSERT INTO zipcodes (zipcode, address, latitude, longitude, product_ids) VALUES (?,?,?,?,?)`;
    db.query(query, [zipcode, address, latitude, longitude, product_ids], (err, results) => {
      if(err){
        console.log(err, null);
      }else{
        console.log(results);
      }
    })
  })
};

seeder();