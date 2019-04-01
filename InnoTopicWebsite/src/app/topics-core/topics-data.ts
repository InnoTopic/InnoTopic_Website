//

import {
  getDictionaryValuesAsArray,
  setIdsFromKeys,
} from '../utils/dictionary-utils';
import {
  Topic,
  TopicUrls,
} from './topic';
import { tag } from './topics';

export function t() {
  return null
}

/* Tech topics */
export class Topics {
  JHipster = t()
  Go = t()
  TestCafe = t()
  Lodash = t()
  Angular = tag('Angular', 'angular', 'https://angular.io/', [
      tag('Angular Change Detection'),
      tag('Angular DI'),
      tag('Angular Modules', 'angular'),
      tag('Angular Router', 'angular'),
      tag('Angular Reactive Forms', 'angular'),
      tag('Angular Template-Driven Forms', 'angular'),
      // angularFlexLayout,
      // angularFlexLayoutResponsiveApi,
      tag('Angular Lazy Loading', 'angular'),
      tag('Angular i18n'),
    ],
    new TopicUrls(
      'https://en.wikipedia.org/wiki/Angular_(application_platform)',
      'https://github.com/angular/angular',
      null,
      'https://stackoverflow.com/questions/tagged/angular',
      'https://stackshare.io/angular-2',
      'https://twitter.com/angular',
    ))
  Ionic = t() // FIXME: new logo (thicker)
  Promises = t()
  //
  D = t()
  Maven = t()
  Java = t()
  Hibernate = t()
  Flutter = t()
  Dart = t()
  Git = t()
  Subversion = t()
  Groovy = t()
  GitHub = t()
  Yarn = t()
  D3 = t()
  NPM = t()
  jQuery = t()
  SVG = t()
  'ag-Grid' = t()
  MongoDB = t()
  Mongoose = t()
  TypeScript = t()
  Bootstrap = t()
  RxJS = t()
  ReactiveX = t()
  Firebase = t()
  NgRx = t()
  NGXS = t()
  KeystoneJS = t()
  Android = t()
  Bash = t()
  Gradle = t()
  Kotlin = t()
  Linux = t()
  'Ubuntu Linux' = t()
  'RedHat Linux' = t()
  'CentOS Linux' = t()
  macOS = t()
  nginx = t()
  Swift = t()
  Python = t()
  Scala = t()
  Ruby = t()
  Perl = t()
  C = t()
  'C++' = t()
  'C#' = t()
  '.NET' = t()
  Rust = t()
  WebAssembly = t()
  Algolia = t()
  Express = t()
  RegExp = t()
  AngularFire = t()
  Lua = t()
}

export function transformTopics(inputTopics: Topics) {
  // inputTopics = setIdsFromKeys(inputTopics, 'name')
  for (let topicKey of Object.getOwnPropertyNames(inputTopics)) {
    if ( inputTopics.hasOwnProperty(topicKey) ) {
      // console.log('transformTopics', topicKey)
      let topic = inputTopics[topicKey]
      if ( ! topic ) {
        topic = new Topic(topicKey)
      }
      inputTopics[topicKey] = topic
    }
  }
  return inputTopics
}

export const topics = transformTopics(new Topics())
export const topicsArr = getDictionaryValuesAsArray(topics as { [p: string]: any })
