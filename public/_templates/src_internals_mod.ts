import { createTemplate, FileProps, FilePropsPath } from '../../mod.ts';
import { fileHeader } from './partials/mod.ts';

export const srcInternalsModTs = createTemplate<
  FilePropsPath,
  FileProps
>`${fileHeader()}
//  export { ExplicitExport } from "./constants.ts";
`;
