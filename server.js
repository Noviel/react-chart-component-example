const express = require('express');

const { port, assets } = require('./config');

const app = express();

app.use(express.static(assets));

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: assets });
});

app.listen(port, () => {
  console.info(`Server started on http://localhost:${port}...`);
});
