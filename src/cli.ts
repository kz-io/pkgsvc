/**
 * This file exports the Cli class.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */
import { colors } from '../deps.ts';
import { getStyledAsciiBanner } from './_internal/mod.ts';
import {
  CliVerbosity,
  type ICliOptions,
  type IWhatIfAction,
  type TPromptOptions,
} from './types/mod.ts';

const { rgb24, bold, reset, green, blue, yellow, red, gray, italic } = colors;

/**
 * The strings representing a true response.
 */
const YES_STRINGS = ['y', 'yes'];

/**
 * The strings representing a false response.
 */
const NO_STRINGS = ['n', 'no'];

/**
 * The strings representing a boolean response.
 */
const BOOL_STRINGS = [...YES_STRINGS, ...NO_STRINGS];

/**
 * Provides functionality for creating a command line interface.
 */
export class Cli {
  /**
   * The options for the cli.
   */
  protected options: ICliOptions = {
    banner: getStyledAsciiBanner(),
    verbosity: CliVerbosity.None,
    rgb24Color: 0x156AFF,
    displayName: '',
    separator: ':',
    whatif: false,
  };

  /**
   * Create a new cli.
   *
   * @param name The name of the cli.
   * @param options The options for the cli.
   *
   * If `options.displayName` is not provided, it will default to `name`.
   *
   * @example
   * ```ts
   * const cli = new Cli('MyCli', { verbosity: CliVerbosity.Info });
   * ```
   */
  constructor(protected name: string, options: Partial<ICliOptions> = {}) {
    const mergedOptions = {
      ...this.options,
      ...{ displayName: name },
      ...options,
    };

    this.options = mergedOptions;
  }

  /**
   * Print the ascii banner for the cli.
   */
  public printBanner(): void {
    const { options } = this;
    const { banner } = options;

    console.log(banner);
  }

  /**
   * Get the formatted name for the cli.
   */
  public get printName(): string {
    const { options } = this;
    const { displayName, rgb24Color } = options;
    const formattedName = rgb24(`[${displayName}]`, rgb24Color);

    return formattedName;
  }

  /**
   * Print a formatted message.
   *
   * @param message The message to format and print.
   * @param formatter The function to use to format the message.
   *
   * @example
   * ```ts
   * cli.printFormatted('Hello, world!', (str) => bold(str));
   * ```
   */
  protected printFormatted(
    message: string,
    formatter: (str: string) => string,
  ): void {
    const { printName } = this;
    const formattedMessage = formatter(message);
    const formattedText = `${printName} ${formattedMessage}`;

    console.log(formattedText);
  }

  /**
   * Print a formatted message at a specific verbosity level.
   *
   * @param level The verbosity level to print the message at.
   * @param message The message to format and print.
   * @param formatter The function to use to format the message.
   *
   * @example
   * ```ts
   * cli.printFormattedLevel(CliVerbosity.Info, 'Hello, world!', (str) => bold(str));
   * ```
   */
  protected printFormattedLevel(
    level: number,
    message: string,
    formatter: (str: string) => string,
  ): void {
    const { options } = this;
    const { verbosity } = options;

    if (level < verbosity) {
      return;
    }

    this.printFormatted(message, formatter);
  }

  /**
   * Describe a request, action, or result.
   *
   * @param message The message describing a request, action, or result.
   *
   * @example
   * ```ts
   * cli.describe('This is a description.');
   * ```
   */
  public describe(message: string): void {
    const { printName, options } = this;
    const { rgb24Color } = options;
    const formattedMessage = bold(rgb24(message, rgb24Color));
    const formattedText = `${printName} ${formattedMessage}`;

    console.log(formattedText);
  }

  /**
   * Write a message to the cli.
   *
   * @param message The message to write.
   *
   * @example
   * ```ts
   * cli.write('Hello, world!');
   * ```
   */
  public write(message: string): void {
    this.printFormatted(message, reset);
  }

  /**
   * Indicate a task is done.
   *
   * @param message The message indicating a task is done.
   *
   * @example
   * ```ts
   * cli.done('Task is done.');
   * ```
   */
  public done(message: string): void {
    this.printFormatted(message, green);
  }

  /**
   * Indicate an error.
   *
   * Only displays if verbosity is set to `CliVerbosity.Error` or higher.
   *
   * @param message The message indicating an error.
   *
   * @see {@link CliVerbosity}
   *
   * @example
   * ```ts
   * cli.error('An error occurred.');
   * ```
   */
  public error(message: string): void {
    this.printFormattedLevel(CliVerbosity.Error, message, red);
  }

