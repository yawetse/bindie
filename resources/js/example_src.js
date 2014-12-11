'use strict';

var Bindie = require('../../index'),
	bindie1,
	yawbutton,
	rafbutton,
	ajaxbutton;

var yawprofiledata = {
		username: "@yawetse",
		profile: {
			summary: "<h2>@yawetse's profile</h2><p>probably from database</p>"
		}
	},
	rafprofiledata = {
		username: "@sonicsound",
		profile: {
			summary: "<h2>@sonicsound's profile</h2><p>probably you can overwrite render function with own template language from database</p>"
		}
	},
	ajaxprofiledata = {
		username: "@ajaxmockcall",
		profile: {
			summary: "<h2>grab this from ajax post/get</p>"
		}
	};

var loadprofile = function (e) {
	var etarget = e.target;
	if (etarget.id === 'yawbutton') {
		bindie1.update({
			data: yawprofiledata
		});
	}
	else if (etarget.id === 'rafbutton') {
		bindie1.update({
			data: rafprofiledata
		});
	}
	else if (etarget.id === 'ajaxbutton') {
		bindie1.update({
			data: ajaxprofiledata
		});
	}
};

// var tabEvents = function () {
// 	bindie1.on('tabsShowIndex', function (index) {
// 		console.log('tab show index', index);
// 	});
// };

window.addEventListener('load', function () {

	yawbutton = document.querySelector('#yawbutton');
	rafbutton = document.querySelector('#rafbutton');
	ajaxbutton = document.querySelector('#ajaxbutton');

	bindie1 = new Bindie({
		// watchers:
	});

	bindie1.addBinder({
		prop: 'username',
		elementSelector: '#username',
		binderType: 'value'
	});

	bindie1.addBinder({
		prop: 'profile',
		elementSelector: '#profile',
		binderType: 'template',
		binderTemplate: document.querySelector('#profile-template').innerHTML
	});

	yawbutton.addEventListener('click', loadprofile, false);
	rafbutton.addEventListener('click', loadprofile, false);
	ajaxbutton.addEventListener('click', loadprofile, false);
	window.bindie1 = bindie1;
}, false);