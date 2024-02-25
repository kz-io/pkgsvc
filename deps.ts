/**
 * This file is used to import all the dependencies that are used in the project.
 *
 * This is a good practice because it makes it easier to manage dependencies and
 * to update them when needed.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

export * as colors from 'https://deno.land/std@0.213.0/fmt/colors.ts';
export {
  parseArgs,
  type ParseOptions,
} from 'https://deno.land/std@0.213.0/cli/parse_args.ts';
export { exists } from 'https://deno.land/std@0.213.0/fs/exists.ts';
