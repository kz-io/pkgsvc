import { createTemplate, FileProps, FilePropsPath } from '../../../mod.ts';

export const fileHeader = () =>
  createTemplate<FilePropsPath, FileProps>`/**
 * ${'file.description'}
 *
 * @copyright ${'meta.year'} integereleven. All rights reserved. MIT license.
 */
`;
