const path = require('path');

require('ignore-styles');

require('@babel/register')({
  ignore: [/(node_modules)/],
  configFile: path.resolve(__dirname, '../babel.config.js'),
});

require('./express.js');
