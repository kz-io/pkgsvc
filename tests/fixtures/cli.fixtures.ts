import { CliVerbosity } from '../../mod.ts';

export { Cli } from '../../mod.ts';

export const printNameFixtures = [
  {
    args: [
      'Test',
      {},
    ],
    expected: '\u{1b}[38;2;21;106;255m[Test]\u{1b}[39m',
  },
  {
    args: [
      'Test',
      {
        rgb24Color: 0x196CBF,
      },
    ],
    expected: '\u{1b}[38;2;25;108;191m[Test]\u{1b}[39m',
  },
  {
    args: [
      'Test',
      {
        displayName: 'Something',
      },
    ],
    expected: '\u{1b}[38;2;21;106;255m[Something]\u{1b}[39m',
  },
  {
    args: [
      'Test',
      {
        rgb24Color: 0x196CBF,
        displayName: 'Something Else',
      },
    ],
    expected: '\u{1b}[38;2;25;108;191m[Something Else]\u{1b}[39m',
  },
] as const;

export const verbosityFixtures = [
  {
    level: CliVerbosity.None,
    expected: ['describe', 'write', 'done'],
    unexpected: ['error', 'warn', 'info', 'success', 'debug', 'trace'],
  },
  {
    level: CliVerbosity.Error,
    expected: ['describe', 'write', 'done', 'error'],
    unexpected: ['warn', 'info', 'success', 'debug', 'trace'],
  },
  {
    level: CliVerbosity.Warn,
    expected: ['describe', 'write', 'done', 'error', 'warn'],
    unexpected: ['info', 'success', 'debug', 'trace'],
  },
  {
    level: CliVerbosity.Info,
    expected: ['describe', 'write', 'done', 'error', 'info', 'warn', 'success'],
    unexpected: ['debug', 'trace'],
  },
  {
    level: CliVerbosity.Debug,
    expected: ['describe', 'write', 'done', 'error', 'info', 'warn'],
    unexpected: ['trace'],
  },
  {
    level: CliVerbosity.Trace,
    expected: [
      'describe',
      'write',
      'done',
      'error',
      'info',
      'warn',
      'debug',
    ],
    unexpected: [],
  },
  // {
  //   level: CliVerbosity.Info,
  //   expected: ['describe', 'write', 'done', 'error', 'info', 'warn', 'success'],
  //   unexpected: ['debug', 'trace'],
  // },
  // {
  //   level: CliVerbosity.Log,
  //   expected: [
  //     'describe',
  //     'write',
  //     'done',
  //     'error',
  //     'log',
  //     'info',
  //     'success',
  //     'warn',
  //   ],
  //   unexpected: ['debug', 'trace'],
  // },
  // {
  //   level: CliVerbosity.Debug,
  //   expected: ['describe', 'write', 'done', 'error', 'info', 'warn'],
  //   unexpected: ['trace'],
  // },
  // {
  //   level: CliVerbosity.Trace,
  //   expected: [
  //     'describe',
  //     'write',
  //     'done',
  //     'error',
  //     'log',
  //     'info',
  //     'warn',
  //     'debug',
  //   ],
  //   unexpected: [],
  // },
] as const;
