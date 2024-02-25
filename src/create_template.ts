/**
 * This file exports the createTemplate function.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { Props, TemplateCallback } from './types/mod.ts';

/**
 * Access a property of an object using a string path.
 *
 * @param obj The object to access a property of.
 * @param path The path to the property to access.
 *
 * @returns The value of the property at the given path.
 *
 * @example
 * ```ts
 * const obj = {
 *   a: {
 *     b: {
 *       c: 'Hello, world!'
 *     },
 *   },
 * };
 *
 * const result = access(obj, 'a.b.c');
 *
 * console.log(result); // "Hello, world!"
 * ```
 */
function access<T extends Props = Props>(obj: T, path: string): string {
  const result = path.split('.').reduce((result, key) => {
    const value = result[key];

    return value;
  }, obj) as unknown as string;

  return result;
}

/**
 * Create a template callback function from a template string and keys.
 *
 * @param strings The template strings array.
 * @param keys The keys to use in the template.
 *
 * @returns The template callback function.
 *
 * @example
 * ```ts
 * const template = createTemplate<
 *  { name: string }
 * >`Hello, ${'name'}!`;
 *
 * const result = template({ name: 'world' });
 *
 * console.log(result); // "Hello, world!"
 * ```
 */
export function createTemplate<P extends string, T extends Props>(
  strings: TemplateStringsArray,
  ...keys: (P | TemplateCallback<T>)[]
): TemplateCallback<T> {
  const cleaned = [...strings.raw.values()];

  const callback = (props: T) => {
    const resolved = keys.reduce((result, key) => {
      const value = typeof key === 'function' ? key(props) : access(props, key);
      const next = cleaned.shift();
      const collector = `${String(result)}${value}${next}`;

      return collector;
    }, cleaned.shift() || '' as string);

    return resolved;
  };

  return callback;
}
