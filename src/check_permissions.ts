/**
 * This file exports the checkPermissions function.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */
import { checkPermissions as _checkPermissions } from './_internal/check_permissions.ts';

/**
 * Check if a list of permissions are granted, and request them if not.
 *
 * @param permissions The permissions to check, and request if not granted.
 *
 * @returns Whether all permissions are granted.
 *
 * @example
 * ```ts
 * const permissions = [
 *   { name: 'read', path: '/etc' },
 *   { name: 'write', path: '/etc' },
 * ];
 *
 * const result = await checkPermissions(permissions);
 *
 * console.log(result); // true or false depending on the granted permissions
 * ```
 */
export async function checkPermissions(
  permissions: Deno.PermissionDescriptor[],
): Promise<boolean> {
  const result = await _checkPermissions(permissions);
  return result;
}
