import { createTemplate, FileProps, FilePropsPath } from '../../mod.ts';
import { fileHeader } from './partials/mod.ts';

export const srcConstantsTs = createTemplate<
  FilePropsPath,
  FileProps
>`${fileHeader()}
/**
 * The current release version of the package.
 */
export const VERSION = "${'pkg.version'}";
`;
