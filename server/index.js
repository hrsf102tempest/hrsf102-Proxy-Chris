const express = require('express');
const path = require('path');
const app = express();
const fetch = require('node-fetch');
const port = process.env.PORT || 3000;

const reservations = 'http://localhost:3001/businesses';
const photos = 'http://localhost:3002/businesses';
const reviewers = 'http://localhost:3003/reviewers';
const restaurants = 'http://localhost:3003/restaurants';
const header = 'http://localhost:3004/business';

app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/reservations/:busId', (req, res) => {
  const busId = req.params.busId;
  fetch(`${reservations}/${busId}`)
    .then(res => res.json())
    .then(json => res.status(200).send(json));
});

app.get('/api/photos/:busId', (req, res) => {
  const busId = req.params.busId;
  fetch(`${photos}/${busId}`)
    .then(res => res.json())
    .then(json => res.status(200).send(json));
});

app.get('/api/reviews/restaurants/:busId', (req, res) => {
  const busId = req.params.busId;
  fetch(`${restaurants}/${busId}`)
    .then(res => res.json())
    .then(json => res.status(200).send(JSON.stringify(json)));
});

app.get('/api/reviews/reviewers', (req, res) => {;
  fetch(reviewers)
    .then(res => res.json())
    .then(json => res.send(JSON.stringify(json)));
});

app.get('/api/header/:busId', (req, res) => {
  const busId = req.params.busId;
  fetch(`${header}/${busId}`)
    .then(res => res.json())
    .then(json => res.status(200).send(JSON.stringify(json)));
});



app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

