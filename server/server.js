const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./db/db.js');
const app = express();
const cors = require('cors');
const port = 3004;

app.use(morgan());
app.use(bodyParser());
app.use(cors());


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