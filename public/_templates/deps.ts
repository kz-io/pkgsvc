import { createTemplate, FileProps, FilePropsPath } from '../../mod.ts';
import { fileHeader } from './partials/mod.ts';

export const depsTs = createTemplate<
  FilePropsPath,
  FileProps
>`${fileHeader()}
export { Exception, type BaseExceptionInit } from "https://denopkg.com/kz-io/core-exceptions${'deps.deps.kzio'}/mod.ts";
`;
