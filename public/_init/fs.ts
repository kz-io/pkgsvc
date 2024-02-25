import { FileProps, TemplateCallback } from '../../mod.ts';
import {
  contributing,
  denoWorkflow,
  depsTs,
  devDepsTs,
  injectableExporter,
  license,
  readme,
  rootModTs,
  srcConstantsTs,
  srcInternalsConstantsTs,
  srcInternalsModTs,
  srcModTs,
  srcTypesModTs,
} from '../_templates/mod.ts';

export const FILES: [string, string, TemplateCallback<FileProps>][] = [
  [
    'This file contains internal package features, which should not be re-exported into the public API.',
    'src/_internals/mod.ts',
    srcInternalsModTs,
  ],
  [
    'This file contains internal package constants, which should not be re-exported into the public API.',
    'src/_internals/constants.ts',
    srcInternalsConstantsTs,
  ],
  [
    'This file exports all of the package exceptions into the public API.',
    'src/exceptions/mod.ts',
    injectableExporter(),
  ],
  [
    'This file exports all of the package features, enums, type aliases, and interfaces into the public API.',
    'src/mod.ts',
    srcModTs,
  ],
  [
    'This file contains the package constants.',
    'src/constants.ts',
    srcConstantsTs,
  ],
  [
    'This file re-exports the package enums into the public API.',
    'src/types/enums.ts',
    injectableExporter(),
  ],
  [
    'This file exports the package enums.',
    'src/types/enums/mod.ts',
    injectableExporter(),
  ],
  [
    'This file contains package interfaces.',
    'src/types/interfaces.ts',
    injectableExporter(),
  ],
  [
    'This file contains package type aliases.',
    'src/types/types.ts',
    injectableExporter(),
  ],
  [
    'This file re-exports the package enums, type aliases, and interfaces into the public API.',
    'src/types/mod.ts',
    srcTypesModTs,
  ],
  [
    'This file is used to import all of the package dependencies.',
    'deps.ts',
    depsTs,
  ],
  [
    'This file is used to import all of the package development dependencies.',
    'dev_deps.ts',
    devDepsTs,
  ],
  [
    'This file re-exports source-level package features, enums, type aliases, and interfaces into the public API.',
    'mod.ts',
    rootModTs,
  ],
  ['This file contains the license for the package.', 'LICENSE', license],
  [
    'This file contains the readme for the package.',
    'README.md',
    readme,
  ],
  [
    'This file contains the contributing guidelines for the package.',
    'CONTRIBUTING.md',
    contributing,
  ],
  [
    'This file contains the GitHub Actions for the package.',
    '.github/workflows/deno.yml',
    denoWorkflow,
  ],
];
