'use strict';

DjenterFilter.$inject = [];

function DjenterFilter() {
    return function(input) {
        input = input || '';
        var regexp = /([aeiou])/gi;
        var out = input.replace(regexp, '0');
        return out;
    }
}

module.exports = DjenterFilter;
