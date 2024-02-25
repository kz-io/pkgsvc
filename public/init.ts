import { parseGlobalArgs } from '../mod.ts';
import { initTask } from './_init/main.ts';

function init(args: string[]): void {
  const options = parseGlobalArgs(args);

  initTask(options);
}

init(Deno.args);
