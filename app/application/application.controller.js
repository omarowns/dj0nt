'use strict';

ApplicationController.$inject = ['transformer'];


function ApplicationController(transformer) {
    var vm = this;
    vm.change = change;
    activate();

    ////////////////

    function activate() {
    }

    function change() {
        vm.djonted = transformer.transform(vm.input);
    }
}

module.exports = ApplicationController;
