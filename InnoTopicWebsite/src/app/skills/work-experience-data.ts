import { t } from '../TopicFriendsShared/topics-core/topics-data';
import {
  beginner,
  advanced,
  expert,
  intermediate,
  we,
  experience,
} from './work-experience';

/* TODO:
* Azure
* Amazon WebServices (AWS)
* RabbitMQ
*
* */

export class WorkExperienceData {
  main = experience('Main Experience', 'extensive usage and always honing my skills and learning', {
    Angular:
      we(advanced, expert),
    Codelyzer:
      we(advanced, expert),
    Nx:
      we(intermediate, expert),
    xplat: // nstudio
      we(intermediate, expert),
    WebPack:
      we(intermediate, expert),
    'Chart.js':
      we(advanced),
    'GCP - Google Cloud Platform':
      we(advanced, expert),
    PrimeNG:
      we(intermediate, expert),
    AngularFire:
      we(advanced, expert),
    Promises:
      we(advanced, expert),
    Ionic:
      we(intermediate, expert),
    PWA:
      we(advanced, expert),
    HTML5:
      we(advanced, expert),
    CSS3:
      we(advanced, expert),
    Git:
      we(advanced, expert),
    // EcmaScript
    GitHub:
      we(advanced, expert),
    GitLab:
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
    Markdown:
      we(advanced, expert),
    'Google Maps':
      we(advanced, expert),
    'AG Grid':
      we(advanced, expert),
    MongoDB:
      we(advanced, advanced),
    Mongoose:
      we(advanced, advanced),
    Bootstrap:
      we(intermediate, expert),
    TypeScript:
      we(advanced /* FIXME very_advanced */, expert),
    'Micro Frontends':
      we(advanced, expert),
    RxJS:
      we(advanced, expert),
    ReactiveX:
      we(advanced, expert),
    Firebase:
      we(advanced, expert),
    'Cloud Firestore':
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
    NGINX:
      we(intermediate),
    GraphQL: we(advanced, expert),
    // TODO : TypeGraphQL, TypeORM, RAML (has logo), Rest (there is some logo?)
    Microservices: we(advanced, expert),
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
      we(advanced, expert),
    'Express.js':
      we(advanced, expert),
    'Chrome Extensions':
      we(intermediate, expert),
    NoSQL:
      we(advanced, expert),
    WebStorm: we(advanced, expert),
    'IntelliJ IDEA': we(advanced, expert),
    'Android Studio': we(advanced, expert),
    'Visual Studio': we(advanced),
    'Visual Studio Code': we(intermediate, expert),
    'Vim': we(intermediate),
    // DataBases:
    PostgreSQL: we(advanced),
    MySQL: we(advanced),
    Oracle: we(advanced),
    IndexedDB: we(advanced, expert),
    WordPress: we(intermediate),
    'Font Awesome': we(advanced, expert),
    'VirtualBox': we(advanced),
    Blender: we(intermediate, advanced),
    'Adobe Illustrator': we(advanced, expert),
    'Adobe Photoshop': we(intermediate, advanced),
    'Adobe Creative Cloud': we(intermediate, advanced),
    'Affinity Designer': we(advanced, expert),
    'GIMP': we(advanced),
    'Inkscape': we(advanced),
    'Google Play': we(advanced, expert),
    // ======= Other:
    'Customer Support': we(intermediate, advanced),
    'Agile': we(advanced, expert),
    'Scrum': we(advanced, expert),
    'ALM - Application Lifecycle Management': we(advanced, expert),
    'Algorithms': we(advanced, expert),
    'Data Structures': we(advanced, expert),
    'OOP - Object Oriented Programming': we(advanced, expert),
    'SOLID Principles': we(advanced, expert),
    'FP - Functional Programming': we(advanced, expert),
    'Design Patterns': we(advanced, expert),
    'Antipatterns': we(advanced, expert),
    'Software Architecture': we(advanced, expert),
    'Refactoring': we(advanced, expert),
    'Code Review': we(advanced, expert),
    'TDD - Test-Driven Development': we(advanced, expert),
    'BDD - Behavior-Driven Development': we(advanced, expert),
    'DSL - Domain-Specific Languages': we(intermediate, expert),
    'Making Presentations': we(advanced, expert),
    'Leadership': we(advanced, expert),
    'Performance Optimization': we(advanced, expert),
    'Performance Profiling': we(advanced, expert),
    'UX - User Experience': we(advanced, expert),
    'Troubleshooting': we(advanced, expert),
    'Graphic Design': we(intermediate, expert),
    'Testing': we(advanced, expert),
    Lighthouse: we(),
    'three.js': we(),
    WebGL: we(),
    glTF: we(),
    // TODO: performance optimizations, profiling, UX
  }, false)
  additional = experience('Additional experience', 'learning more, but not as critical for me now', {
    Java:
      we(advanced),
    // TODO: FindBugs, PMD (TODO: check CODACY (written in Scala) from Leo, Lisbon -> Silicon Valley)
    Spring:
      we(intermediate, advanced),
    'Spring Boot':
      we(intermediate, advanced),
    JUnit:
      we(advanced),
    TestNG:
      we(intermediate),
    Jenkins:
      we(intermediate),
    RubyMine:
      we(intermediate),
    Swift:
      we(intermediate, advanced),
    Python:
      we(intermediate),
    Docker:
      we(intermediate),
    React:
      we(intermediate),
    Gatsby:
      we(),
    Redux:
      we(intermediate),
    Ember:
      we(beginner),
    // 'Vue.js':
    //   we(beginner, advanced),
    Kubernetes:
      we(beginner),
  })
  expandingTo = experience('Expanding to', 'actively learning and ready to take projects', {
    // Dart: we(intermediate, advanced),
    // Angular Dart
    // TODO: Swagger
    Capacitor: we(intermediate, expert),
    Stencil: we(intermediate, expert),
    Flutter: we(),
    Dart: we(),
    NativeScript: we(),
    Cypress: we(intermediate, expert),
    'Vue.js': we(intermediate, expert),
    'Angular Elements': we(),
    'SVG.js': we(),
    Akita: we(),
    TensorFlow: we(),
    NestJS: we(),
    Deno: we(intermediate, expert),
    Storybook: we(beginner, advanced),
    'DDD - Domain-Driven Design': we(intermediate, advanced),
    // TODO: Scully
  })
  earlier = experience('Earlier experience',
    'always curious to learn more, but no particular need right now',
    {
    'Java Swing':
      we(advanced),
    Hibernate:
      we(intermediate, advanced),
    Maven:
      we(advanced),
    Subversion:
      we(advanced),
    Groovy:
      we(intermediate, advanced),
    Scala:
      we(intermediate, advanced),
    Eclipse:
      we(advanced),
    Ruby:
      we(intermediate, advanced),
    Perl:
      we(intermediate),
    C:
      we(intermediate),
    'C++':
      we(intermediate),
    'C#':
      we(intermediate, advanced),
    '.NET':
      we(intermediate),
    Lua:
      we(beginner),
    'AOP - Aspect-Oriented Programming':
      we(intermediate),
    // TODO: PHP, Laravel (EpicElite)
    // TODO: ApolloServer
  })
  wishList = experience('Wish-list', 'things on my radar; learning bits and pieces when I can', {
    'D Language': we(),
    Julia: we(),
    Rust: we(),
    Go: we(),
    WebAssembly: we(),
    Algolia: we(),
    ElasticSearch: we(),
    ArangoDB: we(),
    JHipster: we(),
    Meteor: we(),
    Aurelia: we(),
    PouchDB: we(),
    'Plastic SCM': we(),
    Workbox: we(),
    // Keras: we(),
    Hoodie: we(),
    Svelte: we(),
    Bazel: we(),
    Blazor: we(),
    // TODO: Blazor, .NET Core
  })
}

// TODO: check for duplicates

export const workExperience = new WorkExperienceData()
