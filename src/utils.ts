/**
 * Returns true if the specified DeepL Authentication Key is associated with a free account,
 * otherwise false.
 * @param {string} authKey - The authentication key to check.
 * @returns {boolean} True if the key is associated with a free account, otherwise false.
 */
export function isFreeAccountAuthKey(authKey: string): boolean {
  return authKey.endsWith(':fx')
}

/**
 * Returns true if the given argument is a string.
 * @param {*} arg - Argument to check.
 * @returns {boolean} True if the argument is a string, otherwise false.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isString(arg: any): arg is string {
  return typeof arg === 'string'
}
