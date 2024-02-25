import { checkPermissions, Cli } from '../../mod.ts';

const PERMISSIONS: Deno.PermissionDescriptor[] = [
  {
    name: 'read',
    path: './',
  },
  {
    name: 'write',
    path: './',
  },
  {
    name: 'run',
    command: 'git',
  },
];

export async function assertPermissions(cli: Cli): Promise<void> {
  cli.write('(PMCK) Checking permissions');

  const result = await checkPermissions(PERMISSIONS);

  if (!result) {
    cli.error('(PMCK) Permissions were not granted');

    const trace = PERMISSIONS.map((permission) => {
      const keys = Object.keys(permission);
      return keys.map((key) =>
        `  ${key}: ${permission[key as keyof typeof permission]}`
      ).join('\n');
    });

    const traceMessage = '(PMCK) The following permissions were not granted:';
    const traceResult = trace.join('\n');
    const traceContent = `${traceMessage}\n${traceResult}`;

    cli.trace(traceContent);

    Deno.exit(1);
  } else {
    cli.done('(PMCK) Done');
  }
}
