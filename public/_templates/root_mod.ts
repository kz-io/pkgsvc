import { createTemplate, FileProps, FilePropsPath } from '../../mod.ts';
import { fileHeader } from './partials/mod.ts';

export const rootModTs = createTemplate<
  FilePropsPath,
  FileProps
>`${fileHeader()}
export * from "./src/mod.ts";
`;
