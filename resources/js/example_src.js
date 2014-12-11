'use strict';

var Bindee = require('../../index'),
	bindee1;

var tabEvents = function () {
	bindee1.on('tabsShowIndex', function (index) {
		console.log('tab show index', index);
	});
};

window.addEventListener('load', function () {
	var tabelement = document.getElementById('tabs');
	bindee1 = new Bindee(tabelement);
	tabEvents();

	window.bindee1 = bindee1;
}, false);
