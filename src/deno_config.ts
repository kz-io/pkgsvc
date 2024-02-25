/**
 * This file containsfunctions for working with the deno.jsonc file.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { exists } from '../deps.ts';

/**
 * Check if the `deno.jsonc` file exists in the project root directory.
 *
 * @param rootDir The root directory of the project.
 *
 * @returns Whether the `deno.jsonc` file exists.
 */
export async function denoConfigExists(rootDir: string): Promise<boolean> {
  return await exists(`${rootDir}/deno.jsonc`);
}

/**
 * Read the `deno.jsonc` file from the project root directory.
 *
 * @param rootDir The root directory of the project.
 *
 * @returns The parsed `deno.jsonc` file.
 */
export async function readDenoConfig(rootDir: string): Promise<unknown> {
  if (!(await exists(`${rootDir}/deno.jsonc`))) return {};

  const denoConfig = await Deno.readTextFile(`${rootDir}/deno.jsonc`);

  return JSON.parse(denoConfig);
}

/**
 * Write the `deno.jsonc` file to the project root directory.
 *
 * @param rootDir The root directory of the project.
 * @param config The configuration to write to the `deno.jsonc` file.
 */
export async function writeDenoConfig(
  rootDir: string,
  config: unknown,
): Promise<void> {
  const denoConfig = JSON.stringify(config, null, 2);

  await Deno.writeTextFile(`${rootDir}/deno.jsonc`, denoConfig);
}
