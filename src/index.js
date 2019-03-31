
require('es6-promise').polyfill();
require('formdata-polyfill');


window.addEventListener("DOMContentLoaded", function () {
	'use strict';

	let 
	
	timer = require('./parts/timer.js'),
  form = require('./parts/form.js'),
  tabs_glazing = require('./parts/tabs_glazing.js'),
  tabs_furnish = require('./parts/tabs_furnish.js'),
  calc = require('./parts/calc.js'),
	modal = require('./parts/modal.js');
  
  
tabs_glazing();
tabs_furnish();
timer();
form();
modal();
calc();

 

});


if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }