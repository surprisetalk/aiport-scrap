
var _ = require('underscore');
var scrap = require('./scrap.js');
var package = require('../aiport-package/package.js');

module.exports = _.union( package.installed().scrap.map( scrap ) );
