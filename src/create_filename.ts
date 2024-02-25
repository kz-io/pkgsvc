/**
 * This file exports the createFilename function.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

/**
 * The regular expression used to create a filename from a string.
 */
const regex = /([A-Z][A-Z0-9]*(?=$|[A-Z][a-z0-9])|[A-Za-z][a-z0-9]+)/g;

/**
 * Create a filename from a feature name.
 *
 * @param name The name of the feature to create a filename for.
 *
 * @returns The filename for the feature.
 *
 * @example
 * ```ts
 * const filename = createFilename("MyFeature");
 *
 * console.log(filename);  // my_feature
 * ```
 */
export function createFilename(name: string): string {
  const match = name.match(regex);

  if (match === null) {
    return name.toLowerCase();
  }

  console.log(match);

  const result = match.join('_').toLowerCase();

  return result;
}
