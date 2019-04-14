//

import {
  getDictionaryValuesAsArray,
  setIdsFromKeys,
} from '../utils/dictionary-utils';
import {
  Topic,
  TopicUrls,
} from './topic';
import {
  tag,
  tagNoIcon,
} from './topics';

export type TopicData = Partial<Topic>
export type TopicDataOrLogo = TopicData | string

function coerceLogoToTopicData(topicData: TopicDataOrLogo): TopicData {
  if (typeof (topicData) === 'string') {
    topicData = {
      logo: topicData as string,
    }
  }
  return topicData
}

export function t(topicData?: TopicDataOrLogo) {
  topicData = coerceLogoToTopicData(topicData)
  const topic = Object.create(Topic.prototype)
  Object.assign(topic, topicData)
  // TODO: instantiate Topic class (once we have id). But be careful, if using Object.create, ctor is not called
  console.log('topic instantiated', topic)

  // instantiate as soon as possible, even incomplete object; even before ID
  // to have access to utility methods e.g. fluent API like .setLogo()
  // and to avoid changing object prototype
  // when having id and post-processing, call smth like finaliseAndValidate, which will post-process/mangle id/name if necessary (keep in mind topics-old which already have name&id)
  // https://jeena.net/constructor-object-create
  return topic
}

export function tWide(topicData?: TopicDataOrLogo) {
  topicData = coerceLogoToTopicData(topicData);
  return t({...topicData, logoTypeWide: true})
}

export function tNoIcon(topicData?: TopicData) {
  return t({...topicData, logo: null})
}

export class Frontend {
  PouchDB = t()
  PrimeNG = t({
    iconWebsite: 'https://www.primefaces.org/press-kit/',
    iconUrl: 'https://www.primefaces.org/presskit/primeng-logo.svg',
    urls: new TopicUrls(
      'https://www.primefaces.org/primeng',
      null,
      'https://github.com/primefaces/primeng',
      'https://www.npmjs.com/package/primeng',
      'https://stackoverflow.com/questions/tagged/primeng',
      null,
      'https://twitter.com/prime_ng'
    )
  })
  Angular = t({
    urls: new TopicUrls(
      'https://angular.io/',
      'https://en.wikipedia.org/wiki/Angular_(application_platform)',
      'https://github.com/angular/angular',
      null,
      'https://stackoverflow.com/questions/tagged/angular',
      'https://stackshare.io/angular-2',
      'https://twitter.com/angular',
    ),
    subTopics: {
      'Flex-Layout': t({
        urls: new TopicUrls(null, 'https://github.com/angular/flex-layout'),
      }),
      'Flex-Layout Responsive API': t({
        urls: new TopicUrls(null, 'https://github.com/angular/flex-layout/wiki/Responsive-API'),
      }),
      'Change Detection': t(),
      'Dependency Injection': t({
        shortName: 'DI'
      }),
      'Modules': t(),
      'Router': t(),
      'Reactive Forms': t(),
      'Template-Driven Forms': t(),
      'Lazy Loading': t(),
      'i18n': t(),
      'HTTP': t(),
      'Angular Universal': t()
    }
  })
  AngularJS = tNoIcon({
    urls: new TopicUrls(
      null,
      'https://en.wikipedia.org/wiki/AngularJS',
      'https://github.com/angular/angular.js',
      null,
      'https://stackoverflow.com/questions/tagged/angularjs',
      'https://stackshare.io/angularjs',
      null,
    )
  })

  Ionic = tWide({
    urls: new TopicUrls(
      'https://ionicframework.com/',
      'https://en.wikipedia.org/wiki/Ionic_(mobile_app_framework)',
      'https://github.com/ionic-team/ionic',
      'https://www.npmjs.com/package/ionic',
      'https://stackoverflow.com/questions/tagged/ionic-framework',
      'https://stackshare.io/ionic',
      'https://twitter.com/Ionicframework',
    )
    // TODO: stencil, capacitor
  })

  Lodash = t()

}

export class Backend {
  D = t()
  Maven = t()
  Java = t()
  Hibernate = t()
  Flutter = t()
}


export class FrontendAndBackend /* App Platforms */{
  JHipster = t()
  Meteor = tWide()
  Hoodie = tWide()

}


export class Testing {
  TestCafe = t()

  // TODO: TestNG
  // TODO: JUnit
}

export class Tools {
}

export class ProjectManagementTools {
  'Agile Central' = t()
  'Bugzilla' = t()
  'JTrac' = t()
  'Trac' = t()
  'Redmine' = t()
  'TeamForge' = t({
    organisation: 'CollabNet',
  })
  'Jira' = t()
  'YouTrack' = t({
    organisation: 'JetBrains',
  })
}

export class Graphics {
  // TODO FIGma, inkscape, Affinity Designer, GIMP
  SVG = t()

}

export class Languages {
  Go = t()
  TypeScript = t()
  Kotlin = t()
  Swift = t()
  Python = t()
  Scala = t()
  Ruby = t()
  Perl = t()
  C = t()
  'C++' = t()
  'C#' = t()
  Dart = t()
  Groovy = t()
}

export class OS {
  Linux = t()
  'Ubuntu Linux' = t()
  'RedHat Linux' = t()
  'CentOS Linux' = t()
  macOS = t()
}

export class Mobile {
  iOS = t()
  Android = t()

}

