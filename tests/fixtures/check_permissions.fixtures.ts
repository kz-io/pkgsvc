export const fixtures = [
  {
    permissions: [
      {
        name: 'read',
        path: './tests/fixtures/check_permissions.fixtures.ts',
      },
      {
        name: 'write',
        path: './tests/fixtures/check_permissions.fixtures.ts',
      },
    ],
    args: [
      '--allow-read=./tests/fixtures/check_permissions.fixtures.ts',
      '--allow-write=./tests/fixtures/check_permissions.fixtures.ts',
    ],
    expected: true,
  },
  {
    permissions: [
      {
        name: 'net',
        host: 'example.com',
      },
    ],
    args: [
      '--allow-net=example.com',
    ],
    expected: true,
  },
  {
    permissions: [
      {
        name: 'read',
        path: './tests/fixtures/check_permissions.fixtures.ts',
      },
      {
        name: 'write',
        path: './tests/fixtures/check_permissions.fixtures.ts',
      },
    ],
    args: [],
    expected: false,
  },
  {
    permissions: [
      {
        name: 'read',
        path: './tests/fixtures/check_permissions.fixtures.ts',
      },
      {
        name: 'write',
        path: './tests/fixtures/check_permissions.fixtures.ts',
      },
    ],
    args: [
      '--allow-read=./tests/fixtures/check_permissions.fixtures.ts',
    ],
    expected: false,
  },
  {
    permissions: [
      {
        name: 'read',
        path: './tests/fixtures/check_permissions.fixtures.ts',
      },
      {
        name: 'write',
        path: './tests/fixtures/check_permissions.fixtures.ts',
      },
    ],
    args: [
      '--allow-write=./tests/fixtures/check_permissions.fixtures.ts',
    ],
    expected: false,
  },
  {
    permissions: [
      {
        name: 'net',
        host: 'example.com',
      },
    ],
    args: [],
    expected: false,
  },
] as const;
