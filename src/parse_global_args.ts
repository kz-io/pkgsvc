// deno-lint-ignore-file no-explicit-any
import { parseArgs } from '../deps.ts';
import { CliVerbosity } from './types/mod.ts';
import { IGlobalOpts } from './types/mod.ts';

const VERBOSE = 'verbose';

function extractVerboseLevel(options: Record<string, any>): CliVerbosity {
  const level = options[VERBOSE];

  const parsedLevel = +(level === undefined ? CliVerbosity.None : level);
  const correctedLevel = parsedLevel < CliVerbosity.All
    ? CliVerbosity.All
    : parsedLevel > CliVerbosity.None
    ? CliVerbosity.None
    : parsedLevel;

  return correctedLevel as CliVerbosity;
}

function extractWhatIfFlag(options: Record<string, any>): boolean {
  const whatif = options['whatif'] === true;

  return whatif;
}

function extractTestingDir(options: Record<string, any>): string | false {
  const testing = options['testing'] || false;

  return testing;
}

function extractGlobalOpts(options: Record<string, any>): IGlobalOpts {
  const testing = extractTestingDir(options);
  const verbose = extractVerboseLevel(options);
  const whatif = extractWhatIfFlag(options);

  const globalOptions = {
    testing,
    verbose,
    whatif,
  };

  return globalOptions;
}

export function parseGlobalArgs(args: string[]): IGlobalOpts {
  const options = parseArgs(args);
  const globals = extractGlobalOpts(options);

  return globals;
}
