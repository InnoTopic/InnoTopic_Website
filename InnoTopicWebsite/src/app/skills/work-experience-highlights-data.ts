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

  main: topics({
    "Angular": {},
    "Vue.js": {},
    "React": {},
    "Ionic": {},
    "TypeScript": {},
    "Node.js": {},
    "Deno": {},
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
  utility: topics({
    "Svelte": {},
    "Sass": {},
    "Web Components": {},
    "Stencil": {},
    "Capacitor": {},
    "Cordova": {}, /* NO PhoneGap -- discontinued - https://blog.phonegap.com/update-for-customers-using-phonegap-and-phonegap-build-cc701c77502c ? */
    "NativeScript": {},
    "Flutter": {},
    "GraphQL": {}, /* TODO: Apollo / Studio */
    "Swagger": {},
    /* FIXME: more backend: OpenAPI, Swagger, maybe JSON Schema, websockets, socket.io maybe
    *   */
    "MongoDB": {},
    "ElasticSearch": {},
    "Firebase": {},
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
    "Linux": {},
    "ReactiveX": {},
    "TensorFlow": {},
    "Keras": {},
    "Bitcoin": {},
    "Ethereum": {},
    "WebStorm": {},
    "Visual Studio Code": {},
    //
    // "RxJS": {}, -- no icon
    // TODO: Bootstrap, Ng-bootstrap, material, angular-material
    // TODO: AWS, Google Cloud Platform, Azure
    // todo: lit elements
    // TODO:
    // TODO polymer
    // TODO Elastic / Kibana / elastic stack - (ELK ; logstack, beats)
    // TODO: some lowcode/nocode / BI (business intelligence)
    // TODO: Notion
    // the thingy which is like DB/SpredSheet
    // Zapier?
  }),
  broad: topics({ /* maybe distinguish broad from polyglot? */
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
    // https://pypl.github.io/PYPL.html
    // TODO: some functional / fancy languages: Erlang, Haskell, Elixir, Eiffel
    //  Lisp / Scheme with cool logo
    // TODO: check console for 404 errors for missing logos
  }),
  personalInterests: topics({
    Volleyball: {},
    'Interpersonal Networking': {},
    'Hiking': {},
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
