/**
 * Custom error class for DeepL-related errors.
 */
export class DeepLError extends Error {
  /**
   * The underlying error associated with the DeepL error, if any.
   * @type {Error | undefined}
   */
  public error?: Error

  /**
   * Constructs a new instance of the DeepLError class.
   * @param {string} message - The error message.
   * @param {Error} [error] - The underlying error associated with the DeepL error, if any.
   */
  constructor(message: string, error?: Error) {
    super(message)
    this.message = message
    this.error = error
  }
}
