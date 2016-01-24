'use strict';

var djont = require('angular').module('djont.application', []);

djont.config(require('./routes'));
djont.controller('ApplicationController', require('./application.controller'));
