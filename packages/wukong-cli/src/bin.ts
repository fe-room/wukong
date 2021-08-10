#!/usr/bin/env node
import { Command } from 'commander';
const program = new Command();
import {
    dev,
    cliVersion,
  } from '.';
program.version(`@wukong/cli ${cliVersion}`);

program.command('dev').description('Run @wukong/cli webpack dev server').action(dev);
program.parse();