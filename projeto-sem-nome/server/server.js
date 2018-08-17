const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.listen(3000, () => {
  console.log('Server started!');
});


app.use(bodyParser.json());
app.use(cors(corsOptions))

app.route('/api/get').get((req, res) => {
  res.send(200, "get");
});

app.route('/api/post').post((req, res) => {
  res.send(201, req.body);
});

app.route('/api/put/:id').put((req, res) => {
  res.send(200, req.body);
});

app.route('/api/delete/:id').delete((req, res) => {
  res.sendStatus(204);
});
