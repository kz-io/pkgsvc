/**
 * This file exports the type aliases used in the project.
 *
 * For interfaces, see `interfaces.ts`.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import type {
  IDependencyProps,
  IExceptionProps,
  IFeatureProps,
  IFileProps,
  IMetaProps,
  IPackageProps,
} from './interfaces.ts';

/**
 * A generic object type.
 */
// deno-lint-ignore no-explicit-any
export type Props = { [key: string]: any };

/**
 * A callback function that accepts {@link Props} and returns a string.
 *
 * @template T - The type of the props object.
 *
 * @param props - The props object to use in the callback.
 * @returns The string result of the callback.
 *
 * @example
 * ```ts
 * const template: TemplateCallback<{ name: string }> = (props) => `Hello, ${props.name}!`;
 *
 * const result = template({ name: 'world' });
 *
 * console.log(result); // "Hello, world!"
 * ```
 */
export type TemplateCallback<T extends Props> = (props: T) => string;

/**
 * A string path to a nested property in an object.
 */
type StringPath<T> = T extends string ? [] : {
  [K in Extract<keyof T, string>]: [K, ...StringPath<T[K]>];
}[Extract<keyof T, string>];

/**
 * Joins a string path with a delimiter.
 */
type JoinPath<T extends string[], D extends string> = T extends [] ? never
  : T extends [infer F] ? F
  : T extends [infer F, ...infer R]
    ? F extends string ? `${F}${D}${JoinPath<Extract<R, string[]>, D>}`
    : never
  : string;

/**
 * Extracts the string paths from a {@link Props} object.
 *
 * @template T - The type of the props object.
 *
 * @example
 * ```ts
 * type Paths = ExtractStringPaths<{
 *   a: {
 *     b: {
 *       c: string;
 *     };
 *     d: {
 *       e: string;
 *     };
 *   };
 *   f: {
 *     g: string;
 *   };
 * }>;
 *
 * // Paths = "a.b.c" | "a.d.e" | "f.g"
 * ```
 */
export type ExtractStringPaths<T extends Props = Props> = JoinPath<
  StringPath<T>,
  '.'
>;

export type MetaProps = { meta: IMetaProps };
export type DependencyProps = { deps: IDependencyProps };
export type PackageProps = MetaProps & DependencyProps & { pkg: IPackageProps };
export type PackagePropsPath = JoinPath<StringPath<PackageProps>, '.'>;

export type FileProps = PackageProps & { file: IFileProps };
export type FilePropsPath = JoinPath<StringPath<FileProps>, '.'>;

export type FeatureProps = PackageProps & { feature: IFeatureProps };
export type FeaturePropsPath = JoinPath<StringPath<FeatureProps>, '.'>;

export type ExceptionProps = FeatureProps & { exception: IExceptionProps };
export type ExceptionPropsPath = JoinPath<StringPath<ExceptionProps>, '.'>;

//  Decorator
//  Interface
//  Type Alias (Object, Func, Value)
//  Enum
//  Value
//  Function
//  Singleton
