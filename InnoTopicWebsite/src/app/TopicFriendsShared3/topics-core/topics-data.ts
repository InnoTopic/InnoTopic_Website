import {
  getDictionaryValuesAsArray,
  setIdsFromKeys,
} from '../../utils/dictionary-utils';
import {
  Topic,
  TopicUrls,
} from './Topic';
import {
  tag,
  tagLogoType,
  tagNoIcon,
  TopicCategory,
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

export function t(topicData?: TopicDataOrLogo, iconWebsiteTodo?: string | string[]) {
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

export function tWide(topicData?: TopicDataOrLogo, logoSize?: number[]) {
  topicData = coerceLogoToTopicData(topicData);
  return t({...topicData, logoTypeWide: true, logoSize})
}

export function tNoIcon(topicData?: TopicData) {
  return t({...topicData, logo: null})
}

export class Frontend {
  'HTML5' = t({logo: 'html-5.svg'})
  'CSS3' = t({logo: 'css-3.svg'})
  'PWA' = tWide()
  'D3.js' = t({logo: 'd3.svg'}) // TODO Vega [Lite] - on top of d3. From Luis Sanchez
  'Chart.js' = t({logo: "chart-js.svg" /* non-standard svg*/})
  'Stylus' = tWide()
  'Less' = tWide()
  'Sass' = tWide()
  // TODO: https://www.pollen.style/
  // TODO: alpine.js (added logo svg)
  // TODO: Lit elements (Moi)

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
  Nx = tWide({
    logo: 'nx-logo-white.svg',
    // logoSize: [1048, 652], // FIXME
    iconUrl: 'https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png',
  })
  xplat = tWide('xplat-logo.png', [899, 393])
  'Web Components' = tWide('webcomponents')
  // TODO: https://www.webcomponents.org/ logo
  WebPack = t()
  Vite = t('vitejs')
  Turbopack = t('turbopack-icon.svg')
  Turborepo = t('turborepo-icon.svg')
  pnpm = t('pnpm-icon')
  Angular = t({
    logo: 'angular-icon',
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
      'Angular Universal': t(),
    }
  })
  Codelyzer = t()
  'Angular Elements' = t('angular-elements-logo.png')
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

  Ionic = t({
    /* logos: https://ionicframework.com/press */
    logo: 'ionic-icon.svg',
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
  Stencil = tWide('stenciljs-icon.svg')
  "WebKit" = t()
  "NW.js" = t('nodewebkit') /* NW.js */
  'Electron' = t()
  'Expo' = t('expo-icon')
  'Vue.js' = t({logo: 'vue'})
  'Gridsome' = t({logo: 'gridsome-icon.svg'})
  'Svelte' = t('svelte-icon')
  // TODO Phoenix  https://www.phoenixframework.org/  supposedly most loved; https://github.com/phoenixframework/phoenix
  'SolidJS' = t('solidjs-icon')
  'Qwik' = t('qwik')
  'Astro' = t('astro-icon.svg')
  'Mithril' = t()
  'Marko' = tWide('marko-cropped.svg')
  'Alpine.js' = tWide('alpinejs-icon.svg')
  'Rax' = t()
  'Riot' = t()
  'Vercel' = t('vercel-icon.svg')
  'Storyblok' = t('storyblok-icon.svg')

  // TODO: https://web.dev/

  Lodash = t()
  'TypeDI' = tNoIcon() // TODO move to Frontend & Backend / JavaScript / TypeScript
  'TypeStack' = tNoIcon()

  Bootstrap = t()
  'React-Bootstrap' = t('react-bootstrap.svg')
  "Material Design" = t('Google_Material_Design_Logo.svg')
  jQuery = tWide()
  'AG Grid' = tWide('ag-grid')
  'ApexCharts.js' = tNoIcon()
  AngularFire = tNoIcon()
  NgRx = t()
  // NGXS = t({logo: 'ngxs.png', logoSize: [442, 132]})
  NGXS = t() // https://github.com/adisreyaj/store/pull/1/commits/4a7702048653a5261694c40b6ceb61f77a82b59a#diff-feb17517a55f6687ca9433cf00fab45526e32f6b05f018096c0806f1dc767ac8
  MobX = t()
  "MobX-State-Tree" = t(`mobx-state-tree-logo.svg`
    /* https://github.com/mobxjs/mobx-state-tree/blob/b6c1c9b29d7bd7525ac6588f8f67f6c13eb17b2b/website/static/img/mobx-state-tree-logo.svg
    * https://github.com/mobxjs/mobx-state-tree/blob/master/website/static/img/mobx-state-tree-logo.svg
    * */)
  Redux = t()
  "Redux Toolkit" = t(`redux--toolkit.svg`)
  Recoil = tWide('recoil-icon')

  React = t()
  Preact = t()
  Gatsby = t('Gatsby-Monogram.svg', /* https://www.gatsbyjs.com/guidelines/logo */)
  "Next.js" = t('nextjs-icon.svg')
  "Remix" = t('remix-icon.svg') /* https://remix.run/ */
  // TODO: Chakra
  GreenSock = t('greensock-icon.svg')
  Ember = tWide()
  WebSocket = t()
  'Chrome Extensions' = t('chrome.svg')
  'Dexie.js' = t('dexie-js.svg')
  'Aurelia' = t()
  'Font Awesome' = t('fort-awesome-alt-brands.svg')
  Workbox = tWide('Workbox-Logo-Grey.svg')
  'SVG.js' = t('svg-js.png' /* WTF, PNG for an SVG lib :D */)
  'Storybook' = t('storybook-icon.svg')
  // TODO: storyblok?
  // TODO: SVGPorn
  'DDD - Domain-Driven Design' = t('project-diagram-solid.svg')
  // TODO Scully
  Lighthouse = t('google--lighthouse-logo.svg' /*
    https://developers.google.com/web/tools/lighthouse
    https://developers.google.com/web/tools/lighthouse/images/lighthouse-logo.svg*/
  )
  'three.js' = tNoIcon(/*
    https://threejs.org/
    pressKit: https://github.com/mrdoob/three.js/issues/2789

   */)
  'WebGL' = tWide('webgl-cropped.svg',
    /* pressKit: https://www.khronos.org/legal/trademarks/
     logoFile: https://www.khronos.org/assets/utilities/retrieveFile.php?d=webgl&t=logopacks*/
  )
  'glTF' = tWide({logo: 'GlTF_Official_Logo.svg', /*logoSize: [1250, 1168]*/ }
    /* pressKit: https://www.khronos.org/legal/trademarks/
     logoFile: https://www.khronos.org/assets/utilities/retrieveFile.php?d=gltf&t=logopacks
     https://upload.wikimedia.org/wikipedia/en/d/dd/GlTF_Official_Logo.svg
     https://www.khronos.org/assets/images/api_logos/gltf.svg
     */
  )
  'Micro Frontends' = tNoIcon(/* https://martinfowler.com/articles/micro-frontends.html */)
}

export class JavaScript {
  Promises = t()
  JavaScript = t()
  // RxJS = tNoIcon()
  RxJS = t('reactivex')
  // TODO: more like ecosystem
}

export class Java {
  // TODO: more like ecosystem

}

export class Backend {
  // TODO: hapi fastify apollo-server koa
  // TODO: type-graphql, typeORM
  'Microservices' = tNoIcon()
  'TypeORM' = tNoIcon()
  'TypeGraphQL' = t(`typegraphql-icon.svg` /* https://github.com/MichalLytek/type-graphql/issues/824 */)
  'Apollo' = t(`apollostack.svg`)
  'Apollo Studio' = t(`apollostack.svg`)

  'Node.js' = tWide({
    logo: 'nodejs-icon.svg',
    logoSmallIcon: 'nodejs-icon.svg',
  })
  'NestJS' = t(`nest--logo-small.ede75a6b.svg`)
  'GraalVM' = tWide('graalvm-rgb-cropped.svg')
  GraphQL = t()
  RabbitMQ = t()
  Swagger = t()
  Django = t()
  Laravel = t()

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
      // TODO: 'https://alternativeto.net/software/expressjs/',
    )
  })

  'Deno' = t()
  "Bun" = tWide() /* TODO: mark as non-main experience; written in Zig */


  KeystoneJS = t({
    urls: new TopicUrls(
      'http://keystonejs.com/'
    ),
  })

  Spring = t()
  'Spring Boot' = t()

  Hibernate = t()
  Docker = tWide('docker-simple'/* https://www.docker.com/company/newsroom/media-resources */)
  'Vagrant' = t()
  Terraform = t('terraform-icon.svg')
  Kubernetes = t(/* they had a typo: 'kubernets.svg'*/)
  ElasticSearch = t(/* https://www.elastic.co/brand */)
  NGINX = tWide()
  'Ruby On Rails' = t()
}


