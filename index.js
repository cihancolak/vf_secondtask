var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('{ "response": "Hello From 4you" }');
});

app.get('/will', function (req, res) {
  res.send('{ "response": "Hello World" }');
});

app.get('/ready', function (req, res) {
  res.send('{ "response": " Great!, It works!" }');
});

app.get('/health', function (req, res) {
  // Add more comprehensive checks here (database connection, etc.)
  res.send('{ "response": "Healthy!" }'); 
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;

