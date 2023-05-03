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
  // console.log('coerceLogoToTopicData: topicData = ', topicData);
  if (typeof (topicData) === 'string') {
    topicData = {
      logo: topicData as string,
    }
  }
  // console.log('coerceLogoToTopicData: coerced topicData = ', topicData);
  return topicData;
}

export function t(topicData?: TopicDataOrLogo, iconWebsiteTodo?: string | string[]) {
  topicData = coerceLogoToTopicData(topicData !)
  const topic = Object.create(Topic.prototype)
  Object.assign(topic, topicData)
  // console.log(`t()`, `topicData`, topicData, `topic`, topic, `topic.id`, topic.id)
  // TODO: instantiate Topic class (once we have id). But be careful, if using Object.create, ctor is not called
  // console.log('topic instantiated', topic)

  // instantiate as soon as possible, even incomplete object; even before ID
  // to have access to utility methods e.g. fluent API like .setLogo()
  // and to avoid changing object prototype
  // when having id and post-processing, call smth like finaliseAndValidate, which will post-process/mangle id/name if necessary (keep in mind topics-old which already have name&id)
  // https://jeena.net/constructor-object-create
  return topic
}


/* Just a placeholder and redirect */
export function tNarrow(topicData?: TopicDataOrLogo, logoSize?: number[]) {
  return tWide(topicData, logoSize)
}

export function tSquare(topicData?: TopicDataOrLogo, logoSize?: number[]) {
  return tWide(topicData, logoSize)
}


export function tWide(topicData?: TopicDataOrLogo, logoSize?: number[]) {
  topicData = coerceLogoToTopicData(topicData!);
  return t({...topicData, logoTypeWide: true, logoSize})
}

export function tNoIcon(topicData?: TopicData) {
  return t({...topicData, logo: undefined})
}


export class Frontend_Visual {
  Bulma = tNarrow(/* {tagline: 'Modern CSS framework based on Flexbox'} */)
  'Chakra UI' = t('chakra-ui-icon'/* {tagline: '⚡️ Simple, Modular & Accessible UI Components for your React Applications'} */)
  'Mantine' = tNarrow('mantine-icon.svg'/* {tagline: 'A fully featured React components library'} */)
}

/** TODO split (here, not in highlights) into
 * Frontend - UI/visual (bigger icons for me) (ui libs - where is the line - if it deals with HTML markup; or generates smth visual html/css/svg etc; sass, webgl; maybe docusaurus)
 *  - another criterion: stuff that I actually use for my own apps; e.g. I wouldnt care too much about e.g. Business Intelligence (yest?)
 * Frontend - Other (includes libs like lodash, state mgmt) */
export class Frontend {
  'HTML5' = t({logo: 'html-5.svg'})
  'CSS3' = t({logo: 'css-3.svg'})
  'PWA' = tWide()
  'D3.js' = t({logo: 'd3.svg'}) // TODO Vega [Lite] - on top of d3. From Luis Sanchez
  'Chart.js' = t({logo: "chart-js.svg" /* non-standard svg*/})
  'Stylus' = tWide()
  'Less' = tWide('less-nomasks.svg')
  'Sass' = tWide()
  'PostCSS' = t() /* sponsored by tailwind */
  'Headless UI' = tSquare('headlessui-icon.svg') // Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.
  'Tailwind CSS' = tWide('tailwindcss-icon.svg')
  'Windi CSS' = tNarrow('windi-css.svg')
  // TODO: https://www.pollen.style/

