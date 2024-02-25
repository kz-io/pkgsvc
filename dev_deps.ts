/**
 * This file is used to define the development dependencies for the project.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

export {
  afterAll,
  beforeAll,
  describe,
  it,
} from 'https://deno.land/std@0.213.0/testing/bdd.ts';
export {
  assert,
  assertEquals,
  assertMatch,
  assertNotMatch,
  assertStringIncludes,
} from 'https://deno.land/std@0.213.0/assert/mod.ts';
export {
  assertSpyCall,
  assertSpyCalls,
  spy,
} from 'https://deno.land/std@0.213.0/testing/mock.ts';
