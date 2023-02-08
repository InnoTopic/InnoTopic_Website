import {
  t,
  Topics,
} from '../TopicFriendsShared3/topics-core/topics-data';
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
  // TODO: Electron (near Ionic) here and in experience
  // TODO: chrome extensions
  // TODO: svg-porn
  // TODO: tailwind
  // TODO: Smashing Magazine (has svg logo in logos github repo), near figma somewhere
  // TODO: css-tricks
  // could split e.g. frontend on the left; backend on the right (TypeScript in the middle)
  // maybe visually split just for website/CV. But could be split in the code and concatenated into single list for Shirt.

  // TODO: https://nrwl.io/assets/nrwl-logo.svg - nx; + yarn

  // TODO: observable (data visualization platform), redux-observable (both on svgporn)
  // TODO: medium, quora, stackoverflow ?

  main: topics({
    "Angular": {},
    "React": {},
    "Vue.js": {},
    "Svelte": {},
    "Ionic": {},
    "JavaScript": {},
    "TypeScript": {},
    "Node.js": {},
    // TODO maybe ts-node; https://typestrong.org/ts-node/ , https://github.com/TypeStrong/ts-node
    "Deno": {},
    "Bun": {}, /* TODO: mark as non-main experience; written in Zig */
  }),
  crossPlatform: topics({
    "HTML5": {},
    "Ionic": {},
    "Electron": {}, /* TODO: mark as non-main experience */
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
    // FIXME: openai
    "Gridsome": {} /* A Jamstack framework for Vue.js */,
    "Svelte": {},
    "Qwik": {},
    "SolidJS": {},
    "Mithril": {},
    "Marko": {},
    "Rax": {},
    "Riot": {},
    "Alpine.js": {},
    "Astro": {},
    // TODO akita; elf https://github.com/ngneat/elf built on top of RxJS
    Preact: {},
    Nuxt: {},
    GreenSock: {},
    "Storyblok": {},
    "Nx": {},
    "WebKit": {},
    "NW.js": {},
    "Electron": {}, /* TODO: mark as non-main experience */
    "Expo": {}, /* TODO: mark as non-main experience; (in nx project template; here and in expanding-to) */

    /* TODO; SvelteKit svelte-kit */
    /* TODO: Meteor */
    /* TODO: webhooks */

    "Sass": {},
    "Less": {},
    "Stylus": {},
    "Web Components": {},
    "Stencil": {},
    // TODO https://mitosis.builder.io/?outputTab=G4VwpkA%3D -- Write components once, run everywhere. Compiles to Vue, React, Solid, Angular, Svelte, and more.
    "Capacitor": {},
    "Cordova": {}, /* NO PhoneGap -- discontinued - https://blog.phonegap.com/update-for-customers-using-phonegap-and-phonegap-build-cc701c77502c ? */
    "NativeScript": {},
    "Flutter": {},
    "Redux": {},
    "Redux Toolkit": {},
    "Recoil": {},
    "Jotai": {},
    "NgRx": {},
    "NGXS": {},
    "Pinia": {},
    "MobX": {}, // TODO FIXME MobX-State-Tree https://github.com/mobxjs/mobx-state-tree/blob/b6c1c9b29d7bd7525ac6588f8f67f6c13eb17b2b/website/static/img/mobx-state-tree-logo.svg
    "MobX-State-Tree": {}, // TODO FIXME MobX-State-Tree https://github.com/mobxjs/mobx-state-tree/blob/b6c1c9b29d7bd7525ac6588f8f67f6c13eb17b2b/website/static/img/mobx-state-tree-logo.svg
    // https://github.com/simple-icons/simple-icons/issues/4352
    "Terraform": {},
    "Datadog": {},
    "Dynatrace": {},
    "Vercel": {},
    "Netlify": {},
    "Turbopack": {},
    "Turborepo": {},
    "Vite": {}, // TODO: Vitest, Playwright, https://testing-library.com/, https://github.com/pocketbase/pocketbase
    "pnpm": {},
    "Docker": {},
    "GraalVM": {},
    /* TODO: Spring Framework */
    "GraphQL": {},
    "Apollo": {}, /* TODO Apollo Studio? */
    "Swagger": {},
    /* FIXME: more backend: OpenAPI, maybe JSON Schema, websockets, socket.io maybe */
    "MongoDB": {}, /* TODO: Prisma */
    "AWS": {},
    "Microsoft Azure": {},
    // TODO FIXME Google Cloud
    "Firebase": {},
    "ElasticSearch": {}, /* TODO: Kibana, Beats, LogStash */
    /* TODO: Smth like PowerBI, Tableau ? */
    /* TODO: (kubernetes?) */
    "PWA": {},
    "D3.js": {},
    "WebGL": {},
    "glTF": {}, /* FIXME too big */
    "Blender": {},
    "Figma": {},
    "SVGator": {},
    "Zeplin": {},
    // "AG Grid": {}, // old logo; and trying to conserve horizontal space
    "Lodash": {},
    'NestJS': {},
    "Gatsby": {},
    "Next.js": {},
    "Remix": {},
    "Storybook": {},
    // "Storyblok": {},
    "TestCafe": {},
    "Cypress": {},
    "Jest": {},
    "SVG": {},
    "Bootstrap": {},
    "Material Design": {},
    "WebAssembly": {},
    "Git": {},
    "GitHub": {},
    "GitLab": {},
    /* TODO: smth like Jira / Atlassian */
    /* TODO: BitBucket ? */
    "Linux": {},
    "ReactiveX": {},
    // ==== AI / ML:
    "Jupyter": {},
    "Google Colaboratory": {},
    "Hugging Face": {},
    "NumPy": {},
    "PyTorch": {},
    "TensorFlow": {},
    "Keras": {},
    "OpenAI": {},
    "Open Assistant": {},
    "LAION": {},
    "Stability AI": {},
    "Stable Diffusion": {},
    // BlockChain / CryptoCurrencies
    "Bitcoin": {},
    "Ethereum": {},
    "Solidity": {},
    "Web3": {},
    "web3.js" /* FIXME */: {},
    // TODO "ethers.js": {},
    "Airtable": {},
    "Notion": {},
    "Coda": {},
    "Observable": {},
    "Carbide": {},
    "Zapier": {},
    "IFTTT": {},
    // ====  LowCode / NoCode:
    "Builder.io": {},
    "Budibase": {},
    "Bubble": {},
    "Framer": {},
    "WebFlow": {},
    "Wix": {},
    // TODO: intellij idea
    "WebStorm": {},
    // "PyCharm": {},
    // jetbrains academy, JB Space
    // mypy - python static type checker
    // DatasSpell (data science) Jupyter; kaggle
    "Visual Studio Code": {},
    "YouTube": {},
    "LinkedIn": {},
    "Meetup": {},
    "SurrealDB": {},
    "Xata": {},
    "Dgraph": {},
    "Fauna": {},
    "Algolia": {},
    // TODO JetBrains Fleet

    //
    // "RxJS": {}, -- no icon (can be ReactiveX)
    // RxDB?
    // TODO: , Ng-bootstrap, material, angular-material
    // TODO: , Google Cloud Platform, Azure
    // TODO: Font Awesome
    // github actions, gitub copilot
    // TODO payoneer, pm2, pnpm, postman, recoil
    // TODO: Docusaurus; 40 stars on GH
    // TODO immer
    // todo: lit elements
    // TODO:
    // TODO polymer
    // TODO Elastic / Kibana / elastic stack - (ELK ; logstack, beats) !!! new logo
    // TODO: StackBlitz, StackShare
    // TODO: Loom
    // TODO: some lowcode/nocode / BI (business intelligence) /  Tableau
    // TODO: AppSheet
    // TODO: Appian, https://www.gartner.com/reviews/market/enterprise-low-code-application-platform
    // https://www.google.com/search?q=gartner+nocode+quadrants&sxsrf=ALiCzsYzQgM6ji258wt8ABwXX5oLXHpKFA%3A1667484719597&ei=L8xjY6WBJIr_7_UP-_ClgAY&ved=0ahUKEwjl1ITTmJL7AhWK_7sIHXt4CWAQ4dUDCA8&uact=5&oq=gartner+nocode+quadrants&gs_lp=Egxnd3Mtd2l6LXNlcnC4AQP4AQEyBhAAGBYYHjIFEAAYhgMyBRAAGIYDMgUQABiGAzIFEAAYhgPCAgoQABhHGNYEGLADwgIFEAAYgATCAggQABgWGB4YD5AGCEj4DVBuWIgNcAF4AcgBAJABAJgBhwGgAfoIqgEDMS454gMEIE0YAeIDBCBBGADiAwQgRhgAiAYB&sclient=gws-wiz-serp#imgrc=gQRhhPExJFw07M
    // bubble, outSystems, Mendix, ZoHo builder
    // TODO: smthlike Ragic?
    // Smth like WebFlow / website designer tools; https://www.youtube.com/watch?v=2Ti9_zALVsA&ab_channel=ArnauRos
    // EditorX / WiX ?
    // the thingy which is like DB/SpreadSheet - Coda
  }),
  /* TODO: broad interests but more on-topic (where the next-big-think or inspiration can come from:)
   -- TODO: MobX State tree
   -- from https://storybook.js.org/
   - Ember (for a historical touch)
   - Ember? (in broad / supportive tech)
   - https://gohugo.io/ - 56k stars (written in GO)
   - Lottie
   NuxtJS ? (Vue, inspired by Next.js) - https://www.npmjs.com/package/nuxt - https://github.com/nuxt/framework TypeScript
   TODO some DevOps, like Terraform or other popular / rising

    TODO lit elements; lit-icon.svg

  *  */
  /** This should just be languages / platforms / ecosystems */
  broad: topics({ /* maybe distinguish broad from polyglot? This is more past stuff */
    // "JavaScript": {}, /* FIXME es6 bad */
    "AssemblyScript": {},
    "Kotlin": {},
    'JetBrains MPS': {},
    "Java": {},
    "Groovy": {},
    "Scala": {},
    "Android": {},
    "Dart": {},
    "Swift": {},
    /* Maybe .NET / Core */
    ".NET": {},
    "C#": {},
    "Blazor": {},
    'C++': {},
    'C': {},
    "Ruby": {},
    'Crystal': {},
    "Python": {},
    'PHP': {},
    'Perl': {},
    'Raku': {},
    'Zig': {},
    // TODO: nim
    // TODO: mint lang
    'Bash': {},
    'R Language': {},
    'Rust': {},
    'Go': {},
    'D Language': {} /* FIXME: D logo prints with glitches; FIXME: remove shadow; adapt: https://dlang.org/images/dlogo.svg -- OR BETTER just get the square-bounded logo out of the current file as square is less problemss */,
    'V Language': {},
    'Julia': {},
    'Lua': {},
    // 'Eiffel': {},
    // 'Erlang': {},
    'Elixir': {},
    Haskell: {},
    'Lisp': {},
    'OCaml': {},
    'Elm': {},
    'Clojure': {},
    'Fortran': {},
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
    // Guitar: {},
    ASG: {},
    Chess: {},
    'Triskelion': {},
    'Wikipedia': {},
    'Business': {},
    'Psychology': {},
    // TODO: travel, international? (globe), natural languages
    /* TODO: Wikipedia (learning / curiosity) */
    /* TODO: gym (weights icon) */
    /* Audible / Blinkist - audiobooks / linkedin learning */
    /* TODO: maybe guitar, asg */
}),
  producingContent: topics({
    // YouTube
    // TODO meetup
    // medium
    // dev.to
    // linkedin learning
    // udemy
    // udacity
    // lynda
  })
}
