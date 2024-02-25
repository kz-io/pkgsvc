import { parseArgs } from '../../deps.ts';
import { Cli } from '../../mod.ts';

const args = Deno.args;
const parsed = parseArgs(args);

if (!parsed['testcase']) {
  console.error('No testcase provided');
  Deno.exit(1);
}

const cli = new Cli('test', {
  verbosity: parseInt(parsed['testcase']),
});

//  test logging methods per verbosity level
//  test describe
//  test prompt features
//  test promptYesNo features
//  test confirm

//  Everything turned off
function testLogLevel(): void {
  cli.describe('describe');
  cli.write('write');
  cli.done('done');

  cli.error('error');
  cli.warn('warn');
  cli.info('info');
  cli.success('success');
  cli.debug('debug');
  cli.trace('trace');
}

// function testSimplePrompt(): void {
//   cli.prompt("What is your name?");
// }

testLogLevel();
