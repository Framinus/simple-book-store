require('dotenv').config();
const express = require('express');
const routes = require('./routes')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');

app.use(bodyParser.json())

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use('/', routes);

const port = 3001;


app.listen(port, () => {
  console.log(`The app is listening on port ${port}`);
});
