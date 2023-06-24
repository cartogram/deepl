import {DeepLError} from './errors'
import {isFreeAccountAuthKey, isString} from './utils'

interface Config {
  authKey: string
}

interface TranslateOptions {
  formality?: 'default' | 'less' | 'more'
  sourceLang?: string
}

export class DeepL {
  private apiUrl: string

  constructor(private config: Config) {
    if (!isString(config.authKey) || config.authKey.length === 0) {
      throw new DeepLError('authKey must be a non-empty string')
    }

    const baseUrl = isFreeAccountAuthKey(config.authKey)
      ? 'https://api-free.deepl.com'
      : 'https://api.deepl.com'

    this.apiUrl = `${baseUrl}/v2/translate`
  }

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
      console.error('Error:', (error as Error).message)
    }
  }
}
