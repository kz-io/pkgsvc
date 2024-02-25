/**
 * This file exports the internal getStyledAsciiBanner function.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { colors } from '../../deps.ts';
import { COLOR_STOPS, createAsciiBanner } from '../_internal/ascii_banner.ts';

/**
 * The default color for the ascii banner.
 */
const DEFAULT_COLOR = 0x333333;

/**
 * Check if a value is between a range.
 *
 * @param value The value to check is between the range.
 * @param range The range to check the value is between.
 *
 * @returns Whether the value is between the range.
 *
 * @example
 * ```ts
 * const value = 5;
 * const range = [0, 10];
 *
 * const result = isBetween(value, range);
 *
 * console.log(result); // true
 * ```
 */
function isBetween(value: number, range: [number, number]): boolean {
  return value >= range[0] && value <= range[1];
}

/**
 * Get the color for a char at an index.
 *
 * @param value The index of the char to get the color for.
 * @param settings The color stops for the ascii banner.
 *
 * @returns The color for the char at the index.
 *
 * @example
 * ```ts
 * const value = 5;
 * const settings = [
 *   [0, 0x6B6FB0],
 *   [17, 0xD93E22],
 *   [20, 0x6A7682],
 * ];
 *
 * const result = getColor(value, settings);
 *
 * console.log(result); // 0x6B6FB0
 * ```
 */
function getColor(value: number, settings: [number, number][]): number {
  for (let i = 0; i < settings.length; i++) {
    const [start, color] = settings[i];
    const [end] = settings[i + 1] || [Infinity];

    if (isBetween(value, [start, end])) {
      return color;
    }
  }

  return DEFAULT_COLOR;
}

/**
 * Get the styled version of the default banner for {@link Cli}.
 *
 * @example
 * ```ts
 * getStyledAsciiBanner("my-package");
 * ```
 */
export function getStyledAsciiBanner(): string {
  const banner = createAsciiBanner();
  const lines = banner.split('\n');
  const styledLines = lines.map((line) => {
    const chars = line.split('');
    const styledChars = chars.map((char, index) => {
      return colors.rgb24(char, getColor(index, COLOR_STOPS));
    });

    return styledChars.join('');
  });

  const styledBanner = styledLines.join('\n');

  return styledBanner;
}
