#!/usr/bin/env node
/*
 * {%= name %}
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

'use strict';

require('yargonaut')
  .style('cyan')
  .helpStyle('green.bold')
  .style('yellow', 'required');

var argv = require('yargs')
    .usage('Usage: $0 <command> [options]')
      .version( function() {
  		return 'cicerone version: ' + require( '../package' ).version;
        })
      .help('h')
      .alias('h', 'help')
      .alias( 'help', '?' )
      .epilog('MIT License 2015')
      .argv;
