import { Cli, PackageProps, readDenoConfig } from '../../mod.ts';

export async function request(
  root: string,
  cli: Cli,
  repo: string,
): Promise<PackageProps> {
  const config = await readDenoConfig(root) as PackageProps;
  const { pkg, deps } = config;

  cli.describe('These next few options are about your package.');

  const pkgName = cli.prompt('Package name', {
    required: true,
    default: pkg?.name || repo,
  })!;

  const pkgDesc = cli.prompt('Package description', {
    required: true,
    default: pkg?.description || '',
  })!;

  const pkgVersion = cli.prompt('Package version', {
    required: true,
    default: pkg?.version || '0.0.1',
  })!;

  cli.describe('These next few options are about the package dependencies.');

  const denoVersion = cli.prompt('Deno version', {
    required: true,
    default: deps?.deps?.deno || '1.20.0',
  })!;

  const denStdVersion = cli.prompt('Deno std version', {
    required: true,
    default: deps?.deps?.denoStd || '0.213.0',
  })!;

  const kzioVersion = cli.prompt('kz.io version or branch', {
    required: true,
    default: deps?.deps?.kzio || 'dev',
  })!;

  cli.describe('These next couple options are about the package stability.');

  const isStable = cli.promptYesNo('Is this a stable release?', {
    required: true,
    default: pkg?.status === 'stable' ? 'Y' : 'N',
  })!;

  const isDepr = cli.promptYesNo('Is this release deprecated?', {
    required: true,
    default: pkg?.status === 'deprecated' ? 'Y' : 'N',
  })!;

  const date = new Date();

  const pkgProps: PackageProps = {
    pkg: {
      name: pkgName,
      description: pkgDesc || pkgDesc,
      version: pkgVersion,
      status: isStable ? 'stable' : isDepr ? 'deprecated' : 'unstable',
    },
    meta: {
      date: date.toISOString(),
      year: date.getFullYear().toString(),
    },
    deps: {
      deps: {
        deno: denoVersion,
        denoStd: denStdVersion,
        kzio: kzioVersion,
      },
      devDeps: {
        denoStd: denStdVersion,
      },
    },
  };

  return pkgProps;
}
