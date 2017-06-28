const path = require('path');

module.exports = {
  port: process.env.PORT || 8080,
  root: __dirname,
  assets: path.resolve(__dirname, './public'),
  dist: path.resolve(__dirname, './public/dist')
};
