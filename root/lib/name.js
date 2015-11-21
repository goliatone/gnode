/*
 * {%= title || name %}
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

'use strict';

var extend = require('gextend');
var _inherit = require('util').inherits;
var EventEmitter = require('events').EventEmitter;


var DEFAULTS = {
    autoinitialize: true
};

function {%= js_test_safe_name %}(config){
    EventEmitter.call(this);
    config = extend({}, this.constructor.DEFAULTS, config);

    if(config.autoinitialize ) this.init(config);
}

_inherit({%= js_test_safe_name %}, EventEmitter);

{%= js_test_safe_name %}.DEFAULTS = DEFAULTS;

{%= js_test_safe_name %}.prototype.init = function(config){
    if(this.initialized) return;
    this.initialized = true;

    extend(this, this.constructor.DEFAULTS, config);

};

{%= js_test_safe_name %}.prototype.logger = console;

/**
 * Exports module
 */
module.exports = {%= js_test_safe_name %};
