/**
 * This file contains tests for the createAsciiBanner function.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import {
  assertEquals,
  assertMatch,
  assertNotMatch,
  describe,
  it,
} from '../dev_deps.ts';

import {
  Cli,
  printNameFixtures,
  verbosityFixtures,
} from './fixtures/cli.fixtures.ts';

const filename = './tests/fixtures/cli.exec.ts';
describe('Cli', () => {
  it('should accept a name and displayName configuration', () => {
    printNameFixtures.forEach(({ args, expected }) => {
      const cli = new Cli(args[0], args[1]);
      const result = cli.printName;

      assertEquals(result, expected);
    });
  });
  describe('print level verbosity', () => {
    it('should permit verbosity levels', () => {
      verbosityFixtures.forEach(({ level, expected, unexpected }) => {
        const cmd = new Deno.Command(Deno.execPath(), {
          args: [
            'run',
            filename,
            `--testcase=${level}`,
          ],
          stdin: 'null',
          stdout: 'piped',
          stderr: 'null',
        });
        const { stdout } = cmd.outputSync();
        const output = new TextDecoder().decode(stdout);

        expected.forEach((message) => {
          assertMatch(output, new RegExp(message), `${level}`);
        });

        unexpected.forEach((message) => {
          assertNotMatch(output, new RegExp(message), `${level}`);
        });
      });
    });
  });

  // TODO(@ebntly): Add tests for prompt, promptYesNo, and confirm
  //                Complex due to Deno.Command
  // describe('prompt', () => {
  //   it('should prompt with a simple message', () => {
  //   });

  //   it('should prompt with a simple message and default value', () => {
  //   });

  //   it('should prompt required with a simple message', () => {
  //   });

  //   it('should prompt yes/no with a simple message', () => {
  //   });

  //   it('should prompt yes/no with a simple message and default value', () => {
  //   });

  //   it('should prompt required yes/no with a simple message and default value', () => {
  //   });

  //   it('should confirm with a simple message', () => {
  //   });
  // });
});
