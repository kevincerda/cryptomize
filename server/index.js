const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, err => {
  err
    ? console.error(`Error starting server: ${err}`)
    : console.log(`Server listening on port ${port}`);
});
