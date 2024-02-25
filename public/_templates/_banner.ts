/**
 * This file exports the internal createAsciiBanner function.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

/**
 * The color stops for the default scii banner.
 */
export const COLOR_STOPS: [number, number][] = [
  [0, 0x6e6cb0],
  [1, 0x736ab0],
  [2, 0x7769b1],
  [3, 0x7c68b1],
  [4, 0x8066b1],
  [5, 0x8564b1],
  [6, 0x8a62b0],
  [7, 0x8f61af],
  [8, 0x935fae],
  [9, 0x985cac],
  [10, 0x9d5aab],
  [11, 0xa258a9],
  [12, 0xa655a7],
  [13, 0xab53a4],
  [14, 0xaf50a1],
  [15, 0xb34e9e],
  [16, 0xb74b9b],
  [17, 0xbb4897],
  [18, 0xbf4594],
  [19, 0xc34290],
  [20, 0xc63f8b],
  [21, 0xca3d87],
  [22, 0xcd3a82],
  [23, 0xcf377d],
  [24, 0xd23578],
  [25, 0xd43373],
  [26, 0xd6316e],
  [27, 0xd82f68],
  [28, 0xd92e63],
  [29, 0xdb2d5d],
  [30, 0xdc2d57],
  [31, 0xdc2d51],
  [32, 0xdd2e4b],
  [33, 0xdd3045],
  [34, 0xdc323f],
  [35, 0xdc3438],
  [36, 0xdb3731],
  [37, 0xda3a2a],
  [38, 0xd83d22],
  [39, 0xd83d22],
  [40, 0xd83d22],
  [41, 0xd83d22],
  [42, 0xd83d22],
  [43, 0xd83d22],
  [44, 0xd83d22],
  [45, 0xd83d22],
  [46, 0xd83d22],
  [47, 0xd83d22],
  [48, 0xd83d22],
  [49, 0xd83d22],
  [50, 0xd83d22],
  [51, 0xd83d22],
  [52, 0xd83d22],
  [53, 0xd83d22],
  [54, 0xd83d22],
  [55, 0xd83d22],
  [56, 0xd83d22],
  [57, 0xd83d22],
  [58, 0xd83d22],
  [59, 0xd83d22],
  [60, 0xd83d22],
  [61, 0xd83d22],
  [62, 0xd83d22],
  [63, 0xd83d22],
];

export function createAsciiBanner(name: string): string {
  const banner = `
▀██                    ██
 ██  ▄▄  ▄▄▄▄▄▄       ▄▄▄    ▄▄▄
 ██ ▄▀   ▀  ▄█▀        ██  ▄█  ▀█▄
 ██▀█▄    ▄█▀          ██  ██   ██
▄██▄ ██▄ ██▄▄▄▄█      ▄██▄  ▀█▄▄█▀
                  ██
  integereleven kz.io repository cli - ${name}
`;

  return banner;
}

import { colors } from '../../deps.ts';

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
export function getStyledAsciiBanner(name: string): string {
  const banner = createAsciiBanner(name);
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