export class Frontend_And_Backend_App_Platforms {
  JHipster = t()
  Meteor = tWide()
  Hoodie = tWide()
  Akita = tNoIcon() // https://github.com/datorama/akita
}

export class Testing {
  TestCafe = t()
  Cypress = t('cypress-icon.svg' /*`cypress-io-logo-round-flat.svg`*/)
  Spock = tNoIcon()
  Jest = t()
  Karma = t()
  Jasmine = t()
  JUnit = t({logo: 'Junit.fe42161b-ugly.svg', logoSize: [125, 84], iconUrl: `https://zebrunner.com/`})
  TestNG = t({logo: 'testng.png', logoSize: [634, 176]})
  Cucumber = t()
  Calabash = tNoIcon()
  Cobertura = tNoIcon()
  Mockito = tNoIcon()
}

export class Tools {
  WebStorm = t(/* https://www.jetbrains.com/de-de/company/brand/logos/ */)
  RubyMine = t()
  'Android Studio' = t('Android_Studio_icon.svg')
  Eclipse = t()
  'IntelliJ IDEA' = t()
  'NetBeans' = t('apache-netbeans')
  'Visual Studio' = t()
  'Visual Studio Code' = t()
  'Vim' = t()
  // ==== CI:
  'CircleCI' = t()
  'Travis CI' = t()
  'Jenkins' = t('jenkins-icon')
  'Zeplin' = t()
  'Slack' = t('slack-icon.svg')
  'PandaDoc' = tNoIcon() /* FIXME logo */
  'Datadog' = t('datadog-icon')
  'Dynatrace' = t('dynatrace-icon')
  'Netlify' = t()
  'VirtualBox' = t({
    iconUrl: 'https://icons8.com/icons/set/oracle-vm-virtualbox'
  })
}

