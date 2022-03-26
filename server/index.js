const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());

app.get('/offers', (req, res) => {
  fs.readFile('./data/data.json', (err, json) => {
    let obj = JSON.parse(json);
    const { offset, limit } = req.query;
    setTimeout(() => {
      return res.json(
        {
          offers: obj.offers
            .slice(Number(offset), Number(offset) + Number(limit))
            .map((offer) => ({
              id: offer.id,
              name: offer.carGroupInfo.modelExample.name,
              imgUrl: offer.carGroupInfo.modelExample.imageUrl,
              price: offer.prices.basePrice.amount.value,
              total: obj.offers.length,
            })),
            offersTotal: obj.offers.length
        }
      );
    }, 2000); // time to show loading state
  });
});

const server = app.listen(3001, () => {
  console.log('listening on port %s...', server.address().port);
});
