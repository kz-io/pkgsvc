/**
 * This file contains tests for the createAsciiBanner function.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { assertEquals, describe, it } from '../dev_deps.ts';
import { getRepoDetails } from '../mod.ts';

describe('getRepoDetail', () => {
  it('should get a filename from a feature name', async () => {
    const result = await getRepoDetails();

    assertEquals(result, ['kz-io', 'pkgsvc']);
  });
});
