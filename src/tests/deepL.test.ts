import {describe, expect, it} from 'vitest'
import {DeepL} from '../deepL'

const config = {
  authKey: import.meta.env.DEEPL_AUTH_KEY as string,
}

describe('DeepL', () => {
  const api = new DeepL(config)

  describe('.translate()', () => {
    it('translates a single text string', async () => {
      const result = await api.translate('hello world', 'de')

      expect(result.translations[0].text).toBe('Hallo Welt')
    })

    it('translates multiple text strings', async () => {
      const result = await api.translate(['hello world', 'goodbye world'], 'de')

      expect(result.translations[0].text).toBe('Hallo Welt')
      expect(result.translations[1].text).toBe('Auf Wiedersehen Welt')
    })

    it('should translate with formality', async () => {
      const input = 'How are you?'
      const formal = 'Wie geht es Ihnen?'
      const informal = 'Wie geht es dir?'

      expect((await api.translate(input, 'de')).translations[0].text).toBe(
        formal,
      )
      expect(
        (
          await api.translate(input, 'de', {
            formality: 'less',
          })
        ).translations[0].text,
      ).toBe(informal)

      expect(
        (
          await await api.translate(input, 'de', {
            formality: 'more',
          })
        ).translations[0].text,
      ).toBe(formal)
    })
  })
})
