const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  // res.send("hello");
  res.json([
    {
      id: 1,
      username: "samsepi0l",
    },
    {
      id: 2,
      username: "D0loresH4ze",
    },
  ]);
});

app.listen(port, () => {
  console.log(`The app is listening on port ${port}`);
});
