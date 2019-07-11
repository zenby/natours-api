const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('hello');
});

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);
app.get('/api/v1/tours', (req, res) => {
  res.status(200).send({
    status: 'success',
    data: { tours }
  });
});

app.post('/', (req, res) => {
  res.send('Posted');
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
