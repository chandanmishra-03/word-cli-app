const _ = require('lodash');
require('dotenv').config(); //instatiate environment variables

// default environment is development
const env = process.env.NODE_ENV || 'development';
const envConfig = require('./' + env);
let defaultConfig = {
  env: env
};
module.exports = _.merge(defaultConfig, envConfig);
