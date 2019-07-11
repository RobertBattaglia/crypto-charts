const express = require('express');
const path = require('path');

const app = express();

app.use('/', express.static(path.join(__dirname, '..', 'client', 'public')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
  if (err) {
    throw err;
  }
  console.log(`listening on port ${PORT}`);
});