  /**
   * Log an info message.
   *
   * Only displays if verbosity is set to `CliVerbosity.Info` or higher.
   *
   * @param message The message to log.
   *
   * @example
   * ```ts
   * cli.info('This is an info message.');
   * ```
   */
  public info(message: string): void {
    this.printFormattedLevel(CliVerbosity.Info, message, blue);
  }

  /**
   * Log a warning message.
   *
   * Only displays if verbosity is set to {@link CliVerbosity.Warn` or higher.
   *
   * @param message The message to log.
   *
   * @example
   * ```ts
   * cli.warn('This is a warning message.');
   * ```
   */
  public warn(message: string): void {
    this.printFormattedLevel(CliVerbosity.Warn, message, yellow);
  }

  /**
   * Log a success message.
   *
   * Only displays if verbosity is set to {@link CliVerbosity.Info` or higher.
   *
   * @param message The message to log.
   *
   * @example
   * ```ts
   * cli.success('This is a success message.');
   * ```
   */
  public success(message: string): void {
    this.printFormattedLevel(CliVerbosity.Info, message, green);
  }

  /**
   * Log a debug message.
   *
   * @param message The message to log.
   *
   * @example
   * ```ts
   * cli.debug('This is a debug message.');
   * ```
   */
  protected printDebug(level: CliVerbosity, message: string): void {
    const formatter = (str: string) => italic(gray(str));

    this.printFormattedLevel(level, message, formatter);
  }

  /**
   * Log a debug message.
   *
   * Only displays if verbosity is set to {@link CliVerbosity.Debug` or higher.
   *
   * @param message The message to log.
   *
   * @example
   * ```ts
   * cli.debug('This is a debug message.');
   * ```
   */
  public debug(message: string): void {
    this.printDebug(CliVerbosity.Debug, message);
  }

  /**
   * Log a trace message.
   *
   * Only displays if verbosity is set to {@link CliVerbosity.Trace}.
   *
   * @param message The message to log.
   *
   * @example
   * ```ts
   * cli.trace('This is a trace message.');
   * ```
   */
  public trace(message: string): void {
    this.printDebug(CliVerbosity.Trace, message);
  }

  /**
   * Get the formatted string of the key/value pair options.
   *
   * A `?` is added to the end of the formatted string to indicate that the user can enter `?` to see the options detail.
   *
   * @param charOptions The key/value pair options.
   * @param defaultString The default option key.
   *
   * @returns The formatted string of the key/value pair options.
   *
   * @example
   * ```ts
   * const options = { y: 'Yes', n: 'No' };
   * const formattedOptions = cli.getCharOptionsString(options, 'y');
   *
   * console.log(formattedOptions); // (Y/n/?)
   * ```
   */
  protected getCharOptionsString(
    charOptions?: Record<string, string>,
    defaultString?: string,
  ): string {
    if (!charOptions) {
      return '';
    }

    const entries = Object.entries(charOptions);
    const formattedNames = entries.map(([char]) =>
      defaultString
        ? char.toLowerCase() === defaultString.toLowerCase() ? bold(char) : char
        : char
    ).join('/');

    return ` (${formattedNames}/?)`;
  }

  /**
   * Validate a value against the key/value pair options.
   *
   * @param options The key/value pair options.
   * @param value The value to validate.
   *
   * @returns Whether the value is valid.
   *
   * @example
   * ```ts
   * const options = { y: 'Yes', n: 'No' };
   * const value = 'y';
   * const valid = cli.validateCharOptions(options, value);
   *
   * console.log(valid); // true
   * ```
   */
  protected validateCharOptions(
    options?: Record<string, string>,
    value?: string,
  ): boolean {
    const { displayName } = this.options;
    if (!options) {
      return true;
    }

    const keys = Object.keys(options);
    const lowerValue = value?.toLowerCase();

    if (lowerValue && !keys.includes(lowerValue)) {
      if (lowerValue === '?') {
        const formattedOptions = keys.map((key) => {
          const value = options[key];

          const str = `${key} - ${value}`;

          return str;
        }).join(`\n${' '.repeat(displayName.length + 3)}`);

        this.describe(formattedOptions);

        return false;
      }

      this.describe('Please enter a valid response.');

      return false;
    }

    return true;
  }

