/**
 * This file exports the internal createAsciiBanner function.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

/**
 * The color stops for the default scii banner.
 */
export const COLOR_STOPS: [number, number][] = [
  [0, 0x6a6daf],
  [1, 0x706bb0],
  [2, 0x7769b1],
  [3, 0x7d67b1],
  [4, 0x8465b1],
  [5, 0x8b62b0],
  [6, 0x925fae],
  [7, 0x995cac],
  [8, 0x9f59aa],
  [9, 0xa655a7],
  [10, 0xad52a3],
  [11, 0xb34e9f],
  [12, 0xb94a9a],
  [13, 0xbe4694],
  [14, 0xc4428f],
  [15, 0xc93e88],
  [16, 0xcd3a82],
  [17, 0xd1367b],
  [18, 0xd43373],
  [19, 0xd7306c],
  [20, 0xd92e63],
  [21, 0xdb2d5b],
  [22, 0xdc2d53],
  [23, 0xdd2e4a],
  [24, 0xdc3141],
  [25, 0xdc3437],
  [26, 0xda382d],
  [27, 0xd83d22],
];

/**
 * Create the default banner for {@link Cli}.
 *
 * @returns The ascii banner for the {@link Cli}.
 *
 * @example
 * ```ts
 * const banner = createAsciiBanner();
 *
 * console.log(banner);  // too long to show here
 * ```
 */
export function createAsciiBanner(): string {
  const banner = `
  ▄▄                       
  ██                       
      ▄▄▄  ▄▄▄             
▀███ ▀███ ▀███ ▀████████▄  
  ██   ██   ██   ██    ██  
  ██   ██   ██   ██    ██  
  ██   ██   ██   ██    ██  
▄████▄████▄████▄████  ████▄

`;

  return banner;
}
