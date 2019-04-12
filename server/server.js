const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./db/db.js');
const app = express();
const cors = require('cors');
const port = 3004;
const axios = require('axios');
const config = require('./config.js');

app.use(morgan());
app.use(bodyParser());
app.use(cors());

let distanceDictionary = {
  'ten_miles': 1000,
  'twenty_miles': 2000,
  'fifty_miles': 5000,
  'hundred_miles': 10000
};


app.get('/stores', (req, res) => {
  let distance = distanceDictionary[req.query.distance] || 'all';
  let zipcode = req.query.zipcode;
  console.log(distance, zipcode);
  let stores = [];

  db.query('SELECT * FROM zipcodes', (err, results) => {
    if (err) {
      throw err;
    }
    if (distance === 'all') {
      res.status(200).json(results);
    } else {
      results.forEach((record) => {
        if (Math.abs(Number(record.zipcode) - zipcode) <= distance) {
          stores.push(record);
        }
      });
      res.status(200).json(stores);
    }
  });
});

app.get('/checkZipcode', (req, res) => {
  let zipcode = req.query.zipcode;
  db.query(`SELECT * FROM zipcodes where zipcode=${zipcode}`, (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results);
  });
});

app.use(`/products/:id`, express.static(__dirname + '/../public'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));