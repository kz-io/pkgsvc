import { createTemplate, FileProps, FilePropsPath } from '../../mod.ts';
import { fileHeader } from './partials/mod.ts';

export const srcTypesModTs = createTemplate<
  FilePropsPath,
  FileProps
>`${fileHeader()}
export * from "./enums/mod.ts";
export type { /* ExplicitExport */ } from "./interfaces.ts";
export type { /* ExplicitExport */ } from "./types.ts";
`;
