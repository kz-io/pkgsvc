import { Cli, getRepoDetails, IGlobalOpts } from '../../mod.ts';
import { assertPermissions } from './permissions.ts';
import { whatIfText } from './whatif.ts';
import { configureAction } from './action.ts';
import { request } from './request.ts';
import { getStyledAsciiBanner } from '../_templates/_banner.ts';

export async function initTask(options: IGlobalOpts): Promise<void> {
  const { testing, verbose, whatif } = options;
  const cwd = Deno.cwd();
  const cli = new Cli('init', {
    whatif,
    verbosity: verbose,
    rgb24Color: 0x156AFF,
    displayName: 'INIT',
    banner: getStyledAsciiBanner('kz.io'),
  });

  cli.printBanner();
  cli.describe('kz.io package scaffolding tool.');

  await assertPermissions(cli);

  const root = testing ? testing : '';
  const cleanedRoot = root.replace(/\\/g, '/').replace(/^\/|\/$/g, '').replace(
    /\/\//g,
    '/',
  );
  const rootDir = `${cwd}/${cleanedRoot}`;

  cli.info(`Scaffolding project in .${root} (${rootDir})`);

  const [org, repo] = await getRepoDetails();

  cli.debug(`org/repo: ${org}/${repo}`);

  const pkgProps = await request(rootDir, cli, repo);

  const result = await cli.asyncWhatif({
    action: 'Scaffolding Process',
    description: whatIfText(rootDir, pkgProps),
    handler: configureAction(rootDir, cli, pkgProps),
  });

  Deno.exit(result);
}
