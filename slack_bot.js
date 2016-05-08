"use strict";

const rp = require('request-promise');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Start Adding your solution here.

exports.listen = function(port, callback) {
  callback = (typeof callback != 'undefined') ? callback : () => {
    console.log('Listening on ' + port + '...');
  };
  app.listen(port, callback);
};
