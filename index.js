#! /usr/bin/env node

// Requirement
require('colors');
const { program } = require('commander');

// Actions
const connect = require('./commands/connect');

// Commands
program
	.command('connect [source]')
	.description('Multiple ways to get in touch in with me')
	.action(connect);

program.parse();
