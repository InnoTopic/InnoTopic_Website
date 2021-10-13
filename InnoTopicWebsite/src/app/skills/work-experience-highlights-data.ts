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
  main: topics({
    "Angular": {},
    "TypeScript": {},
    "Ionic": {},
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
  }),
  broad: topics({
    "Kotlin": {},
    "Java": {},
    // "Groovy": {},
    "Android": {},
    "Swift": {},
    "C#": {},
    'C++': {},
    'C': {},
    "Ruby": {},
    "Python": {},
    'PHP': {},
    'Perl': {},
    'Bash': {},
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
