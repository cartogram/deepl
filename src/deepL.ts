import {DeepLError} from './errors'
import {isFreeAccountAuthKey, isString} from './utils'
import {Logger} from './logger'

/**
 * Configuration interface for DeepL client.
 */
interface Config {
  authKey: string
}

/**
 * Options interface for the translate method.
 */
interface TranslateOptions {
  formality?: 'default' | 'less' | 'more'
  sourceLang?: string
}

export class DeepL {
  private apiUrl: string

  /**
   * Constructs a new instance of the DeepL client.
   * @param {Config} config - Configuration options for the client.
   * @throws {DeepLError} Throws an error if the provided authKey is invalid.
   */
  constructor(private config: Config, private logger: Logger = new Logger()) {
    if (!isString(config.authKey) || config.authKey.length === 0) {
      throw new DeepLError('authKey must be a non-empty string')
    }

    const baseUrl = isFreeAccountAuthKey(config.authKey)
      ? 'https://api-free.deepl.com'
      : 'https://api.deepl.com'

    this.apiUrl = `${baseUrl}/v2/translate`
  }

  /**
   * Translates the given text to the target language.
   * @param {string | string[]} text - The text or array of texts to be translated.
   * @param {string} targetLang - The target language code.
   * @param {TranslateOptions} [options={}] - Additional translation options.
   * @returns {Promise<any>} A promise that resolves to the translated data.
   */
  async translate(
    text: string | string[],
    targetLang: string,
    options: TranslateOptions = {},
  ) {
    const {formality, sourceLang} = options

    const requestData = {
      text: Array.isArray(text) ? text : [text],
      target_lang: targetLang,
      source_lang: sourceLang,
      formality: formality,
    }

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `DeepL-Auth-Key ${this.config.authKey}`,
      },
      body: JSON.stringify(requestData),
    }

    try {
      const data = await fetch(this.apiUrl, requestOptions).then((response) => {
        if (!response.ok) {
          throw new DeepLError(`Status: ${response.status}`)
        }
        return response.json()
      })

      return data
    } catch (error: unknown) {
      this.logger.error('Error:', (error as Error).message)
    }
  }
}
