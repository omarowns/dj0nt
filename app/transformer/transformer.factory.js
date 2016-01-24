'use strict';

TransformerFactory.$inject = [];

function TransformerFactory() {
    var service = {
        transform: transform
    };
    return service;

    ///////////////

    function transform(text) {
        return text;
    }
}

module.exports = TransformerFactory;
