import { parseGlobalArgs } from '../../mod.ts';

const args = Deno.args;
const globalOpts = parseGlobalArgs(args);

console.log(JSON.stringify(globalOpts));
