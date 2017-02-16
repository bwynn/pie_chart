const express = require('express');
const app = express();

// config
const PORT = process.env.PORT || 8080;

// routes
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] == 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));

// server
app.listen(PORT);

console.log('port up and running on port ' + PORT);

exports = module.exports = app;
