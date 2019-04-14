/**
 * Created by kd on 2017-08-01.
 */

export function getDictionaryValuesAsArray<T>(dictionary: { [p: string]: T }): T[] {
  console.log('getDictionaryValuesAsArray dictionary', dictionary)
  const values = [];
  if (dictionary) {
    for (const key of Object.getOwnPropertyNames(dictionary)) {
      // if (dictionary.hasOwnProperty(key)) {
      let dictionaryElement = dictionary[key];
      // console.log('getDictionaryValuesAsArray', key, dictionaryElement)
      values.push(dictionaryElement);
      // }
    }
  }
  return values;
}

export function setIdsFromKeys<T>(dictionary: T, idKeyName: string = 'id'): T {
  // idKeyName = idKeyName || 'id';
  let ownPropertyNames = Object.getOwnPropertyNames(dictionary);
  // console.log('setIdsFromKeys ownPropertyNames', ownPropertyNames);
  for (const id of ownPropertyNames) {
    const curExp = dictionary[id];
    curExp[idKeyName] = id;
    // console.log('setIdsFromKeys', id, curExp);
  }
  return dictionary;
}
