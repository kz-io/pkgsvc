import { CliVerbosity } from '../../mod.ts';
export const fixtures = [
  {
    args: [
      '--testing',
      'test',
      '--verbose',
      `${CliVerbosity.Error}`,
      '--whatif',
    ],
    expected: {
      testing: 'test',
      verbose: CliVerbosity.Error,
      whatif: true,
    },
    code: 0,
  },
  {
    args: [],
    expected: {
      testing: false,
      verbose: CliVerbosity.None,
      whatif: false,
    },
    code: 0,
  },
  {
    args: ['--testing', 'test'],
    expected: {
      testing: 'test',
      verbose: CliVerbosity.None,
      whatif: false,
    },
    code: 0,
  },
  {
    args: ['--verbose', `${CliVerbosity.Trace}`],
    expected: {
      testing: false,
      verbose: CliVerbosity.Trace,
      whatif: false,
    },
    code: 0,
  },
  {
    args: ['--testing', 'test', '--verbose', `${CliVerbosity.Info}`],
    expected: {
      testing: 'test',
      verbose: CliVerbosity.Info,
      whatif: false,
    },
    code: 0,
  },
  {
    args: ['--verbose', `${CliVerbosity.Warn}`],
    expected: {
      testing: false,
      verbose: CliVerbosity.Warn,
      whatif: false,
    },
    code: 0,
  },
  {
    args: ['--testing', 'test'],
    expected: {
      testing: 'test',
      verbose: CliVerbosity.None,
      whatif: false,
    },
    code: 0,
  },
  {
    args: ['--whatif'],
    expected: {
      testing: false,
      verbose: CliVerbosity.None,
      whatif: true,
    },
    code: 0,
  },
  {
    args: ['--verbose', `${CliVerbosity.All}`],
    expected: {
      testing: false,
      verbose: CliVerbosity.All,
      whatif: false,
    },
    code: 0,
  },
] as const;
