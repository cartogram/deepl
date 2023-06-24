/* tslint:disable */
/* eslint-disable */
/**
 * DeepL API Documentation
 * The DeepL API provides programmatic access to DeepL’s machine translation technology.
 *
 * The version of the OpenAPI document: 2.9.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {exists, mapValues} from '../runtime'
import type {SourceLanguage} from './SourceLanguage'
import {
  SourceLanguageFromJSON,
  SourceLanguageFromJSONTyped,
  SourceLanguageToJSON,
} from './SourceLanguage'

/**
 *
 * @export
 * @interface TranslateText200ResponseTranslationsInner
 */
export interface TranslateText200ResponseTranslationsInner {
  /**
   *
   * @type {SourceLanguage}
   * @memberof TranslateText200ResponseTranslationsInner
   */
  detectedSourceLanguage?: SourceLanguage
  /**
   * The translated text.
   * @type {string}
   * @memberof TranslateText200ResponseTranslationsInner
   */
  text?: string
}

/**
 * Check if a given object implements the TranslateText200ResponseTranslationsInner interface.
 */
export function instanceOfTranslateText200ResponseTranslationsInner(
  value: object,
): boolean {
  let isInstance = true

  return isInstance
}

export function TranslateText200ResponseTranslationsInnerFromJSON(
  json: any,
): TranslateText200ResponseTranslationsInner {
  return TranslateText200ResponseTranslationsInnerFromJSONTyped(json, false)
}

export function TranslateText200ResponseTranslationsInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): TranslateText200ResponseTranslationsInner {
  if (json === undefined || json === null) {
    return json
  }
  return {
    detectedSourceLanguage: !exists(json, 'detected_source_language')
      ? undefined
      : SourceLanguageFromJSON(json['detected_source_language']),
    text: !exists(json, 'text') ? undefined : json['text'],
  }
}

export function TranslateText200ResponseTranslationsInnerToJSON(
  value?: TranslateText200ResponseTranslationsInner | null,
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    detected_source_language: SourceLanguageToJSON(
      value.detectedSourceLanguage,
    ),
    text: value.text,
  }
}