export class Project_Management_Tools {
  'Pivotal Tracker' = t(`pivotal_tracker.svg`)
  'Bugzilla' = tNoIcon()
  'Trello' = t()
  'JTrac' = t()
  'Trac' = t()
  'Redmine' = t()
  'TeamForge' = tNoIcon({
    organisation: 'CollabNet',
  })
  'Jira' = tWide()
  // TODO: Clubhouse
  // TODO: Monday.com
  'Agile Central' = tNoIcon()
  'YouTrack' = t({
    organisation: 'JetBrains',
  })
}

export class Graphics {
  SVG = t({
    // logo: 'svg-logo-v.svg',
    categories: 'Frontend',
  })
  Figma = t()
  SVGator = tWide('svgator-icon.svg')
  InVision = t()
  Blender = tWide()
  'Adobe Illustrator' = t('Adobe_Illustrator_CC_icon.svg')
  'Adobe Photoshop' = t('adobe--photoshop-32x32.svg')
  'Adobe Creative Cloud' = t('adobe--creativecloud-32x32.svg')
  'Affinity Designer' = t('affinity-designer.svg')
  'Gravit Designer' = t('gravitio-icon.svg')
  'GIMP' = t('gimp-wilber-big.png')
  'Inkscape' = t('inkscape-logo.svg')
}

export class Languages {
  'JetBrains MPS' = t()
  Java = t()
  Go = tWide('go-logo-white.svg')
  TypeScript = t('typescript-icon')
  Kotlin = t({
    logo: 'kotlin-icon.svg',
    categories: 'Mobile',
  })
  Swift = t()
  Ruby = t()
  Crystal = t()
  Markdown = t()

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
  Clojure = t()
  Perl = t()
  Raku = tWide('raku-cropped.svg')
  Fortran = t()
  // TODO

  C = t()
  'C++' = t()
  'C#' = t('c_sharp.svg')
  Dart = t()
  Groovy = tWide()
  Elm = t()
  Zig = tWide('zig-icon.svg')
  Rust = t()
  WebAssembly = t({
    categories: "Frontend",
    ecosystem: "JavaScript",
  })
  AssemblyScript = t()

