# kz.io Package Services

This repo is maintained along-side [repo-template]. The repo template contains a deno.jsonc file that references the services here as tasks.

> This package will eventually be broken up. Once the `cli` package is complete, the repo will be re-written using `cli` package features.

## Utilities

### init

Scaffolds the project structure.

```
deno task init
```

If no options are provided in the command, they are prompted interactively.

| Option       | Short | Type     | Description                                                                         |
| ------------ | ----- | -------- | ----------------------------------------------------------------------------------- |
| `--name`     | `-n`  | `string` | The name of the package.                                                            |
| `--version`  | `-v`  | `string` | The package version.                                                                |
| `--unstable` | `-U`  | flag     | Flag specifying the package version is stable.                                      |
| `--deno`     | `-d`  | `string` | The initial Deno version (for testing)                                              |
| `--kzio`     | `-k`  | `string` | The initial kz.io version (for common-types and common-exceptions (later for core)) |
| `--whatif`   |       | flag     | Whether to perform a dry run. Simply acts out the process without performing it.    |
| `--verbose`  |       | `number` | The output verbosity level (0 - 4).                                                 |
| `--testing`  |       | `string` | The output directory if testing.                                                    |

### new

Scaffolds a new feature or type.

```
deno task new [type, [name]]
```

| Type                | Min/Short | Description                                                        |
| ------------------- | --------- | ------------------------------------------------------------------ |
| `class`             | `c`       | Create a class                                                     |
| `exception`         | `ex`      | create an exception                                                |
| `function`          | `f`       | create a function                                                  |
| `decorator`         | `de`      | create a decorator                                                 |
| `value`             | `v`       | create a value (Singleton/constant, will be determined when asked) |
| `enum`              | `en`      | create an enum                                                     |
| `type-alias-object` | `to`      | create an object type alias                                        |
| `type-alias-func`   | `tf`      | create a function type alias                                       |
| `type-alias`        | `ta`      | create a value type alias (generic)                                |
| `interface`         | `i`       | create an interface                                                |

| Option       | Short | Type     | Description                                                                                                                        |
| ------------ | ----- | -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `--internal` | `-I`  | flag     | Flag specifying the feature is internal. For types, it is not exported in `mod.ts`, otherwise it goes into the `_internal` folder. |
| `--whatif`   |       | flag     | Whether to perform a dry run. Simply acts out the process without performing it.                                                   |
| `--verbose`  |       | `number` | The output verbosity level (0 - 4).                                                                                                |

### cache

Rebuilds cache from the `deno.lock` file.

```
deno task cache
```

### release

Prepares and creates a new release.

```
deno task release [version=current]
```

- `[version]` - Optional version. Defaults to the current version of the package.

| Option       | Short | Type     | Description                                                                      |
| ------------ | ----- | -------- | -------------------------------------------------------------------------------- |
| `--major`    | `-M`  | flag     | Bump the major version.                                                          |
| `--minor`    | `-m`  | flag     | Bump the minor version.                                                          |
| `--build`    | `-b`  | flag     | Bump the build version.                                                          |
| `--revision` | `-r`  | flag     | Bump the revision version.                                                       |
| `--whatif`   |       | flag     | Whether to perform a dry run. Simply acts out the process without performing it. |
| `--verbose`  |       | `number` | The output verbosity level (0 - 4).                                              |

The version bumps can be stacked, and are processed from the top down after version rounding.

A version bump of `-Mmbr` for version `1.2.3.4` would result in a version of `2.1.1.1`.

### bump-version

A utility to update the versions of dependencies.

```
deno task bump-versions
```

| Option      | Short | Type     | Description                                                                      |
| ----------- | ----- | -------- | -------------------------------------------------------------------------------- |
| `--url`     | `-u`  | `string` | A URL location containing the version mappings.                                  |
| `--file`    | `-f`  | `string` | A file location containing the version mappings.                                 |
| `--prod`    | `-P`  | flag     | Update production dependencies (`deps.ts`)                                       |
| `--dev`     | `-D`  | flag     | Update development dependencies (`dev_deps.ts`)                                  |
| `--whatif`  |       | flag     | Whether to perform a dry run. Simply acts out the process without performing it. |
| `--verbose` |       | `number` | The output verbosity level (0 - 4).                                              |

`--file` and `--url` cannot be used together, and if both are missing, the process will be interactive. If there are dependencies not listed in the `--file` and `--url` settings, they will be addressed interactively.

### pre-commit

Performs formatting, linting, testing, and documentation generation.

```
deno task pre-commit
```

### commit

Interactive utility to craft a consistent commit.

```
deno task commit
```

| Option      | Type     | Description                                                                      |
| ----------- | -------- | -------------------------------------------------------------------------------- |
| `--whatif`  | flag     | Whether to perform a dry run. Simply acts out the process without performing it. |
| `--verbose` | `number` | The output verbosity level (0 - 4).                                              |

[repo-template]: https://github.com/kz-io/repo-template