  PouchDB = t({categories: 'Databases'})
  PrimeNG = t({
    iconWebsite: 'https://www.primefaces.org/press-kit/',
    iconUrl: 'https://www.primefaces.org/presskit/primeng-logo.svg',
    urls: new TopicUrls(
      'https://www.primefaces.org/primeng',
      undefined,
      'https://github.com/primefaces/primeng',
      'https://www.npmjs.com/package/primeng',
      'https://stackoverflow.com/questions/tagged/primeng',
      undefined,
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
  // TODO https://github.com/ampproject/amphtml
  "Lit" = tWide('lit-icon.svg') /* lit elements (Moises) */
  // TODO: https://www.webcomponents.org/ logo
  WebPack = t()
  "Rollup" = t('rollupjs.svg') /* comments: The bundler behind Vite */
  Vite = t('vitejs')
  Vitest = t()
  "Speedy Web Compiler (SWC)" = tWide('swc') /* written in rust */
  "esbuild" = t()
  Turbopack = t('turbopack-icon.svg')
  Turborepo = t('turborepo-icon.svg')
  pnpm = t('pnpm-icon')
  Angular = tNarrow({
    logo: 'angular-icon',
    urls: new TopicUrls(
      'https://angular.io/',
      'https://en.wikipedia.org/wiki/Angular_(application_platform)',
      'https://github.com/angular/angular',
      undefined,
      'https://stackoverflow.com/questions/tagged/angular',
      'https://stackshare.io/angular-2',
      'https://twitter.com/angular',
    ),
    subTopics: {
      'Flex-Layout': t({
        urls: new TopicUrls(undefined, 'https://github.com/angular/flex-layout'),
      }),
      'Flex-Layout Responsive API': t({
        urls: new TopicUrls(undefined, 'https://github.com/angular/flex-layout/wiki/Responsive-API'),
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
      undefined,
      'https://en.wikipedia.org/wiki/AngularJS',
      'https://github.com/angular/angular.js',
      undefined,
      'https://stackoverflow.com/questions/tagged/angularjs',
      'https://stackshare.io/angularjs',
      undefined,
    )
  })

  Ionic = t({
    /* logos: https://ionicframework.com/press */
    // logo: 'ionic-light-logo-black.svg',
    // logo: 'ionic-logotype-white-on-blue-cropped-print-fixed.svg',
    logo: 'ionic-logo-affinity-export-import-print-fix.svg',
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
  'Vue.js' = tWide({logo: 'vue'})
  'Nuxt' = tWide('nuxt-icon')
  'Gridsome' = t({logo: 'gridsome-icon.svg'})
  'Svelte' = tNarrow('svelte-icon')
  // TODO Phoenix  https://www.phoenixframework.org/  supposedly most loved; https://github.com/phoenixframework/phoenix
  'SolidJS' = t('solidjs-icon')
  'Qwik' = t('qwik')
  'Astro' = t('astro-icon.svg')
  "Inferno" = t()
  'Mithril' = t()
  'Marko' = tWide('marko-cropped.svg')
  'Alpine.js' = tWide('alpinejs-icon.svg')
  'Rax' = t()
  'Riot' = t()
  'Vercel' = tWide('vercel-icon.svg')
  // ===== headless CMS:
  'Storyblok' = t('storyblok-icon.svg')
  "Strapi" = tSquare('strapi-icon.svg')

  // TODO: https://web.dev/

  Lodash = t()
  'TypeDI' = tNoIcon() // TODO move to Frontend & Backend / JavaScript / TypeScript
  'TypeStack' = tNoIcon()

  Bootstrap = tWide()
  'React-Bootstrap' = t('react-bootstrap.svg')
  "Material Design" = t('Google_Material_Design_Logo.svg')
  jQuery = tWide('jquery-icon-cropped.svg')
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
  Jotai = tWide('jotai')
  Zustand = tWide('zustand--logo512.png--vectorizer.ai--cropped.svg') // tagline: '🐻 Bear necessities for state management in React'
  Pinia = tWide() // vue state management

  React = tWide()
  Preact = t()
  Gatsby = t('Gatsby-Monogram.svg', /* https://www.gatsbyjs.com/guidelines/logo */)
  "Next.js" = t('nextjs-icon-export.svg')
  "Remix" = t('remix-icon.svg') /* https://remix.run/ */
  // TODO: Chakra, Playwright
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
  'Altair GraphQL Client' = t(`altair`) // https://altairgraphql.dev/
  'Apollo' = t(`apollostack.svg`)
  'Apollo Studio' = t(`apollostack.svg`)

  'Node.js' = tWide({
    logo: 'nodejs-icon.svg',
    logoSmallIcon: 'nodejs-icon.svg',
  })
  'NestJS' = t(`nest--logo-small.ede75a6b.svg`)
  // 'GraalVM' = tWide('graalvm-rgb-cropped.svg')
  'GraalVM' = tWide('graalvm_rabbit_icon.svg')
  Kong = tWide('kong-icon.svg'/* { tagline: 'the fastest cloud native API platform.' } */)
  GraphQL = t()
  RabbitMQ = t()
  Swagger = t()
  OpenAPI = t('openapi-icon.svg') /* https://www.openapis.org/ ; Compatible with JSON Schema */
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
  // TODO: adonis ?

  Spring = t('spring-icon.svg')
  'Spring Boot' = t()

  Hibernate = t()
  "Fermyon" = tNarrow('fermyon-icon.svg') // wasm instead of docker { tagline: 'Fermyon Cloud is the easiest way to deploy and manage cloud native WebAssembly applications with Spin, our developer tool.', pressKitUrl: 'https://design.fermyon.dev/' }'
  Docker = tWide('docker-simple'/* https://www.docker.com/company/newsroom/media-resources */)
  'Vagrant' = t()
  Terraform = t('terraform-icon.svg')
  Ansible = t('ansible-icon.svg')
  Kubernetes = t(/* they had a typo: 'kubernets.svg'*/)
  Elasticsearch = t(/* https://www.elastic.co/brand */)
  Kibana = t(/* https://www.elastic.co/brand */)
  Logstash = t(/* https://www.elastic.co/brand */)
  Beats = t(/* https://www.elastic.co/brand */)
  NGINX = tWide()
  'Ruby On Rails' = t()
}


export class Frontend_And_Backend_App_Platforms {
  JHipster = t()
  Meteor = tWide()
  Hoodie = tWide() // redirects to rxdb
  Feathers = t('feathersjs.svg') // The API and Real-time Application Framework
  Akita = tWide() // https://github.com/datorama/akita
  // feathers
  // Amplify
}

/** Important coz META-quality to make sense of the rest of topics */
export class Comprehension_Comparators_Security_And_Exploring {
  StackShare = tWide() // {tagline: 'Tech Stack Intelligence" }
  Openbase = t('openbase-icon-full.svg') // { tagline: 'Compare open-source packages with powerful metrics and user reviews.' }
  SVGPorn = tWide ('svgporn') // { tagline: 'Compare open-source packages with powerful metrics and user reviews.' }
  SVGO = t ('svgo-icon') // Node.js tool for optimizing SVG files; https://github.com/svg/svgo
  // https://tidelift.com/
  // https://npms.io/about - quality/popularity scores

  // TODO npmjs.com ?
  // https://libraries.io/npm/@feathersjs%2Ffeathers
  // codeclimate
  // stackoverflow to see tag stats
  // NOTE: this is highly related to security like Snyk
  // https://bestofjs.org/projects/typebox
  // https://chaoss.community/ ?
  // https://opensource.com/article/19/8/measure-project
  // https://openjsf.org/
}


export class Testing {
  "AVA" = tWide()
  "Selenium" = t()
  TestCafe = tWide()
  Cypress = t('cypress-icon.svg' /*`cypress-io-logo-round-flat.svg`*/)
  Playwright = tWide() /* Playwright is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API. By Microsoft. */
  "Testing Library" = tSquare()
  "Nightwatch.js" = tNarrow('nightwatch.svg')
  "UserTesting" = tNarrow('user-testing-icon.svg')
  BrowserStack = t()
  "User Testing" = t()
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
  // browsers:
  "Brave Browser" = tNarrow('brave.svg')

  WebStorm = t(/* https://www.jetbrains.com/de-de/company/brand/logos/ */)
  RubyMine = t()
  'Android Studio' = t('Android_Studio_icon.svg')
  Eclipse = t('eclipse-icon.svg')
  'IntelliJ IDEA' = t()
  'NetBeans' = t('apache-netbeans')
  'Visual Studio' = t()
  'Visual Studio Code' = t()
  'Vim' = t()
  // ==== CI:
  'CircleCI' = t()
  'Travis CI' = t()
  'Jenkins' = t('jenkins-icon')
  'Zeplin' = tWide()
  'Dribbble' = t(`dribbble-ball-mark.svg`) // https://dribbble.com/media-kit
  'Slack' = t('slack-icon.svg')
  'PandaDoc' = tNoIcon() /* FIXME logo */
  'Datadog' = t('datadog-icon')
  'Dynatrace' = t('dynatrace-icon')
  'Sentry' = t('sentry-icon')
  'Snyk' = tWide()
  "OWASP" = t('owasp-icon')
  'CodeSee' = tWide('codesee-icon') // move to comprehension?
  // TODO maybe https://stepsize.com/
  'Netlify' = tWide('netlify-icon.svg') /* https://www.netlify.com/press/#logos */
  'Jamstack' = tSquare('jamstack-icon.svg') /* https://www.netlify.com/jamstack/ */
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

/** TODO and UI UX */
export class Graphics {
  SVG = t({
    // logo: 'svg-logo-v.svg',
    categories: 'Frontend',
  })
  // Design Ops
  Figma = t()
  UXPin = t('UXPin-Logo-BlackFill-export.svg')
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
      undefined,
      'https://stackoverflow.com/questions/tagged/python',
      'https://stackshare.io/python',
      'https://twitter.com/ThePSF'
    )
  })
  Hack = tWide()
  Haxe = t()
  Scala = t()
  Clojure = t()
  Perl = t()
  Raku = tWide('raku-cropped.svg')
  Fortran = t()
  // TODO

  C = t()
  'HolyC' = tNarrow('HolyC_Logo.svg')
  'C++' = t()
  'C#' = t('c_sharp.svg')
  Dart = t()
  Groovy = tWide()
  Elm = t()
  PureScript = tWide('purescript-icon')
  ReScript = tWide('rescript-icon')
  Imba = tWide('imba-icon')
  'Mint Lang' = tWide('mint-lang-icon-wide.svg')
  Zig = tWide('zig-icon.svg')
  Nim = tWide('nim-lang-icon-wide.svg')
  Rust = t()
  WebAssembly = t({
    categories: "Frontend",
    ecosystem: "JavaScript",
  })
  "WebAssembly System Interface (WASI)" = tWide('wasi-icon-cropped-wide.svg')
  "Wasmtime" = tWide('bytecode-alliance-logo-icon.svg')
  "Wasmer" = tNarrow('wasmer-icon.svg')
  "WebAssembly Package Manager (WAPM)" = tNarrow('wapm-icon.svg')
  AssemblyScript = t()

  Bash = t('bash-icon.svg')
  Lua = t('lua-no-text.svg')
  Eiffel = tWide('eiffel-no-text.svg')
  Erlang = tWide('erlang-no-text.svg')
  Elixir = tWide('elixir-pluginIcon-crop--for-print-fix.svg') /* https://plugins.jetbrains.com/plugin/7522-elixir for print fix */ // -- other options: simpler, black & white: https://logosear.ch/logos/elixir/index.html
  Haskell = tWide('haskell-icon')
  Lisp = tWide('lisp-logo.svg')
  OCaml = tWide('ocaml-no-text.svg'/* https://ocaml.org/docs/logos.html  http://ocaml.org/logo/Colour/SVG/colour-logo.svg
      Square -- https://ocaml.org/img/OCaml_Sticker.svg */)
  'R Language' = tWide('r-lang.svg')
  'V Language' = t('v-logo.svg')
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
  'Supabase' = tNarrow('supabase-icon.svg') /* open source Firebase alternative supabase.com; https://supabase.com/brand-assets ; https://golden.com/wiki/Supabase-YX5N66V ; Build in a weekend.
    Scale to millions.
    Supabase is an open source Firebase alternative. Start your project with a Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, and Storage.*/
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
  Algolia = t('algolia-icon.svg') /* new icon ~2023 */
  "Meilisearch" = tWide('meilisearch-icon-wide.svg')  /* Rust 99% */
  "Typesense" = tWide('typesense-text-wide.svg')
  MindsDB = tWide('mindsdb-icon-wide.svg') // { iconUrl: 'mindsdb-icon-wide.svg', comments: 'Embedding AI in DB (select query from models e.g. from HuggingFace'}); automatic #MLOps
  // TODO: CockroachDB
  tRPC = t('trpc-icon.svg') // end-to-end typescript typesafe; powered by Vercel. https://trpc.io/media (RIGHT CLICK on logo! I'm impressed :D)
  "Microsoft Azure" = t('microsoft-azure')
  AWS = tWide()
  'AWS Amplify' = tWide('aws-amplify.svg')
  // TODO: CLoudFlare - has its own databases, D1, on the edge
}

export class Databases {
  "8base" = t('8base-icon') // like Hasura; "Create custom JavaScript and TypeScript logic and run as 8base Serverless Functions."
  Prisma = tWide() /* "Next-generation Node.js and TypeScript ORM" */
  MongoDB = tWide('mongodb-icon.svg')
  ArangoDB = tWide('arangodb-icon') /* native multi-model database with flexible data models for documents, graphs, and key-values. Build high performance applications using a convenient SQL-like query language or JavaScript extensions. */
  Mongoose = tNoIcon()
  // TODO
  NoSQL = tNoIcon()
  SQL = tNoIcon()
  PostgreSQL = t()
  MySQL = t('mysql-icon')
  MariaDB = t()
  Oracle = tWide()
  IndexedDB = tNoIcon()
  SurrealDB = t('surrealdb-icon') // Multi-modal. ACID transactions, while scaling horizontally. Feels like SQL, but uses arrows to connect nodes and edges
  Xata = t('xata-icon') // Postgres + Elastic. Feels like a developer-friendly alternative to Notion or AirTable. Treats your data like a spreadsheet.
  Dgraph = t('dgraph-icon')
  Fauna = t('fauna-icon') /* document db that supports joins; custom query language called FQL; closed-source */
  RethinkDB = tWide('rethinkdb')
  "RxDB" = tNarrow('rxdb-icon') /* A fast, offline-first, reactive database for JavaScript Applications */
  // TODO: sqlite
  // EdgeDB - Graph-Relational; types not tables; eliminates need for joins
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
  Airtable = tWide()
  Notion = t('notion-icon-no-text.svg')
  Coda = t('coda-icon.svg')
  Observable = t('observablehq.svg') // "Collaborative data platform and canvas"; "Explore, analyze and explain data. As a team."
  Carbide = t('carbide.svg')
  Replit = tNarrow('replit-icon.svg') /* highlights: social coding; computation token currency; AI-assisted IDE (Ghostwriter) */
  "Ghostwriter" = tNarrow('ghostwriter-icon-cropped.svg') /* #AI #IDE */
  Zapier = t('zapier-icon')
  IFTTT = tWide('ifttt.svg')
  // ======== LowCode / NoCode / CMS:
  Shopify = tNarrow()
  WebFlow = t('webflow-mark-vector-blue.svg') /* https://brand-at.webflow.io/resources#logos */
  Wix = tWide()
  'Builder.io' = t('builder-io-icon')
  'Budibase' = tWide('budibase-icon')
  'Bubble' = t('bubble-icon') /** is a **visual programming language**, a no-code development platform and an application platform as a service, developed by Bubble Group, that enables non-technical people to build web applications without needing to type code */
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

/** crypto / blockchain / decentralized */
export class Crypto {
  Bitcoin = t()
  Ethereum = t()
  "Basic Attention Token (BAT)" = tWide('brave_basic_attention_token_logo.svg')
  Solidity = t()
  "Web3" = t()
  "web3.js" = t('web3js')
  "ethers.js" = tWide('ethers.svg')
  "Solid" = tWide() // https://solidproject.org/ (re-decentralizing the web)
}


/** AI / Machine Learning ML */
export class AI {
  "Microsoft Bing" = tNarrow('bing.svg')
  "GitHub Copilot" = tWide('github-copilot.svg')
  "OpenAI Codex" = tNarrow('openai-codex')
  OpenAI = t('openai-icon')
  'Open Assistant' = tWide('open-assistant-icon-wide.svg') // https://github.com/LAION-AI/Open-Assistant
  'LAION' = t()
  'Stable Diffusion' = tWide('stable-diffusion-logo-vectorizer.ai.svg') // https://github.com/LAION-AI/Open-Assistant
  'Stability AI' = tWide('stability-ai-vectorizer.ai.svg') // https://github.com/LAION-AI/Open-Assistant https://www.linkedin.com/company/stability-ai/
  'Google Colaboratory' = tWide('google-colab-icon-wide.svg')
  TensorFlow = t()
  NumPy = t()
  'Hugging Face' = tWide('huggingface_logo-noborder.svg')
  Jupyter = tWide('jupyter-icon2')
  "JetBrains DataLore" = t('jetbrains-datalore-icon.svg')
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

export function processTopics<T extends Object>(inputTopics: T/*: Topics*/): T {
  // inputTopics = setIdsFromKeys(inputTopics, 'name')
  for (let topicKey of Object.getOwnPropertyNames(inputTopics)) {
    if ( inputTopics.hasOwnProperty(topicKey) ) {
      // console.log('transformTopics', topicKey)
      let topic: Topic = (inputTopics as any)[topicKey] as Topic
      if ( ! topic ) {
        topic = new Topic(topicKey)
      }
      ;(inputTopics as any)[topicKey] = topic
      topic.setNameAndLogoAndId(topicKey) // TODO ; or setNameAndIdAndIcon
      topic.sealAndValidate() // finalise / solidify
    }
  }
  return inputTopics
}

export type Topics =
  Comprehension_Comparators_Security_And_Exploring &
  Frontend & Frontend_Visual & Frontend_And_Backend_App_Platforms &
  Graphics &
  Backend & Other & Testing & Tools & Languages & OS & Mobile & Cloud &
  Project_Management_Tools & Version_Control & Databases & Java & JavaScript & Build_Systems_And_Package_Managers &
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
  new TopicCategory('Comparators', new Comprehension_Comparators_Security_And_Exploring()),
  new TopicCategory('Frontend', new Frontend()),
  new TopicCategory('Frontend - Visual', new Frontend_Visual()),
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
