import { Topics } from '../TopicFriendsShared/topics-core/topics-data';
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
    "Sass": {},
    "Web Components": {},
    "Stencil": {},
    "Capacitor": {},
    "GraphQL": {},
    "MongoDB": {},
    "Firebase": {},
    "PWA": {},
    "D3.js": {},
    // "AG Grid": {}, // old logo; and trying to conserve horizontal space
    "Lodash": {},
    "TestCafe": {},
    "Cypress": {},
    "Jest": {},
    "SVG": {},
    "Figma": {},
    "Git": {},
    "GitHub": {},
    "ReactiveX": {},
    // "RxJS": {}, -- no icon
    // TODO: Bootstrap, Ng-bootstrap, material, angular-material
    // TODO: AWS, Google Cloud Platform
  }),
  broad: topics({
    "Kotlin": {},
    "Java": {},
    "Groovy": {},
    "Scala": {},
    "Android": {},
    "Dart": {},
    "Swift": {},
    "C#": {},
    'C++': {},
    'C': {},
    "Ruby": {},
    "Python": {},
    'PHP': {},
    'Perl': {},
    'Bash': {},
    // TODO: Flutter, TensorFlow ?
  }),
  personalInterests: topics({

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
