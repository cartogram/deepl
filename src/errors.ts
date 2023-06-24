export class DeepLError extends Error {
  public error?: Error

  constructor(message: string, error?: Error) {
    super(message)
    this.message = message
    this.error = error
  }
}
