export class Logger {
  constructor(private prefix: string = '[ deepL ]') {}
  /**
   * Logs the given message to the console.
   * @param {...string} messages - Comma-separated list of messages to log.
   */
  log(...messages: string[]): void {
    console.log(this.prefix, ...messages)
  }

  /**
   * Logs the given message to the console as an error.
   * @param {string} message - The message to log.
   */
  error(...messages: string[]): void {
    console.error(this.prefix, ...messages)
  }
}