export class Cloud {
  'Firebase' = t({
    subTopics: {
      // most are from firebase console left navbar:
      'Authentication': t(),
      'Realtime Database': t('Firebase-realtime-database'),
      'Cloud Firestore': t('firebase-firestore'),
      'Storage': t('Firebase-storage'),
      'Hosting': t('Firebase-hosting'),
      'Cloud Functions': t(),
      'Stability': t(),
      'Crashlytics': t('Crashlytics'),
      'Analytics': t(),
      'Grow': t(),
    }
  })
  GCP = t('logo_gcp_hexagon_rgb.png' /* FIXME: PNG is not square and takes 300K*/)

}

export class Databases {

}

export class VersionControl {
  Git = t()
  GitHub = t({
    categories: 'ProjectManagementTools' /* secondary categories */
  })
  Subversion = t()

}


/* Tech topics.
*
* Grouping (pick the right granularity based on count) :
* - frontend
* - backend
* - mobile
* - cloud
* - testing
* - languages (e.g. TypeScript)
* - tools (e.g. Git)
* - OS (Linux, Bash)
*/
export class Other {

  Promises = t()
  //
  Yarn = t()
  'D3.js' = t()
  NPM = t()
  jQuery = t()
  'ag-Grid' = tWide()
  MongoDB = t()
  Mongoose = t()
  Bootstrap = t()
  RxJS = t()
  ReactiveX = t()
  Firebase = t()
  NgRx = t()
  NGXS = t()
  KeystoneJS = t({
    urls: new TopicUrls(
      'http://keystonejs.com/'
    ),
  })
  Bash = t()
  Gradle = t()
  nginx = t()
  '.NET' = t()
  Rust = t()
  WebAssembly = t()
  Algolia = t()
  'Express.js' = tWide({
    logo: 'express.svg',
    subTopics: [
      tag('Kraken.js', 'krakenjs', 'http://krakenjs.com/'),
      tag('FeathersJS', 'feathersjs', 'https://feathersjs.com/'),
      tag('LoopBack', 'loopback', 'https://loopback.io/'),
      tag('MEAN Stack', 'meanio', 'http://mean.io/'),
      tag('Sails', 'sails', 'http://sailsjs.com/'),
    ],
    urls: new TopicUrls(
      'https://expressjs.com',
      'https://en.wikipedia.org/wiki/Express.js',
      'https://github.com/expressjs/express',
      'https://www.npmjs.com/package/express',
      'https://stackoverflow.com/questions/tagged/express',
      'https://stackshare.io/expressjs',
      'https://twitter.com/expressjs',
      // TOOD: 'https://alternativeto.net/software/expressjs/',
    )
  })

  RegExp = t()
  AngularFire = t()
  Lua = t()
  'Java Swing' = t()
  HTML5 = t()
  CSS3 = t()
  ElasticSearch = t()
  WebSocket = t()
  Jest = t()
  Figma = t()
  'Node.js' = t()
  Capacitor = t()
  Stencil = t()
  GraphQL = t()
  XYZ = t()
   // = t()
  // TODO: stuff like BugZilla, Trello, Agile Central
  // TODO: groups (here or in experience), like FrontEnd, BackEnd, Languages, Other
}

export function processTopics<T>(inputTopics: T/*: Topics*/): T {
  // inputTopics = setIdsFromKeys(inputTopics, 'name')
  for (let topicKey of Object.getOwnPropertyNames(inputTopics)) {
    if ( inputTopics.hasOwnProperty(topicKey) ) {
      // console.log('transformTopics', topicKey)
      let topic: Topic = inputTopics[topicKey]
      if ( ! topic ) {
        topic = new Topic(topicKey)
      }
      inputTopics[topicKey] = topic
      topic.setNameAndLogoAndId(topicKey) // TODO ; or setNameAndIdAndIcon
      topic.sealAndValidate() // finalise / solidify
    }
  }
  return inputTopics
}

export type Topics =
  Frontend & FrontendAndBackend & Backend & Other & Testing & Tools & Languages & OS & Mobile & Cloud &
  ProjectManagementTools & Graphics & VersionControl & Databases

console.log('new Frontend().constructor.name', new Frontend().constructor.name)
console.log('new Frontend.name', Frontend.name)

function mergeTopics<T1, T2, T3, T4, T5>(t1: T1, t2: T2, t3: T3, t4: T4, t5?: T5) {
  return Object.assign({}, Object.create(t1 as any), Object.create(t2 as any), Object.create(t3 as any), Object.create(t4 as any), Object.create(t5 as any));
}

function processCategory<T>(cat: T) {
  let catName = cat.constructor.name;
  Object.keys(cat).forEach(key => {
    console.log('processing category key', key)
    cat[key].category = catName
  });
  return cat
}

export const topics: Topics = processTopics(
  // mergeTopics(Frontend, Backend, Other, Testing, {})
  // mergeTopics(new Frontend, Backend, Other, Testing, {})
  Object.assign({},
    processCategory(new Frontend()),
    processCategory(new Backend()),
    processCategory(new FrontendAndBackend()),
    processCategory(new Other()),
    processCategory(new Testing()),
    processCategory(new Tools()),
    processCategory(new Languages()),
    processCategory(new Databases()),
    processCategory(new VersionControl()),
    processCategory(new ProjectManagementTools()),
    processCategory(new Graphics()),
    processCategory(new OS()),
    processCategory(new Mobile()),
    processCategory(new Cloud()),
  )
)

export const topicsArr = getDictionaryValuesAsArray(topics as { [p: string]: any })
