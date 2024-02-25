import { createTemplate, FileProps, FilePropsPath } from '../../mod.ts';
import { fileHeader } from './partials/mod.ts';

export const srcInternalsConstantsTs = createTemplate<
  FilePropsPath,
  FileProps
>`${fileHeader()}
`;
