import {
  t,
  Topics,
} from '../TopicFriendsShared/topics-core/topics-data';
import { MapToTopics } from './work-experience';

//
// function topics(tDict: [k in keyof Topics]: any) {
//
// }

function topics(tDict: MapToTopics<any>) {
  return {
    ids: Object.keys(tDict)
  }
}

export const highlights = {
  // could split e.g. frontend on the left; backend on the right (TypeScript in the middle)
  // maybe visually split just for website/CV. But could be split in the code and concatenated into single list for Shirt.

  // TODO: https://nrwl.io/assets/nrwl-logo.svg - nx; + yarn

  main: topics({
    "Angular": {},
    "Vue.js": {},
    "React": {},
    "Ionic": {},
    "TypeScript": {},
    "Node.js": {},
    "Deno": {}, /* FIXME: new deno logo - better for print / low-res - no thin lines https://deno.land/logo.svg */
  }),
  crossPlatform: topics({
    "HTML5": {},
    "Ionic": {},
    "Angular": {},
    "Java": {},
    "Android": {},
    "iOS": {},
    "macOS": {},
    "Microsoft Windows": {},
    "Linux": {},
  }),
  /* TODO could have frontend (&fullstack frameworks) in a separate array to appear first via array concatenation
    or be on its own section / row(s)

    could split into frontend-what-I-really-use and frontend-broad
  */
  utility: topics({
    "Svelte": {}, /* TODO: Marko, Mithril - */
    /* TODO: Meteor */
    /* TODO: webhooks */
    /* TODO: Zapier - business automation */
    /* TODO: netlify */
    "Sass": {},
    "Web Components": {},
    "Stencil": {},
    "Capacitor": {},
    "Cordova": {}, /* NO PhoneGap -- discontinued - https://blog.phonegap.com/update-for-customers-using-phonegap-and-phonegap-build-cc701c77502c ? */
    "NativeScript": {},
    "Flutter": {},
    "Docker": {},
    /* TODO: GraalVM */
    "GraphQL": {}, /* TODO: Apollo / Studio */
    "Swagger": {},
    /* FIXME: more backend: OpenAPI, Swagger, maybe JSON Schema, websockets, socket.io maybe
    *   */
    "MongoDB": {},
    "ElasticSearch": {}, /* TODO: Kibana, Beats, LogStash */
    /* TODO: Smth like PowerBI, Tableau ? */
    "Firebase": {},
    /* TODO: Docker (kubernetes?) */
    "PWA": {},
    "D3.js": {},
    "WebGL": {},
    "glTF": {}, /* FIXME too big */
    "Blender": {},
    "Figma": {},
    // "AG Grid": {}, // old logo; and trying to conserve horizontal space
    "Lodash": {},
    "TestCafe": {},
    "Cypress": {},
    "Jest": {},
    "SVG": {},
    "WebAssembly": {},
    "Git": {},
    "GitHub": {},
    /* TODO: GitLab */
    /* TODO: smth like Jira / Atlassian */
    /* TODO: BitBucket ? */
    "Linux": {},
    "ReactiveX": {},
    "TensorFlow": {},
    "Keras": {},
    "Bitcoin": {},
    "Ethereum": {},
    "WebStorm": {},
    "Visual Studio Code": {},
    //
    // "RxJS": {}, -- no icon (can be ReactiveX)
    // RxDB?
    // TODO: Bootstrap, Ng-bootstrap, material, angular-material
    // TODO: AWS, Google Cloud Platform, Azure
    // todo: lit elements
    // TODO:
    // TODO polymer
    // TODO Elastic / Kibana / elastic stack - (ELK ; logstack, beats)
    // TODO: some lowcode/nocode / BI (business intelligence)
    // TODO: smthlike Ragic?
    // Smth like WebFlow / website designer tools
    // TODO: Notion
    // the thingy which is like DB/SpreadSheet - Coda / Airtable
    // Zapier?
    // TODO: StoryBook - for components / web components ?
  }),
  /* TODO: broad interestes but more on-topic (where the next-big-think or inspiration can come from:)
   -- from https://storybook.js.org/
   - Mithril
   - Riot
   - Ember (for a historical touch)
   - Rax
   - Svelte
   - Ember? (in broad / supportive tech)
   - https://gohugo.io/ - 56k stars (written in GO)
   - Lottie
   NuxtJS ? (Vue, inspired by Next.js) - https://www.npmjs.com/package/nuxt - https://github.com/nuxt/framework TypeScript
   Nest.js - and/or other popular TypeScript Node.js framework
   Next.js - React framework; (Vercel) or other popular - 80k stars! - https://github.com/vercel/next.js/ - 2M/week - https://www.npmjs.com/package/next
   Gatsby
   TODO some DevOps, like Terraform or other popular / rising

  *  */
  /** This should just be languages / platforms / ecosystems */
  broad: topics({ /* maybe distinguish broad from polyglot? This is more past stuff */
    // "JavaScript": {}, /* FIXME es6 bad */
    "AssemblyScript": {},
    "Kotlin": {},
    "Java": {},
    "Groovy": {},
    "Scala": {},
    // "Clojure": {}, /* TODO */
    "Android": {},
    "Dart": {},
    "Swift": {},
    /* Maybe .NET / Core */
    "C#": {},
    'C++': {},
    'C': {},
    "Ruby": {},
    'Crystal': {},
    "Python": {},
    'PHP': {},
    'Perl': {},
    'Bash': {},
    'R Language': {},
    'Rust': {},
    'Go': {},
    'D Language': {} /* FIXME: D logo prints with glitches; FIXME: remove shadow; adapt: https://dlang.org/images/dlogo.svg -- OR BETTER just get the square-bounded logo out of the current file as square is less problemss */,
    'V Language': {},
    // 'Jetbrains MPS': {},
    'Julia': {},
    'Lua': {},
    'OCaml': {},
    // https://pypl.github.io/PYPL.html
    // TODO: some functional / fancy languages: Erlang, Haskell, Elixir, Eiffel, OCaml (Pricemoov Ion)
    // Prolog, Mozart OZ
    //  Lisp / Scheme with cool logo
    // TODO: check console for 404 errors for missing logos
  }),
  personalInterests: topics({
    Volleyball: {},
    'Interpersonal Networking': {},
    'Hiking': {},
    /* TODO: mountain / climbing icon */
    Outdoors: {},
    Nature: {},
    'Car trips': {},
    'Bicycle': {},
    'Table Tennis': {},
    Padel: {},
    Swimming: {},
    Chess: {},
    'Business': {},
    'Psychology': {},
    // TODO: travel, international? (globe), natural languages
    /* TODO: Wikipedia (learning / curiosity) */
    /* TODO: gym (weights icon) */
    /* Audible / Blinkist - audiobooks */
    /* TODO: maybe guitar, asg */
}),
  producingContent: topics({
    // YouTube
    // medium
    // dev.to
    // linkedin learning
    // udemy
    // udacity
    // lynda
  })
}
