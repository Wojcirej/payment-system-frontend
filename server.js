var express = require('express');
var path = require('path');
require('dotenv').config();
var app = express();
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
app.listen(process.env.PORT || 3001);
