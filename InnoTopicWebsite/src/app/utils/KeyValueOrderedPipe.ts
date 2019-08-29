/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Injectable, KeyValueChangeRecord, KeyValueChanges, KeyValueDiffer, KeyValueDiffers, Pipe, PipeTransform} from '@angular/core';

function makeKeyValuePair<K, V>(key: K, value: V): KeyValue<K, V> {
  return {key: key, value: value};
}

/**
 * A key value pair.
 * Usually used to represent the key value pairs from a Map or Object.
 *
 * @publicApi
 */
export interface KeyValue<K, V> {
  key: K;
  value: V;
}

/**
 * @ngModule CommonModule
 * @description
 *
 * Transforms Object or Map into an array of key value pairs.
 *
 * The output array will be ordered by keys.
 * By default the comparator will be by Unicode point value.
 * You can optionally pass a compareFn if your keys are complex types.
 *
 * @usageNotes
 * ### Examples
 *
 * This examples show how an Object or a Map can be iterated by ngFor with the use of this keyvalue
 * pipe.
 *
 * {@example common/pipes/ts/keyvalue_pipe.ts region='KeyValuePipe'}
 *
 * @publicApi
 */
@Injectable()
@Pipe({name: 'keyValOrdered', pure: false})
export class KeyValOrderedPipe implements PipeTransform {
  constructor() {}

  // private differ !: KeyValueDiffer<any, any>;
  private keyValues: Array<KeyValue<any, any>> = [];

  // transform<K, V>(input: null, compareFn?: (a: KeyValue<K, V>, b: KeyValue<K, V>) => number): null;
  // transform<V>(
  //   input: {[key: string]: V}|Map<string, V>,
  //   compareFn?: (a: KeyValue<string, V>, b: KeyValue<string, V>) => number):
  //   Array<KeyValue<string, V>>;
  // transform<V>(
  //   input: {[key: number]: V}|Map<number, V>,
  //   compareFn?: (a: KeyValue<number, V>, b: KeyValue<number, V>) => number):
  //   Array<KeyValue<number, V>>;
  // transform<K, V>(input: Map<K, V>, compareFn?: (a: KeyValue<K, V>, b: KeyValue<K, V>) => number):
  //   Array<KeyValue<K, V>>;
  transform<K, V>(
      input: null|{[key: string]: V, [key: number]: V}|Map<K, V>,
      /*compareFn: (a: KeyValue<K, V>, b: KeyValue<K, V>) => number = defaultComparator*/):
      Array<KeyValue<K, V>>|null {
    if (!input || (!(input instanceof Map) && typeof input !== 'object')) {
      return null;
    }

    // if (!this.differ) {
    //   // make a differ for whatever type we've been passed in
    //   this.differ = this.differs.find(input).create();
    // }

    // const differChanges: KeyValueChanges<K, V>|null = this.differ.diff(input as any);
    //
    // if (differChanges) {
    //   this.keyValues = [];
    //   differChanges.forEachItem((r: KeyValueChangeRecord<K, V>) => {
    //     this.keyValues.push(makeKeyValuePair(r.key, r.currentValue !));
    //   });
    //   this.keyValues.sort(compareFn);
    // }
    // return this.keyValues;
    const retArray = []
    for ( const key of Object.keys(input) ) {
      retArray.push({
        key: key,
        value: input[key],
      })
    }
    return retArray
  }
}
