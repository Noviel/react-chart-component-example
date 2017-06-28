const express = require('express');

const { port, ip, assets } = require('./config');

const app = express();

app.use(express.static(assets));

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: assets });
});

app.listen(port, ip, () => {
  console.info(`Server started on ${ip}:${port}...`);
});