  Bash = t('bash-icon.svg')
  Lua = t('lua-no-text.svg')
  Eiffel = tWide('eiffel-no-text.svg')
  Erlang = tWide('erlang-no-text.svg')
  Elixir = tWide('elixir-lang-icon.svg')
  Haskell = t('haskell-icon')
  Lisp = tWide('lisp-logo.svg')
  OCaml = tWide('ocaml-no-text.svg'/* https://ocaml.org/docs/logos.html  http://ocaml.org/logo/Colour/SVG/colour-logo.svg
      Square -- https://ocaml.org/img/OCaml_Sticker.svg */)
  'R Language' = t('r-lang.svg')
  'V Language' = t('v-logo.svg')
  // 'Nim Language': https://nim-lang.org/,
  'D Language' = tWide('dlang-simple'/*, 'https://en.wikipedia.org/wiki/File:D_Programming_Language_logo.svg'*/)
  Julia = tWide('julia-dots-no-text.svg', /*{
    logo: ,
    iconWebsite: ['https://github.com/JuliaLang/julia-logo-graphics/tree/master/images', 'https://github.com/JuliaLang/julia-logo-graphics/blob/master/images/julia-logo-color.svg'],
  }*/)
  PHP = tWide()
  // TODO: PHP & Hack lang, HHVM
}

export class OS {
  Linux = t('tux.svg')
  'Ubuntu Linux' = t('ubuntu.svg')
  'SUSE Linux' = tWide('suse.svg')
  'RedHat Linux' = t('redhat-icon.svg')
  'CentOS Linux' = tWide('centos.svg')
  'Debian Linux' = t('debian.svg')
  'Fedora Linux' = t('fedora.svg' /* Officially just "Fedora", but better for filtering*/)
  'macOS' = t('macosx.svg')
  'Microsoft Windows' = t()
}

export class Mobile {
  iOS = t()
  Android = tWide({
    logo: 'android-icon.svg',
    subTopics: {
      'Recycler View': tNoIcon({}),
    }
  })
  Capacitor = t(`capacitor-icon.svg`) // FIXME: remove (is in sub-topics of Ionic)
  Cordova = t()
  PhoneGap = t()
  NativeScript = t()
  Flutter = tWide('flutter.svg')
  'Java Micro Edition' = t('java')
  'BlackBerry' = tNoIcon()
}

export class Cloud {
  // TODO: cloud-native
  'Firebase' = t({
    subTopics: {
      // most are from firebase console left navbar:
      'Authentication': t(),
      'Realtime Database': t('Firebase-realtime-database.svg'),
      'Storage': t('Firebase-storage.svg'),
      'Hosting': t('Firebase-hosting.svg'),
      'Cloud Functions': t(),
      'Stability': t(),
      'Crashlytics': t('Crashlytics.svg'),
      'Analytics': t(),
      'Grow': t(),
    }
  })
  'Cloud Firestore' = t('firebase-firestore.svg')

  'GCP - Google Cloud Platform' = t({
    logo: 'gcp-google-cloud-platform-logo.svg',
    iconUrl: 'logo_gcp_hexagon_rgb.png'
    /* logos SVG-s: https://googlecloudcheatsheet.withgoogle.com/ */
  })
  Algolia = t('algolia-cropped.svg')
  AWS = tWide()
  "Microsoft Azure" = t('microsoft-azure')
}

export class Databases {
  MongoDB = tWide('mongodb-icon.svg')
  ArangoDB = tWide()
  Mongoose = tNoIcon()
  // TODO
  NoSQL = tNoIcon()
  SQL = tNoIcon()
  PostgreSQL = t()
  MySQL = t('mysql-icon')
  MariaDB = t()
  Oracle = tWide()
  IndexedDB = tNoIcon()
  SurrealDB = t('surrealdb-icon')
  // TODO: sqlite
}

