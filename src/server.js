require('dotenv').config();
const express = require('express');
const routes = require('./routes')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');

app.use(bodyParser.json())

const corsOptions = {
  origin: 'https://simple-bookstore-api.com',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use('/', routes);

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`The app is listening on port ${port}`);
});
