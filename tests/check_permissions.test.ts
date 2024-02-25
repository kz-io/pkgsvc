/**
 * This file contains tests for the checkPermissions function.
 *
 * NOTE: We test using the internal checkPermissions function, so we can test
 * without requiring interactive user input.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { assertEquals, describe, it } from '../dev_deps.ts';

import { fixtures } from './fixtures/check_permissions.fixtures.ts';

const filename = './tests/fixtures/check_permissions.exec.ts';
describe('checkPermissions', () => {
  it('should check permissions granted by flags', () => {
    fixtures.forEach(({ args, expected, permissions }, i) => {
      const cmd = new Deno.Command(Deno.execPath(), {
        args: [
          'run',
          ...args,
          filename,
          `--permissions=${JSON.stringify(permissions)}`,
        ],
        stdin: 'null',
        stdout: 'piped',
        stderr: 'null',
      });
      const { stdout } = cmd.outputSync();
      const output = new TextDecoder().decode(stdout);
      const result = output.trim() === 'true';

      assertEquals(
        result,
        expected,
        `Test case ${i + 1} failed. Expected ${expected}, got ${result}`,
      );
    });
  });
});
