(function() {
  'use strict'

  angular.module('app')
    .component('dataDash', {
      controller: function($state, $http) {
        const vm = this

        vm.$onInit = onInit;
        vm.logIn = logIn;

      },
      template: `<h1>I am hardcoded template for dataDash</h1>`

      // templateUrl: "js/app/data-dash.template.html"
    })

}());
