import { Topics } from '../TopicFriendsShared/topics-core/topics-data';

//
// function topics(tDict: [k in keyof Topics]: any) {
//
// }

function topics(tDict: any) {
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
    "AG Grid": {},
    "Lodash": {},
    "TestCafe": {},
    "Cypress": {},
    "Jest": {},
    "SVG": {},
  }),
  broad: topics({
    "Kotlin": {},
    "Java": {},
    "Groovy": {},
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
}
