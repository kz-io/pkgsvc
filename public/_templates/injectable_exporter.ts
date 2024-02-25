import { createTemplate, FileProps, FilePropsPath } from '../../mod.ts';
import { fileHeader } from './partials/mod.ts';

export const injectableExporter = () =>
  createTemplate<
    FilePropsPath,
    FileProps
  >`${fileHeader()}
`;
