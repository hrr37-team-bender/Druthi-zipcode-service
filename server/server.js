const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = 3004;

app.use(morgan());
app.use(bodyParser());
app.use(cors());

app.use(`/products/:id`, express.static(__dirname + '/../public'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));