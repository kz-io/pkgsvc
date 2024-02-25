import { PackageProps } from '../../mod.ts';

import { FILES } from './fs.ts';

// deno-lint-ignore no-explicit-any
function printAllObjectDottedPathValues(obj: any, prev: string = ''): string {
  let result = '';

  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      result += printAllObjectDottedPathValues(obj[key], prev + key + '.');
    } else {
      result += `· ${prev + key}: ${obj[key]}\n`;
    }
  }

  return result;
}

export function whatIfText(
  root: string,
  props: PackageProps,
): string {
  const text = `* The following folders would be created:
${FILES.map(([desc, file]) => `  · ${root}/${file} - ${desc}`).join('\n')}
* The deno.jsonc file would be created and populated with
  relevant values (listed below) and task for creating features.
Relevant Values:
${printAllObjectDottedPathValues(props)}`;

  return text;
}
