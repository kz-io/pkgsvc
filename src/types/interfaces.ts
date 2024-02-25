/**
 * This file export interfaces used in the project.
 *
 * For type aliases, see `types.ts`.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { CliVerbosity } from './enums/mod.ts';

/**
 * Describes options for the {@link Cli} class.
 */
export interface ICliOptions {
  /**
   * The verbosity level for the {@link Cli} instance.
   */
  verbosity: CliVerbosity;

  /**
   * The RGB24 color for the {@link Cli} instance.
   */
  rgb24Color: number;

  /**
   * The display name for the {@link Cli} instance.
   */
  displayName: string;

  /**
   * The request/response separator for the {@link Cli} instance.
   */
  separator: string;

  /**
   * The banner for the {@link Cli} instance.
   */
  banner: string;

  /**
   * Whether to use the `whatif` flag for the {@link Cli} instance.
   */
  whatif: boolean;
}

/**
 * Describe options for the {@link Cli#prompt} method.
 */
export interface TPromptOptions<O extends string = string> {
  /**
   * Whether a response is required.
   */
  required?: boolean;

  /**
   * The default value for the {@link Cli#prompt}. This is returned if no response is given.
   */
  default?: O;

  /**
   * The key/value pair options to constraint a {@link Cli#prompt} reponse to.
   *
   * The keys are the options, and the values are the descriptions.
   */
  charOptions?: Record<string, O>;
}

export interface IWhatIfAction<A extends boolean = false> {
  action: string;
  description: string;
  handler: A extends true ? () => Promise<number> : () => number;
}

export interface IGlobalOpts {
  testing: string | false;
  verbose: number;
  whatif: boolean;
}

export interface IMetaProps {
  year: string;
  date: string;
}

interface IDefaultDeps {
  denoStd: string;
  deno: string;
  kzio: string;
}

interface IDefaultDevDeps {
  denoStd: string;
}

export interface IDependencyProps {
  deps: IDefaultDeps;
  devDeps: IDefaultDevDeps;
}

export interface IPackageProps {
  name: string;
  description: string;
  version: string;
  status: string;
}

export interface IFileProps {
  path: string;
  description: string;
}

export interface IFeatureProps {
  internal: boolean;
  name: string;
  type:
    | 'class'
    | 'function'
    | 'interface'
    | 'type alias'
    | 'enum'
    | 'decorator'
    | 'exception'
    | 'value';
  description: string;
  filename: string;
}

export interface IAbstractClassProps {
  abstract: boolean;
}

export interface ISingletonClassProps {
  singleton: boolean;
  constant: string;
}

export interface IFunctionProps {
  async: boolean;
}

export interface IDecoratorProps {
  target: 'class' | 'method' | 'property' | 'parameter' | 'accessor';
}

export interface IExceptionProps {
  message: string;
  code: string;
}

export interface IEnumProps {
  bitwise: boolean;
  keyValueDescriptions: [string, string, string][];
}
