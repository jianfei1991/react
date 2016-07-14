var webpack = require('webpack');
var path    = require("path");

var BUILD_DIR = path.resolve(__dirname,'webroot/js');
var APP_DIR   = path.resolve(__dirname,'src/app');

var config = {
  entry: APP_DIR + '/tab.jsx',
  output:{
    path:BUILD_DIR,
    filename: 'tab.js'
  },
  module : {
    loaders:[
      {
        test:/\.jsx?/,
        include :APP_DIR,
        loader:'babel'
      }
    ]
  }
};

module.exports = config;