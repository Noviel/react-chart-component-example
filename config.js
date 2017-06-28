const path = require('path');

module.exports = {
  port: process.env.PORT || 3000,
  ip: process.env.NODE_IP || 'localhost',
  root: __dirname,
  assets: path.resolve(__dirname, './public'),
  dist: path.resolve(__dirname, './public/dist')
};
