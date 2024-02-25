import { createTemplate, FileProps, FilePropsPath } from '../../mod.ts';
import { fileHeader } from './partials/mod.ts';

export const srcModTs = createTemplate<FilePropsPath, FileProps>`${fileHeader()}
export * from "./exceptions/mod.ts";
export * from "./types/mod.ts";
// export { ExplicitExport } from "./constants.ts";
`;
