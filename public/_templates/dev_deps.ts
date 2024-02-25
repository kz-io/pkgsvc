import { createTemplate, FileProps, FilePropsPath } from '../../mod.ts';
import { fileHeader } from './partials/mod.ts';

export const devDepsTs = createTemplate<
  FilePropsPath,
  FileProps
>`${fileHeader()}
export { describe, it } from "https://deno.land/std@${'deps.deps.denoStd'}/testing/bdd.ts";
export { assert } from "https://deno.land/std@${'deps.deps.denoStd'}/assert/mod.ts";
`;
