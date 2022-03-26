const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());

app.get('/offers', (req, res) => {
  fs.readFile('./data/data.json', (err, json) => {
    let obj = JSON.parse(json);
    setTimeout(() => {
      return res.json(obj.offers);
    }, 5000); // time to show loading spinner
  });
});

const server = app.listen(3001, () => {
  console.log('listening on port %s...', server.address().port);
});
