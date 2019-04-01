import {
  beginner,
  advanced,
  expert,
  intermediate,
  we,
  experience,
} from './work-experience';

/** Can split into: main experience(critical), additional (wanna learn more, but not critical)*/
export const workExperience = {
  main: experience({
    Angular:
      we(advanced, expert),
    // Promises:
    //   we(advanced, expert),
    Git:
      we(advanced, expert),
    GitHub:
      we(advanced, expert),
    Yarn:
      we(intermediate),
    D3:
      we(intermediate, expert),
    NPM:
      we(advanced, expert),
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
    Android:
      we(advanced),
    Bash:
      we(intermediate),
    Gradle:
      we(advanced),
    Kotlin:
      we(advanced),
    Linux:
      we(advanced),
    'Ubuntu Linux':
      we(advanced),
    'RedHat Linux':
      we(intermediate),
    'CentOS Linux':
      we(intermediate),
    macOS:
      we(advanced),
    nginx:
      we(advanced),
  }),
  additional: experience({
    Java:
      we(advanced),
   Gradle:
     we(advanced),
    Swift:
      we(intermediate),
    Python:
      we(intermediate),
  }),
  expandingTo: experience({
    Flutter: we(),
    Dart: we(),
    // Angular Dart

  }),
  earlier: experience({
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
  }),
  wishList: experience({
    D:
      we(),
    Rust:
      we(),
    Go:
      we(),
    WebAssembly:
      we(),
    Algolia:
      we(),
  })
};


const e = we();

export const experienceAigRap = experience({
  MongoDB: e,
  Mongoose: e,
  KeystoneJS: e,
  Express: e,
})