export class Version_Control {
  Git = t({
    logo: 'git-icon.svg',
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
  GitLab = t({
    categories: 'ProjectManagementTools' /* secondary categories */,
  })
  'Gerrit' = tNoIcon()
  Subversion = t()
  'Plastic SCM' = t()

}


/*
* Tech topics.
*
* Grouping (pick the right granularity based on count) :
*/
export class Other {
  'Mailgun' = t('mailgun-icon.svg')
  'reCAPTCHA' = t('recaptcha.svg') // TODO: crop icon only
  'YouTube' = tWide('youtube-icon.svg')
  'LinkedIn' = t('linkedin-icon')
  'Spotify' = t()
  'AudioSalad' = t(`audiosalad-traced.svg`)
  'WorldFirst' = tNoIcon()
  'Payoneer' = tWide()
  'PayPal' = t()
  'TransferWise' = tNoIcon()
  'Axios' = tNoIcon()
  'Meetup' = tWide(`meetup-seeklogo.com.svg`)
  'Wikipedia' = tWide(`generic/fun/wikipedia-w2.svg`)
  'Google Play' = t('google-play-icon')
  'WordPress' = t('wordpress-icon.svg')
  '.NET' = t('dotnet-logo-2020.svg', 'https://github.com/dotnet/brand/blob/main/logo/dotnet-logo.svg')
  'Blazor' = tWide('blazor2.svg', /*['https://worldvectorlogo.com/logo/blazor', 'https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor']*/)
  // 'NET.smth' = t('dotnet.svg') // for testing dot
  // 'test' = t('dotnet.svg')

  ReactiveX = t()
  Airtable = t()
  Notion = t('notion-icon-no-text.svg')
  Coda = t('coda-icon.svg')
  Observable = t('observablehq.svg')
  Carbide = t('carbide.svg')
  // FIXME Bubble = t('observablehq.svg')
  Zapier = t('zapier-icon')
  IFTTT = tWide('ifttt.svg')
  // ======== LowCode / NoCode / CMS:
  WebFlow = t('webflow-mark-vector-blue.svg') /* https://brand-at.webflow.io/resources#logos */
  Wix = tWide()
  'Builder.io' = t('builder-io-icon')
  'Budibase' = tWide('budibase-icon')
  'Bubble' = t('bubble-icon')
  'Framer' = t()


  RegExp = t('_icon_hammer-solid.svg')
  'Java Swing' = t('java')
  'Google Maps' = tNoIcon()
  Guice = tNoIcon()
  SOAP = tNoIcon()
  XML = tNoIcon()
  'XML Schema' = tNoIcon()
  BiPRO = tNoIcon()
  DDEX = tNoIcon()
  PDF = tNoIcon()
  iText = tNoIcon()
  JAXB = tNoIcon()
  'Customer Support' = t('user-solid.svg')
  'Agile' = t('project-diagram-solid.svg')
  'Scrum' = t('project-diagram-solid.svg')
  'ALM - Application Lifecycle Management' = t('project-diagram-solid.svg')
  'Algorithms' = t('project-diagram-solid.svg')
  'Data Structures' = t('project-diagram-solid.svg')
  'OOP - Object Oriented Programming' = t('project-diagram-solid.svg')
  'SOLID Principles' = t('project-diagram-solid.svg')
  'API Design' = t('project-diagram-solid.svg')
  'Library Design' = t('project-diagram-solid.svg')
  'FP - Functional Programming' = t('project-diagram-solid.svg')
  'AOP - Aspect-Oriented Programming' = t('project-diagram-solid.svg')
  'Design Patterns' = t('project-diagram-solid.svg')
  'Software Architecture' = t('project-diagram-solid.svg')
  // TODO: UML
  'Refactoring' = t('_icon_hammer-solid.svg')
  'Code Review' = t('project-diagram-solid.svg')
  'TDD - Test-Driven Development' = t('project-diagram-solid.svg')
  'BDD - Behavior-Driven Development' = t('project-diagram-solid.svg')
  'DSL - Domain-Specific Languages' = t('project-diagram-solid.svg')
  'Antipatterns' = t('project-diagram-solid.svg')
  'Making Presentations' = t('project-diagram-solid.svg')
  'Leadership' = t('project-diagram-solid.svg')
  'Performance Optimization' = t('project-diagram-solid.svg')
  'Performance Profiling' = t('project-diagram-solid.svg')
  'UX - User Experience' = t('project-diagram-solid.svg')
  'Troubleshooting' = t('project-diagram-solid.svg')
  'Graphic Design' = t('project-diagram-solid.svg')
  'Testing' = t('project-diagram-solid.svg')
  // TODO: google docs
}

export class Crypto {
  Bitcoin = t()
  Ethereum = t()
  Solidity = t()
  "Web3" = t()
  "web3.js" = t('web3js')
  "ethers.js" = t('ethers.svg')
}


/** AI / Machine Learning ML */
export class AI {
  OpenAI = t('openai-icon')
  'Open Assistant' = tWide('open-assistant-icon-wide.svg') // https://github.com/LAION-AI/Open-Assistant
  'LAION' = t()
  'Stable Diffusion' = tWide('stable-diffusion-logo-vectorizer.ai.svg') // https://github.com/LAION-AI/Open-Assistant
  'Stability AI' = tWide('stability-ai-vectorizer.ai.svg') // https://github.com/LAION-AI/Open-Assistant https://www.linkedin.com/company/stability-ai/
  'Google Colaboratory' = tWide('google-colab-icon-wide.svg')
  TensorFlow = t()
  'Hugging Face' = tWide('huggingface_logo-noborder.svg')
  Jupyter = tWide('jupyter-icon2')
  PyTorch = tWide('pytorch-icon')
  Keras = t/*Wide*/('keras.svg'/*{
    https://github.com/valohai/ml-logos/blob/master/keras.svg
    logo: 'keras-logo-2018-large-1200.png',
    logoSize: [1200, 348],
    logoSmallIcon: 'keras-logo-small.jpg',
  }*/)
}

export class Build_Systems_And_Package_Managers {
  Gradle = t()
  Maven = tWide()
  Yarn = t()
  NPM = tWide()
  Bazel = t(`bazel-icon.svg`)
}

export class FunAndSports {
  Volleyball = t(`generic/fun/volleyball-ball-solid.svg`) /* TODO FIVB logo - cool*/ /* TODO: beach volleyball icon - net on the sand */
  'Interpersonal Networking' = t('generic/users-solid.svg')
  'Hiking' = t('generic/fun/hiking-solid')
  Outdoors = t('generic/fun/cloud-sun-solid.svg')
  Nature = t('generic/fun/tree-solid.svg')
  'Car trips' = t('generic/fun/car-solid')
  'Bicycle' = tWide('generic/fun/bicycle-solid')
  'Table Tennis' = t('generic/fun/table-tennis-solid.svg') /* search terms: ping pong */
  Padel = t('generic/fun/tennis-ball-svgrepo-com.svg')/* search terms: paddle paddel */
  Swimming = tWide('generic/fun/swimmer-solid-karol.svg')
  Chess = t('generic/fun/chess-solid.svg')
  'Triskelion' = t('generic/fun/triskelion4.svg')
  'Business' = t('generic/business--chart-line')
  'Psychology' = t('generic/brain-solid')
  'Guitar' = t('generic/fun/heavy-metal-sharpen-guitar-like-an-insect-svgrepo-com.svg')
  'ASG' = t('generic/fun/gun.svg')
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
  Project_Management_Tools & Graphics & Version_Control & Databases & Java & JavaScript & Build_Systems_And_Package_Managers &
  AI & Crypto & FunAndSports

function mergeTopics<T1, T2, T3, T4, T5>(t1: T1, t2: T2, t3: T3, t4: T4, t5?: T5) {
  return Object.assign({}, Object.create(t1 as any), Object.create(t2 as any), Object.create(t3 as any), Object.create(t4 as any), Object.create(t5 as any));
}

function processCategory(cat: TopicCategory): TopicCategory {
  // let catName = cat.constructor.name;
  let catName = cat.name;
  // (cat as any).name = catName
  let catTopics = cat.topicsById;
  Object.keys(catTopics).forEach(key => {
    // console.log('processing category key', key)
    // if ( key !== 'name' ) {
    let topic = catTopics[key];
    topic.category = catName
    // }
  });
  cat.topicsArray = getDictionaryValuesAsArray(cat.topicsById)
  return cat
}

/** Note: names are specified as strings, because in ng prod build, class names are lost */
export const topicCategoriesArray = [
  new TopicCategory('Frontend', new Frontend()),
  new TopicCategory('Backend', new Backend()),
  new TopicCategory('Frontend and backend app platforms', new Frontend_And_Backend_App_Platforms()),
  new TopicCategory('Testing', new Testing()),
  new TopicCategory('Tools', new Tools()),
  new TopicCategory('Languages', new Languages()),
  new TopicCategory('Databases', new Databases()),
  new TopicCategory('Version Control', new Version_Control()),
  new TopicCategory('Project Management Tools', new Project_Management_Tools()),
  new TopicCategory('Graphics', new Graphics()),
  new TopicCategory('OS', new OS()),
  new TopicCategory('Mobile', new Mobile()),
  new TopicCategory('Cloud', new Cloud()),
  new TopicCategory('Java', new Java),
  new TopicCategory('JavaScript', new JavaScript()),
  new TopicCategory('Build Systems and package managers', new Build_Systems_And_Package_Managers()),
  new TopicCategory('AI', new AI()),
  new TopicCategory('Other', new Other()),
  new TopicCategory('Crypto', new Crypto()),
  new TopicCategory('Fun and Sports', new FunAndSports()),
]

export const topics: Topics = processTopics(
  // mergeTopics(Frontend, Backend, Other, Testing, {})
  // mergeTopics(new Frontend, Backend, Other, Testing, {})
  Object.assign({}, ... topicCategoriesArray.map(cat => processCategory(cat).topicsById))
)

export const topicsArr = getDictionaryValuesAsArray(topics as { [p: string]: any })
