const express = require('express');

const app = express();

app.get('/', (req,res) => {
  res.send('ok');
});
exports.listen = function(port, callback) {
  callback = (typeof callback != 'undefined') ? callback : () => {
    console.log('Listening on ' + port + '...');
  };
  app.listen(port, callback);
};
