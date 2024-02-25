import { parseArgs } from '../../deps.ts';

import { checkPermissions } from '../../src/_internal/mod.ts';

const args = Deno.args;
const options = parseArgs(args);

if (!options['permissions']) {
  console.log('--permissions not set');
  Deno.exit(1);
}

const permissions = JSON.parse(
  options['permissions'],
) as Deno.PermissionDescriptor[];

const result = await checkPermissions(permissions, false);

console.log(result);
