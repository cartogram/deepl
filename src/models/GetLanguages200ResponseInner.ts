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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface GetLanguages200ResponseInner
 */
export interface GetLanguages200ResponseInner {
    /**
     * The language code of the given language.
     * @type {string}
     * @memberof GetLanguages200ResponseInner
     */
    language: string;
    /**
     * Name of the language in English.
     * @type {string}
     * @memberof GetLanguages200ResponseInner
     */
    name: string;
    /**
     * Denotes formality support in case of a target language listing.
     * @type {boolean}
     * @memberof GetLanguages200ResponseInner
     */
    supportsFormality?: boolean;
}

/**
 * Check if a given object implements the GetLanguages200ResponseInner interface.
 */
export function instanceOfGetLanguages200ResponseInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "language" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function GetLanguages200ResponseInnerFromJSON(json: any): GetLanguages200ResponseInner {
    return GetLanguages200ResponseInnerFromJSONTyped(json, false);
}

export function GetLanguages200ResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetLanguages200ResponseInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'language': json['language'],
        'name': json['name'],
        'supportsFormality': !exists(json, 'supports_formality') ? undefined : json['supports_formality'],
    };
}

export function GetLanguages200ResponseInnerToJSON(value?: GetLanguages200ResponseInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'language': value.language,
        'name': value.name,
        'supports_formality': value.supportsFormality,
    };
}

