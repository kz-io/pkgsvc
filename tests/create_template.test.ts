/**
 * This file contains tests for the createAsciiBanner function.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { assertEquals, describe, it } from '../dev_deps.ts';

import {
  fixtures,
  fixtureTemplate,
} from './fixtures/create_template.fixtures.ts';

describe('createTemplate', () => {
  it('should populate the template with data', () => {
    fixtures.forEach(({ data, expected }) => {
      const result = fixtureTemplate(data);
      assertEquals(result, expected);
    });
  });
});
