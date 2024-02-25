/**
 * This file contains tests for the createAsciiBanner function.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { assertEquals, describe, it } from '../dev_deps.ts';
import { createFilename } from '../mod.ts';

import { fixtures } from './fixtures/create_filename.fixtures.ts';

describe('createFilename', () => {
  it('should get a filename from a feature name', () => {
    fixtures.forEach(({ feature, expected }) => {
      const result = createFilename(feature);

      assertEquals(result, expected);
    });
  });
});
