const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false,    
  })
);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send("<h1>Hello from APP-NODE-B, Change: 3</h1>");
});

app.listen(80);