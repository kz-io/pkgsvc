/**
 * This file contains functions for getting the git repo details.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

const DEC = new TextDecoder('utf-8');

/**
 * Get the organization and repository name for the git repository.
 *
 * @returns The organization and repository name for the git repository.
 */
export async function getRepoDetails(): Promise<[string, string]> {
  const regex = /\/([\w\-]+)\/([\w\-]+)/;
  const cmd = new Deno.Command('git', {
    args: ['remote', '-v'],
    stdout: 'piped',
  });

  const p = cmd.spawn();

  const { stdout } = await p.output();
  const outStr = DEC.decode(stdout);
  const [line] = outStr.split('\n');

  const matches = regex.exec(line || '');

  if (!line || !matches) {
    throw new Error(
      `Unable to get git repo info for path ${import.meta.url}`,
    );
  }

  const [_match, org, repo] = matches;
  const result: [string, string] = [org, repo];

  return result;
}
