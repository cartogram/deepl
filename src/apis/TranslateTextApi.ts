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

import * as runtime from '../runtime'
import type {
  Formality,
  SourceLanguage,
  TargetLanguage,
  TranslateText200Response,
} from '../models'
import {
  FormalityFromJSON,
  FormalityToJSON,
  SourceLanguageFromJSON,
  SourceLanguageToJSON,
  TargetLanguageFromJSON,
  TargetLanguageToJSON,
  TranslateText200ResponseFromJSON,
  TranslateText200ResponseToJSON,
} from '../models'

export interface TranslateTextRequest {
  text: Array<string>
  targetLang: TargetLanguage
  sourceLang?: SourceLanguage
  splitSentences?: TranslateTextSplitSentencesEnum
  preserveFormatting?: TranslateTextPreserveFormattingEnum
  formality?: Formality
  glossaryId?: string
  tagHandling?: TranslateTextTagHandlingEnum
  nonSplittingTags?: string
  outlineDetection?: TranslateTextOutlineDetectionEnum
  splittingTags?: string
  ignoreTags?: string
}

/**
 *
 */
export class TranslateTextApi extends runtime.BaseAPI {
  /**
   * The translate function.   The total request body size must not exceed 128 KiB (128 · 1024 bytes). Please split up your text into multiple calls if it exceeds this limit.
   * Request Translation
   */
  async translateTextRaw(
    requestParameters: TranslateTextRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<TranslateText200Response>> {
    if (
      requestParameters.text === null ||
      requestParameters.text === undefined
    ) {
      throw new runtime.RequiredError(
        'text',
        'Required parameter requestParameters.text was null or undefined when calling translateText.',
      )
    }

    if (
      requestParameters.targetLang === null ||
      requestParameters.targetLang === undefined
    ) {
      throw new runtime.RequiredError(
        'targetLang',
        'Required parameter requestParameters.targetLang was null or undefined when calling translateText.',
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] =
        this.configuration.apiKey('Authorization') // auth_header authentication
    }

    const consumes: runtime.Consume[] = [
      {contentType: 'application/x-www-form-urlencoded'},
    ]
    // @ts-ignore: canConsumeForm may be unused
    const canConsumeForm = runtime.canConsumeForm(consumes)

    let formParams: {append(param: string, value: any): any}
    let useForm = false
    if (useForm) {
      formParams = new FormData()
    } else {
      formParams = new URLSearchParams()
    }

    if (requestParameters.text) {
      requestParameters.text.forEach((element) => {
        formParams.append('text', element as any)
      })
    }

    if (requestParameters.sourceLang !== undefined) {
      formParams.append(
        'source_lang',
        new Blob(
          [JSON.stringify(SourceLanguageToJSON(requestParameters.sourceLang))],
          {type: 'application/json'},
        ),
      )
    }

    if (requestParameters.targetLang !== undefined) {
      formParams.append(
        'target_lang',
        new Blob(
          [JSON.stringify(TargetLanguageToJSON(requestParameters.targetLang))],
          {type: 'application/json'},
        ),
      )
    }

    if (requestParameters.splitSentences !== undefined) {
      formParams.append(
        'split_sentences',
        requestParameters.splitSentences as any,
      )
    }

    if (requestParameters.preserveFormatting !== undefined) {
      formParams.append(
        'preserve_formatting',
        requestParameters.preserveFormatting as any,
      )
    }

    if (requestParameters.formality !== undefined) {
      formParams.append(
        'formality',
        new Blob(
          [JSON.stringify(FormalityToJSON(requestParameters.formality))],
          {type: 'application/json'},
        ),
      )
    }

    if (requestParameters.glossaryId !== undefined) {
      formParams.append('glossary_id', requestParameters.glossaryId as any)
    }

    if (requestParameters.tagHandling !== undefined) {
      formParams.append('tag_handling', requestParameters.tagHandling as any)
    }

    if (requestParameters.nonSplittingTags !== undefined) {
      formParams.append(
        'non_splitting_tags',
        requestParameters.nonSplittingTags as any,
      )
    }

    if (requestParameters.outlineDetection !== undefined) {
      formParams.append(
        'outline_detection',
        requestParameters.outlineDetection as any,
      )
    }

    if (requestParameters.splittingTags !== undefined) {
      formParams.append(
        'splitting_tags',
        requestParameters.splittingTags as any,
      )
    }

    if (requestParameters.ignoreTags !== undefined) {
      formParams.append('ignore_tags', requestParameters.ignoreTags as any)
    }

    const response = await this.request(
      {
        path: `/translate`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: formParams,
      },
      initOverrides,
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      TranslateText200ResponseFromJSON(jsonValue),
    )
  }

  /**
   * The translate function.   The total request body size must not exceed 128 KiB (128 · 1024 bytes). Please split up your text into multiple calls if it exceeds this limit.
   * Request Translation
   */
  async translateText(
    requestParameters: TranslateTextRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<TranslateText200Response> {
    const response = await this.translateTextRaw(
      requestParameters,
      initOverrides,
    )
    return await response.value()
  }
}

/**
 * @export
 */
export const TranslateTextSplitSentencesEnum = {
  _0: '0',
  _1: '1',
  Nonewlines: 'nonewlines',
} as const
export type TranslateTextSplitSentencesEnum =
  (typeof TranslateTextSplitSentencesEnum)[keyof typeof TranslateTextSplitSentencesEnum]
/**
 * @export
 */
export const TranslateTextPreserveFormattingEnum = {
  _0: '0',
  _1: '1',
} as const
export type TranslateTextPreserveFormattingEnum =
  (typeof TranslateTextPreserveFormattingEnum)[keyof typeof TranslateTextPreserveFormattingEnum]
/**
 * @export
 */
export const TranslateTextTagHandlingEnum = {
  Xml: 'xml',
  Html: 'html',
} as const
export type TranslateTextTagHandlingEnum =
  (typeof TranslateTextTagHandlingEnum)[keyof typeof TranslateTextTagHandlingEnum]
/**
 * @export
 */
export const TranslateTextOutlineDetectionEnum = {
  _0: '0',
} as const
export type TranslateTextOutlineDetectionEnum =
  (typeof TranslateTextOutlineDetectionEnum)[keyof typeof TranslateTextOutlineDetectionEnum]
