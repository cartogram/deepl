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
 * @interface TranslateDocument200Response
 */
export interface TranslateDocument200Response {
    /**
     * A unique ID assigned to the uploaded document and the translation process. Must be used when referring to this particular document in subsequent API requests.
     * @type {string}
     * @memberof TranslateDocument200Response
     */
    documentId?: string;
    /**
     * A unique key that is used to encrypt the uploaded document as well as the resulting translation on the server side. Must be provided with every subsequent API request regarding this particular document.
     * @type {string}
     * @memberof TranslateDocument200Response
     */
    documentKey?: string;
}

/**
 * Check if a given object implements the TranslateDocument200Response interface.
 */
export function instanceOfTranslateDocument200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TranslateDocument200ResponseFromJSON(json: any): TranslateDocument200Response {
    return TranslateDocument200ResponseFromJSONTyped(json, false);
}

export function TranslateDocument200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TranslateDocument200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'documentId': !exists(json, 'document_id') ? undefined : json['document_id'],
        'documentKey': !exists(json, 'document_key') ? undefined : json['document_key'],
    };
}

export function TranslateDocument200ResponseToJSON(value?: TranslateDocument200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'document_id': value.documentId,
        'document_key': value.documentKey,
    };
}

