/**
 * This file contains tests for the createAsciiBanner function.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { exists } from '../deps.ts';
import {
  afterAll,
  assertEquals,
  beforeAll,
  describe,
  it,
} from '../dev_deps.ts';
import { denoConfigExists, readDenoConfig, writeDenoConfig } from '../mod.ts';

const dir = './tests/fixtures/deno_config';

describe('deno_config', () => {
  describe('denoConfigExists', () => {
    beforeAll(async () => {
      const dirExists = await exists(dir);

      if (dirExists) {
        await Deno.remove(dir, { recursive: true });
      }

      await Deno.mkdir(dir, { recursive: true });
    });

    afterAll(async () => {
      const dirExists = await exists(dir);

      if (dirExists) {
        await Deno.remove(dir, { recursive: true });
      }
    });

    it('should run process to create deno.jsonc', async () => {
      const result = await denoConfigExists(dir);

      assertEquals(result, false);
      await writeDenoConfig(dir, { config: true });

      const result2 = await denoConfigExists(dir);

      assertEquals(result2, true);

      const result3 = await readDenoConfig(dir);

      assertEquals(result3, { config: true });
    });
  });
});
