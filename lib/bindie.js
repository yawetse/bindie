/*
 * bindie
 * http://github.com/yawetse/bindie
 *
 * Copyright (c) 2014 Yaw Joseph Etse. All rights reserved.
 */
'use strict';

var ejs = require('ejs'),
	events = require('events'),
	extend = require('util-extend'),
	util = require('util');

/**
 * A module that represents a bindie object, a componentTab is a page composition tool.
 * @{@link https://github.com/typesettin/bindie}
 * @author Yaw Joseph Etse
 * @copyright Copyright (c) 2014 Typesettin. All rights reserved.
 * @license MIT
 * @constructor bindie
 * @requires module:ejs
 * @requires module:events
 * @requires module:util-extend
 * @requires module:util
 * @param {object} el element of tab container
 * @param {object} options configuration options
 */
var bindie = function (options) {
	events.EventEmitter.call(this);

	var defaultOptions = {
		ejsdelimiter: '?',
	};
	this.options = extend(defaultOptions, options);
	ejs.delimiter = this.options.ejsdelimiter;

	this.binders = {};
	this.update = this._update;
	this.render = this._render;
	this.addBinder = this._addBinder;
};

util.inherits(bindie, events.EventEmitter);

/**
 * adds a data property binding to an html element selector
 * @param {object} options prop,elementSelector,binderType, binderValue, listenerEventArray
 */
bindie.prototype._addBinder = function (options) {
	try {
		// var el = document.querySelector(options.elementSelector);
		this.binders[options.prop] = {
			binder_el_selector: options.elementSelector,
			binder_type: options.binderType || 'value',
			binder_template: options.binderTemplate,
			binder_update_callback: options.binderCallback
		};

		this.emit('addedBinder', this.binders[options.prop]);
	}
	catch (e) {
		throw new Error(e);
	}
};

/**
 * this will update your binded elements ui, once your bindie object is updated with new data
 * @param  {object} options data
 */
bindie.prototype._update = function (options) {
	var binder,
		binderElement,
		binderData,
		binderTemplate;
	try {
		this.data = options.data;

		for (var prop in this.data) {
			binder = this.binders[prop];
			binderElement = document.querySelector(binder.binder_el_selector);
			binderData = this.data[prop];
			binderTemplate = binder.binder_template;
			if (binder.binder_type === 'value') {
				binderElement.value = binderData;
			}
			else if (binder.binder_type === 'innerHTML') {
				binderElement.innerHTML = binderData;
			}
			else if (binder.binder_type === 'template') {
				binderElement.innerHTML = this.render({
					data: binderData,
					template: binderTemplate
				});
			}

			if (binder.binder_update_callback && typeof binder.binder_update_callback === 'function') {
				binder.binder_update_callback({
					prop: prop,
					binder_el_selector: binder.binder_el_selector,
					data: binderData
				});
			}
		}
		this.emit('updatedBindee', options.data);
	}
	catch (e) {
		throw new Error(e);
	}
};

/**
 * render element template with new data
 * @param  {object} options template, data
 * @return {string}         rendered html fragment
 */
bindie.prototype._render = function (options) {
	try {
		var binderhtml = ejs.render(options.template, options.data);
		this.emit('renderedBinder', options.data);
		return binderhtml;
	}
	catch (e) {
		throw new Error(e);
	}
};
module.exports = bindie;
