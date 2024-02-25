/**
 * This file exports the CliVerbosity enum.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

/**
 * The verbosity levels for the CLI.
 */
export enum CliVerbosity {
  /**
   * All logging is enabled.
   */
  All,
  /**
   * Finer-grained information (than `Debug`) useful for debugging the CLI are logged.
   */
  Trace,

  /**
   * Fine-grained information useful for debugging the CLI are logged.
   */
  Debug,

  /**
   * Informational messages highlighting the progress of the CLI are logged.
   */
  Info,

  /**
   * Potentially harmful conditions are logged.
   */
  Warn,

  /**
   * Recoverable errors conditions are logged.
   */
  Error,

  /**
   * No logging is enabled.
   */
  None,
}
