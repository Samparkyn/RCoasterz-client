const express    = require('express');
const bodyParser = require('body-parser');
const cors       = require('cors')
const app        = express();
const port       = 8000;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

const coasterData = require('../coaster-mock-data.json')
const parsedCoasterData = JSON.stringify(coasterData)
const parkData = require('../park-mock-data.json')
const parsedParkData = JSON.stringify(parkData)


app.listen(port, () => {
  console.log("Ready on port:", port);
});

app.get('/coaster-data', function (req, res) {
  res.header("Content-Type",'application/json');
  res.send(parsedCoasterData);
})

app.get('/park-data', function (req, res) {
  res.header("Content-Type",'application/json');
  res.send(parsedParkData);
})