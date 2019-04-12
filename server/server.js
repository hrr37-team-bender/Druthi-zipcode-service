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
  'ten_miles': 10,
  'twenty_miles': 20,
  'fifty_miles': 50,
  'hundred_miles': 100
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
      // let promises = Promise.all(results.map(record =>
      //   axios.get(`https://www.zipcodeapi.com/rest/${config.apiKey}/distance.json/${zipcode}/${record.zipcode}/mile`)
      //     .then((data)=>{ //console.log(data);
      //       return data;
      //     })
      //     .catch((error) => {console.log(error); })
      // ))
      //   .then(data => {
      //     data.map((response, index) => {
      //       let difference = response.data.distance;
      //       if (distance >= difference) {
      //         stores.push(results[index]);
      //       }
      //     });
      //     //console.log(stores, "stores");
      //   });
      //console.log(stores);
      res.status(200).json(results);
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