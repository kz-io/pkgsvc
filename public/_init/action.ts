import { Cli, PackageProps } from '../../mod.ts';
import { exists } from '../../deps.ts';
import { FILES } from './fs.ts';

async function handleAction(
  root: string,
  cli: Cli,
  props: PackageProps,
): Promise<number> {
  cli.describe('Creating initial files');

  for await (const [desc, file, template] of FILES) {
    const filePath = `${root}/${file}`;
    const dir = filePath.split('/').slice(0, -1).join('/');
    const dirExists = await exists(dir);

    if (!dirExists) {
      cli.debug(`Creating dir`);
      await Deno.mkdir(dir, { recursive: true });
    }

    cli.debug(`Creating ${filePath}`);

    const content = await template({
      ...props,
      file: {
        path: file,
        description: desc,
      },
    });

    const tickedContent = content.replace(/\&grave;/g, '`');

    await Deno.writeTextFile(filePath, tickedContent);

    const fileExists = await exists(filePath);

    if (!fileExists) {
      cli.error(`Failed to create ${filePath}`);

      return Promise.resolve(1);
    }

    cli.debug(`Created ${filePath}`);
  }

  cli.done('Done');

  return Promise.resolve(0);
}

export function configureAction(
  root: string,
  cli: Cli,
  props: PackageProps,
): () => Promise<number> {
  return async function (): Promise<number> {
    return await handleAction(root, cli, props);
  };
}
