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
  tagLogoType,
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
  // console.log('topic instantiated', topic)

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
  'HTML5' = t({logo: 'html-5'})
  'CSS3' = t({logo: 'css-3'})
  'PWA' = tWide()
  'D3.js' = t({logo: 'd3'}) // Vega [Lite] - on top of d3. From Luis Sanchez
  'Chart.js' = t({logo: "chart-js" /* non-standard svg*/})
  'Stylus' = tWide()
  'Less' = tWide()
  'Sass' = t()

  PouchDB = t({categories: 'Databases'})
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
  Nx = t({
    logo: 'nx-logo.png',
    // logoSize: [1048, 652], // FIXME
    iconUrl: 'https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png',
  })
  WebPack = t()
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
  'Angular Material' = t()
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
    ),
    subTopics: {
      Stencil: tNoIcon(),
      Capacitor: tNoIcon(),
    }
  })

  Lodash = t()
  Bootstrap = t()
  jQuery = tWide()
  'ag-Grid' = tWide()
  AngularFire = tNoIcon()
  NgRx = t()
  NGXS = tNoIcon()
  WebSocket = t()
  'Chrome Extensions' = t('chrome')
  'Dexie.js' = t('dexie-js')
  'Aurelia' = t()
  'Font Awesome' = t('fort-awesome-alt-brands')
}

export class JavaScript {
  Promises = t()
  RxJS = tNoIcon()
  // TODO: more like ecosystem
}

export class Java {
  // TODO: more like ecosystem

}

export class Backend {
  'Node.js' = tWide('nodejs')

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

  KeystoneJS = t({
    urls: new TopicUrls(
      'http://keystonejs.com/'
    ),
  })
  D = tNoIcon()
  Rust = t()

  Java = t()
  Hibernate = t()
  Docker = tWide()
  ElasticSearch = t()
  nginx = tWide()
}


export class Frontend_And_Backend_App_Platforms {
  JHipster = t()
  Meteor = tWide()
  Hoodie = tWide()
}

export class Testing {
  TestCafe = t()
  Jest = t()
  Karma = t()
  Jasmine = t()

  // TODO: TestNG
  // TODO: JUnit
}

export class Tools {
  WebStorm = t()
  'Visual Studio Code' = t()
  'Vim' = t()
}

export class Project_Management_Tools {
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
  SVG = t({
    categories: 'Frontend',
  })
  Figma = t()

}

export class Languages {
  Go = tNoIcon()
  TypeScript = t()
  Kotlin = t({
    categories: 'Mobile',
  })
  Swift = t()
  Ruby = t()
  'Ruby On Rails' = t()

  Python = t({
    urls: new TopicUrls(
      'https://www.python.org/',
      'https://en.wikipedia.org/wiki/Python_(programming_language)',
      'https://github.com/python',
      null,
      'https://stackoverflow.com/questions/tagged/python',
      'https://stackshare.io/python',
      'https://twitter.com/ThePSF'
    )
  })
  Scala = t()
  Perl = t()

  C = t()
  'C++' = t()
  'C#' = t('c_sharp')
  Dart = t()
  Groovy = tWide()
  Rust = t()
  WebAssembly = t({
    categories: "Frontend",
    ecosystem: "JavaScript",
  })
  Bash = t()
  Lua = t()

}

export class OS {
  Linux = t('tux')
  'Ubuntu Linux' = t('ubuntu')
  'SUSE Linux' = t('suse')
  'RedHat Linux' = t('redhat')
  'CentOS Linux' = tWide('centos')
  'Debian Linux' = t('debian')
  'Fedora Linux' = t('fedora' /* Officially just "Fedora", but better for filtering*/)
  'macOS' = t('macosx')
  'Microsoft Windows' = t()
  'VirtualBox' = t({
    iconUrl: 'https://icons8.com/icons/set/oracle-vm-virtualbox'
  })
}

export class Mobile {
  iOS = t()
  Android = t({
    subTopics: {
      'Recycler View': tNoIcon({}),
    }
  })
  Capacitor = t() // FIXME: remove
  Flutter = tNoIcon()
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
  GCP = t({
    logo: 'gcp.png',
    iconUrl: 'logo_gcp_hexagon_rgb.png'
  })
  Algolia = tWide()
}

export class Databases {
  MongoDB = tWide()
  Mongoose = tNoIcon()
  GraphQL = t()
  NoSQL = tNoIcon()
  PostgreSQL = t()
  MySQL = t()
  Oracle = tWide()
  // TODO: sqlite
}

export class Version_Control {
  Git = t({
    subTopics: {
      Rebase: {},
      Submodules: {},
      Bisect: {},
    }
  })
  GitHub = t({
    logo: 'github-icon',
    categories: 'ProjectManagementTools' /* secondary categories */,
  })
  Subversion = t()
  'Plastic SCM' = t()

}


/*
* Tech topics.
*
* Grouping (pick the right granularity based on count) :
*/
export class Other {
  'WordPress' = t('wordpress-icon')
  'Travis CI' = t()
  '.NET' = t('dotnet')

  ReactiveX = t()

  RegExp = tNoIcon()
  'Java Swing' = tNoIcon()
  // TODO: stuff like BugZilla, Trello, Agile Central
  // TODO: groups (here or in experience), like FrontEnd, BackEnd, Languages, Other
}

export class Build_Systems_And_Package_Managers {
  Gradle = t()
  Maven = tWide()
  Yarn = t()
  NPM = tWide()
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
  Frontend & Frontend_And_Backend_App_Platforms & Backend & Other & Testing & Tools & Languages & OS & Mobile & Cloud &
  Project_Management_Tools & Graphics & Version_Control & Databases & Java & JavaScript & Build_Systems_And_Package_Managers

function mergeTopics<T1, T2, T3, T4, T5>(t1: T1, t2: T2, t3: T3, t4: T4, t5?: T5) {
  return Object.assign({}, Object.create(t1 as any), Object.create(t2 as any), Object.create(t3 as any), Object.create(t4 as any), Object.create(t5 as any));
}

function processCategory<T>(cat: T) {
  let catName = cat.constructor.name;
  Object.keys(cat).forEach(key => {
    // console.log('processing category key', key)
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
    processCategory(new Frontend_And_Backend_App_Platforms()),
    processCategory(new Other()),
    processCategory(new Testing()),
    processCategory(new Tools()),
    processCategory(new Languages()),
    processCategory(new Databases()),
    processCategory(new Version_Control()),
    processCategory(new Project_Management_Tools()),
    processCategory(new Graphics()),
    processCategory(new OS()),
    processCategory(new Mobile()),
    processCategory(new Cloud()),
    processCategory(new Java),
    processCategory(new JavaScript()),
    processCategory(new Build_Systems_And_Package_Managers()),
  )
)

export const topicsArr = getDictionaryValuesAsArray(topics as { [p: string]: any })
