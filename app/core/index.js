'use strict';

require('angular-ui-router');

var djont = require('angular').module('djont.core', [
    'ui.router'
]);

djont.config(require('./config'));
