'use strict';

var djont = require('angular').module('djont', [
    'djont.core',
    'djont.application',
    'djont.transformer'
]);

require('./core');
require('./application');
require('./transformer');
