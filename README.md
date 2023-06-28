# @cartogram/deepl

> DeepL API client for JavaScript.

This module provides a simple javascript client for translating text with DeepL. You will need a developer account and Authentication key from DeepL in order to use this library. To get a key, please create an account on [Deepl.com](https://www.deepl.com/pro/change-plan?utm_source=github&utm_medium=github-cartogram#developer).

With a DeepL API Free account you can translate up to 500,000 characters/month for free.

## Install

With [npm](https://npmjs.org/) installed, run

```bash
npm install @cartogram/deepl
```

## Usage

Import and instantiate a new instance of the `DeepL` class and pass in a config object containing your DeepL Authentication Key.

```js
import {DeepL} from '@cartogram/deepl'

const translator = new DeepL({authKey: '[YOUR DEEPL AUTH KEY]'})

const translations = await translator.translate('Hello world!', 'de')

//  [
//    {
//      detected_source_language: 'EN',
//      text: 'Hallo Welt'
//    }
//  ]
```

## API

### `translate()`

Returns a Promise that fulfills with an array of translations corresponding to your input text. Each item has two properties: `text` is the translated text, and `detected_source_language` is the detected source language code.

```ts
translate(
  text: string | string[],
  targetLang: string,
  options: TranslateOptions = {},
)
```

#### TranslateOptions

- `formality`: controls whether translations should lean toward informal or formal language. This option is only available for some target languages, see Listing available languages.
  - `less`: use informal language.
  - `more`: use formal, more polite language.
  - `default`: use default formality.

```ts
interface TranslateOptions {
  formality?: 'default' | 'less' | 'more'
  sourceLang?: string
}
```
