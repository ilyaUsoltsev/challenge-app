const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());

app.get('/offers', (req, res) => {
  fs.readFile('./data/data.json', (err, json) => {
    let obj = JSON.parse(json);
    const { offset, limit } = req.query;
    //Simulating error
    // return res.status(400).send({
    //   message: 'This is an error message from server',
    // });
    //Simulating empty offers array
    // return res.json({
    //   offers: [],
    //   offersTotal: 0,
    // });
    setTimeout(() => {
      return res.json({
        offers: obj.offers
          .slice(Number(offset), Number(offset) + Number(limit))
          .map((offer) => ({
            id: offer.id,
            name: offer.carGroupInfo.modelExample.name,
            imgUrl: offer.carGroupInfo.modelExample.imageUrl,
            price: offer.prices.basePrice.amount.value,
          })),
        offersTotal: obj.offers.length,
      });
    }, 2000); // time to show loading state
  });
});

const server = app.listen(3001, () => {
  console.log('listening on port %s...', server.address().port);
});
