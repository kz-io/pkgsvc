/**
 * This file contains tests for the createAsciiBanner function.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { assertEquals, describe, it } from '../dev_deps.ts';

import { fixtures } from './fixtures/parse_global_args.fixtures.ts';

const filename = './tests/fixtures/parse_global_args.exec.ts';
describe('parseGlobalArgs', () => {
  it('should parse global args', () => {
    fixtures.forEach(({ args, code: ec, expected }) => {
      const cmd = new Deno.Command(Deno.execPath(), {
        args: ['run', filename, ...args],
        stdin: 'null',
        stdout: 'piped',
        stderr: 'null',
      });
      const { code, stdout } = cmd.outputSync();
      const output = new TextDecoder().decode(stdout);
      const json = JSON.parse(output);

      assertEquals(code, ec);
      assertEquals(json, expected);
    });
  });
});
