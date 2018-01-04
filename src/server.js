const express = require('express');
const routes = require('./routes')
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use('/', routes)

const port = 3001;


app.listen(port, () => {
  console.log(`The app is listening on port ${port}`);
});
