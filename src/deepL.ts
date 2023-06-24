import axios from 'axios'

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
    this.apiUrl = 'https://api-free.deepl.com/v2/translate'
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

    try {
      const response = await axios.post(this.apiUrl, requestData, {
        headers: {
          Authorization: `DeepL-Auth-Key ${this.config.authKey}`,
        },
      })

      return response.data
    } catch (error) {
      console.error('Error:', error)
    }
  }
}
