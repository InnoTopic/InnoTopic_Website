import {
  beginner,
  advanced,
  expert,
  intermediate,
  we,
  experience,
} from './work-experience';

/** Can split into: main experience(critical), additional (wanna learn more, but not critical)*/
export class WorkExperienceData {
  main = experience({
    Angular:
      we(advanced, expert),
    Nx:
      we(intermediate, expert),
    WebPack:
      we(intermediate, expert),
    'Chart.js':
      we(advanced),
    GCP:
      we(advanced, expert),
    PrimeNG:
      we(intermediate, expert),
    AngularFire:
      we(advanced, expert),
    Promises:
      we(advanced, expert),
    Ionic:
      we(intermediate, expert),
    HTML5:
      we(advanced, expert),
    CSS3:
      we(advanced, expert),
    Git:
      we(advanced, expert),
    // EcmaScript
    GitHub:
      we(advanced, expert),
    NPM:
      we(advanced, expert),
    Yarn:
      we(intermediate),
    'D3.js':
      we(intermediate, expert),
    Lodash:
      we(advanced, expert),
    jQuery:
      we(intermediate),
    SVG:
      we(advanced, expert),
    'ag-Grid':
      we(advanced, expert),
    MongoDB:
      we(intermediate, advanced),
    Mongoose:
      we(intermediate, advanced),
    Bootstrap:
      we(intermediate, expert),
    TypeScript:
      we(advanced, expert),
    RxJS:
      we(advanced, expert),
    ReactiveX:
      we(advanced, expert),
    Firebase:
      we(advanced, expert),
    NgRx:
      we(intermediate, expert),
    NGXS:
      we(intermediate, expert),
    TestCafe:
      we(intermediate, expert),
    KeystoneJS:
      we(intermediate, advanced),
    WebSocket:
      we(intermediate, expert),
    Android:
      we(advanced),
    Bash:
      we(advanced),
    Gradle:
      we(advanced),
    Kotlin:
      we(advanced),
    Linux:
      we(advanced),
    'Ubuntu Linux':
      we(advanced),
    'Debian Linux':
      we(advanced),
    'RedHat Linux':
      we(intermediate),
    'Fedora Linux':
      we(intermediate),
    'CentOS Linux':
      we(intermediate),
    'SUSE Linux':
      we(intermediate),
    macOS:
      we(advanced),
    'Microsoft Windows':
      we(advanced),
    nginx:
      we(intermediate),
    RegExp:
      we(advanced, expert),
    Jest:
      we(intermediate, expert),
    Jasmine:
      we(advanced, expert),
    Karma:
      we(advanced, expert),
    Figma:
      we(advanced, expert),
    'Node.js':
      we(intermediate, expert),
    'Express.js':
      we(intermediate, expert),
    'Chrome Extensions':
      we(intermediate, expert),
    NoSQL:
      we(advanced, expert),
    WebStorm: we(advanced, expert),
    'Visual Studio Code': we(intermediate, expert),
    'Vim': we(intermediate),
    // DataBases:
    PostgreSQL: we(intermediate),
    MySQL: we(intermediate),
    Oracle: we(intermediate),
    WordPress: we(intermediate),
    'Font Awesome': we(advanced, expert),
    'VirtualBox': we(advanced),
  })
  additional = experience({
    Java:
      we(advanced),
    // TODO: FindBugs, PMD (TODO: check CODACY (written in Scala) from Leo, Lisbon -> Silicon Valley)
    Swift:
      we(intermediate),
    Python:
      we(intermediate),
  })
  expandingTo = experience({
    Flutter: we(),
    Dart: we(),
    Capacitor: we(),
    // Angular Dart
  })
  earlier = experience({
    'Java Swing':
      we(advanced),
    Hibernate:
      we(intermediate),
    Maven:
      we(advanced),
    Subversion:
      we(advanced),
    Groovy:
      we(intermediate),
    Scala:
      we(intermediate),
    Ruby:
      we(intermediate),
    Perl:
      we(intermediate),
    C:
      we(intermediate),
    'C++':
      we(intermediate),
    'C#':
      we(intermediate),
    '.NET':
      we(intermediate),
    Lua:
      we(beginner),
  })
  wishList = experience({
    D: we(),
    Rust: we(),
    Go: we(),
    WebAssembly: we(),
    Algolia: we(),
    ElasticSearch: we(),
    JHipster: we(),
    Meteor: we(),
    Aurelia: we(),
    PouchDB: we(),
    GraphQL: we(),
    Dart: we(),
    Flutter: we(),
    'Plastic SCM': we(),
  })
}

export const workExperience = new WorkExperienceData()
