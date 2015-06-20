'use strict';

var assert = require('chai').assert;
var sinon = require('sinon');
var path = require('path');
var fixture = path.resolve.bind(path, __dirname, 'fixtures');

sinon.assert.expose(assert, { prefix: '' });

var {%= js_test_safe_name %} = require('..');


describe('{%= name %}', function(){

    describe('constructor', function(){
        it('should provide a DEFAULTS object', function(){
            assert.isObject({%= js_test_safe_name %}.DEFAULTS);
        });
    });
});