  /**
   * Get the formatted prompt message.
   *
   * @param message The message to prompt the user with.
   * @param options The options for the prompt.
   *
   * @returns The formatted prompt message.
   *
   * @example
   * ```ts
   * const message = 'What is your name?';
   * const options = { required: true, default: 'John' };
   * const formattedPrompt = cli.getPromptMessage(message, options);
   *
   * console.log(formattedPrompt); // [MyCli] What is your name? > John
   * ```
   */
  protected getPromptMessage(message: string, options: TPromptOptions): string {
    const { printName, options: cliOptions } = this;
    const { separator } = cliOptions;
    const { default: defaultValue, charOptions } = options;
    const charOptionsString = this.getCharOptionsString(
      charOptions,
      defaultValue,
    );

    const styledMessage = reset(message);
    const text =
      `${printName} ${styledMessage}${charOptionsString} ${separator}`;
    const formattedText = bold(text);

    return formattedText;
  }

  /**
   * Prompt the user for a response.
   *
   * @param message The message to prompt the user with.
   * @param options The options for the prompt.
   *
   * @returns The user's response.
   *
   * @example
   * ```ts
   * const message = 'What is your name?';
   * const options = { required: true, default: 'John' };
   * const response = cli.prompt(message, options);
   *
   * console.log(response); // John, or the user's response
   * ```
   */
  public prompt(
    message: string,
    options: TPromptOptions = {},
  ): TPromptOptions['required'] extends true ? string
    : TPromptOptions['default'] extends true ? string
    : string | undefined {
    const { required, default: defaultValue, charOptions } = options;
    const formattedText = this.getPromptMessage(message, options);

    const response = prompt(formattedText, defaultValue);

    if (typeof response === 'string' && response.trim().length !== 0) {
      const valid = this.validateCharOptions(charOptions, response);

      if (valid) {
        return response;
      }

      const retry = this.prompt(message, options);

      return retry;
    }

    if (required) {
      this.describe('A response is required');
      const retry = this.prompt(message, options);

      return retry;
    }
  }

  /**
   * Prompt the user for a yes/no response.
   *
   * @param message The message to prompt the user with.
   * @param options The options for the prompt.
   *
   * @returns The user's response.
   *
   * @example
   * ```ts
   * const message = 'Do you like ice cream?';
   * const options = { required: true, default: 'Y' };
   * const response = cli.promptYesNo(message, options);
   *
   * console.log(response); // true, or the user's response (should also be true)
   * ```
   */
  public promptYesNo(
    message: string,
    options: TPromptOptions<'Y' | 'N'> = {},
  ): boolean {
    const { required, default: defaultValue } = options;

    const result = this.prompt(message, {
      ...options,
      required,
      charOptions: {
        y: 'Yes',
        n: 'No',
      },
      default: defaultValue,
    })!;

    const lowerResult = result.toLowerCase();

    if (!BOOL_STRINGS.includes(lowerResult)) {
      this.describe('Please enter a valid response.');
      const retry = this.promptYesNo(message, options);

      return retry;
    }

    const boolResult = YES_STRINGS.includes(lowerResult);

    return boolResult;
  }

  /**
   * Prompt the user for a confirmation.
   *
   * Any response other than `y` or `Y` will return `false`.
   *
   * @param message The message to prompt the user with.
   *
   * @returns The user's response.
   *
   * @example
   * ```ts
   * const message = 'Are you sure you want to delete this file?';
   * const response = cli.confirm(message);
   *
   * console.log(response); // true or false
   * ```
   */
  public confirm(message: string): boolean {
    const formattedText = this.getPromptMessage(message, {});
    const result = confirm(formattedText);

    return result;
  }

  protected printWhatIf(actionName: string, message: string): void {
    const { printName, options } = this;

    const { displayName } = options;
    const indentSize = displayName.length + 3;
    const space = ' '.repeat(indentSize);
    const indentedLines = message.split('\n').map((line) => `${space}${line}`);
    const indentedTest = indentedLines.join('\n');
    const formattedHeader = bold(`${actionName}: What If?`);
    const formattedMessage = italic(indentedTest);
    const formattedText =
      `${printName} ${formattedHeader}\n${formattedMessage}`;

    console.log(formattedText);
  }

  public whatif<T>({ action, description, handler }: IWhatIfAction): number {
    const { options } = this;
    const { whatif } = options;

    if (whatif) {
      this.printWhatIf(action, description);
      return 0;
    } else {
      return handler();
    }
  }

  public async asyncWhatif(
    { action, description, handler }: IWhatIfAction<true>,
  ): Promise<number> {
    const { options } = this;
    const { whatif } = options;

    if (whatif) {
      this.printWhatIf(action, description);
      return 0;
    } else {
      return await handler();
    }
  }
}
