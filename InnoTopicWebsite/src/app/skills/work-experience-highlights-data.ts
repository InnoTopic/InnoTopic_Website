import { t, Topics } from '../TopicFriendsShared3/topics-core/topics-data';
import { MapToTopics } from './work-experience';

//
// function topics(tDict: [k in keyof Topics]: any) {
//
// }

export function topics<TVal>(tDict: MapToTopics<TVal>) {
  return {
    ids: Object.keys(tDict),
  };
}

// FIXME: render hint quality - antialias like 8x

export const highlights = {
  // TODO: Electron (near Ionic) here and in experience
  // TODO: chrome extensions
  // TODO: svg-porn
  // TODO: Smashing Magazine (has svg logo in logos github repo), near figma somewhere
  // TODO: css-tricks
  // could split e.g. frontend on the left; backend on the right (TypeScript in the middle)
  // maybe visually split just for website/CV. But could be split in the code and concatenated into single list for Shirt.

  // TODO: https://nrwl.io/assets/nrwl-logo.svg - nx; + yarn

  // TODO: observable (data visualization platform), redux-observable (both on svgporn)
  // TODO: medium, quora, stackoverflow ?

  main: topics({
    Angular: {},
    React: {},
    Ionic: {},
    JavaScript: {},
    TypeScript: {},
    'Node.js': {},
    Anthropic: {},
    OpenAI: {},
    "Mistral AI": {},
    "Amazon Bedrock": {},
    "Qdrant": {},
    "Rust": {},
    "WebAssembly": {},
    // TODO maybe ts-node; https://typestrong.org/ts-node/ , https://github.com/TypeStrong/ts-node
    // TODO: JavaScriptCore: {} /* used by bun */, // (not here; small frontend icon)
  }),
  secondaryHighlights: topics({
    'Vue.js': {},
    Svelte: {},
    Deno: {}, /* TODO: secondary highlights */
    Bun: {} /* TODO: mark as non-main experience; written in Zig */,
  }),
  crossPlatform: topics({
    HTML5: {},
    Ionic: {},
    Electron: {} /* TODO: mark as non-main experience */,
    // TODO: Rust: Tauri: {} /* TODO: mark as non-main experience */,
    // TODO: Rust:  clap
    // TODO: Rust: Tonic: {} /* TODO: mark as non-main experience */,
    // TODO: Rust:  Yew: {} /* TODO: mark as non-main experience */,
    // TODO: Rust: 'https://bevyengine.org/': {} /* TODO: Near Rust */,
    // TODO: Rust: 'InfluxDB': {} /* TODO: Near Rust; written in rust */,
    // TODO: Rust: https://github.com/helix-editor/helix
    // TODO: Rust: https://github.com/tree-sitter/tree-sitter
    Angular: {},
    Java: {},
    Android: {},
    iOS: {},
    macOS: {},
    'Microsoft Windows': {},
    Linux: {},
  }),
  /* TODO could have frontend (&fullstack frameworks) in a separate array to appear first via array concatenation
    or be on its own section / row(s)

    could split into frontend-what-I-really-use and frontend-broad
  */
  utility: topics({
    // "Svelte": {},
    // TODO: Frontend: HTMX: {},
    // TODO: Frontend: Biome: {}, // small icon frontend
    Qwik: {},
    SolidJS: {},
    Mithril: {},
    Marko: {},
    Rax: {},
    Remix: {},
    Riot: {},
    'Alpine.js': {},
    Astro: {},
    Inferno: {},
    // TODO akita; elf https://github.com/ngneat/elf built on top of RxJS
    Preact: {},
    NestJS: {},
    // TODO: maybe https://analogjs.org/ - The fullstack Angular meta-framework. SSR, file-based routing
    Nuxt: {},
    // TODO: Frontend: Gridsome: {} /* A Jamstack framework for Vue.js */,
    Gatsby: {},
    'Next.js': {},
    // TODO: Frontend: 'https://million.dev/': {},

    jQuery: {} /* kinda as a joke / to test someone */,
    "Hotwired Turbo": {} /* DHH, does not use TS nor JSDoc nor .d.ts */,
    "Hotwired Stimulus": {} /* DHH, does not use TS nor JSDoc nor .d.ts */,
    Nx: {},
    Rush: {}, // https://rushstack.io/
    PWA: {},

    // TODO: lighthouse, web.dev

    /* TODO; SvelteKit svelte-kit */
    /* TODO: Meteor */
    /* TODO: webhooks */

    Sass: {},
    Less: {},
    Stylus: {},
    PostCSS: {},
    'Headless UI': {},
    'Tailwind CSS': {},
    // 'Windi CSS': {}, // sunsetting
    Bootstrap: {},
    'Material Design': {},
    'Chakra UI': {},
    Mantine: {},
    Bulma: {},
    'Web Components': {},
    Lit: {},
    // TODO styled-jsx - https://marketplace.visualstudio.com/items?itemName=blanu.vscode-styled-jsx - 200k installs
    Stencil: {},
    // TODO https://mitosis.builder.io/?outputTab=G4VwpkA%3D -- Write components once, run everywhere. Compiles to Vue, React, Solid, Angular, Svelte, and more.
    // "Intro to Mitosis: The universal reactive transformer
    // Mitosis is the JavaScript compiler that lets developers "write once, run anywhere," then compile to Angular, Vue, Svelte, and more. It could lead to a universal model of front-end development frameworks."
    // ======= cross-platform / hybrid development:
    Capacitor: {},
    Cordova:
      {} /* NO PhoneGap -- discontinued - https://blog.phonegap.com/update-for-customers-using-phonegap-and-phonegap-build-cc701c77502c ? */,
    NativeScript: {},
    // React Native would also be here, but same logo
    Flutter: {},
    Expo: {} /* TODO: mark as non-main experience; (in nx project template; here and in expanding-to) */,
    'Compose Multiplatform': {},
    // TODO: Frontend: 'https://avaloniaui.net/': {}, // .NET ; https://marketplace.visualstudio.com/items?itemName=AvaloniaTeam.vscode-avalonia
    Electron: {} /* TODO: mark as non-main experience */,
    // "NW.js": {}, // bad contrast and kinda old stuff anyway
    // "WebKit": {}, // bad contrast
    // ==== Frontend State management:
    Redux: {},
    // "Redux Toolkit": {}, // hide coz looks like duplicate icon?;  // hiding coz looks quirky and I don't have other stuff like that with same icon, e.g. SvelteKit. And it's kinda implied, that each tech can have its companion toolkit / higher-level utilities, so Redux Toolkit not that special; also, saving space
    Recoil: {},
    // "Jotai": {}, - commented-out coz stands out too much and reminds me of some period of paranoia over which icons to add; just 13k GH stars anyway
    // "Zustand": {}, // ugly and bad contrast
    Akita: {}, // TODO elf
    NgRx: {},
    NGXS: {},
    Pinia: {},
    MobX: {}, // TODO FIXME MobX-State-Tree https://github.com/mobxjs/mobx-state-tree/blob/b6c1c9b29d7bd7525ac6588f8f67f6c13eb17b2b/website/static/img/mobx-state-tree-logo.svg
    'MobX-State-Tree': {}, // TODO FIXME MobX-State-Tree https://github.com/mobxjs/mobx-state-tree/blob/b6c1c9b29d7bd7525ac6588f8f67f6c13eb17b2b/website/static/img/mobx-state-tree-logo.svg
    // https://github.com/simple-icons/simple-icons/issues/4352
    Vercel: {},
    Netlify: {},
    Jamstack: {},
    Turbopack: {},
    Turborepo: {},
    esbuild: {},
    'Speedy Web Compiler (SWC)': {},
    Rollup: {},
    // TODO Parcel
    Vite: {}, // https://github.com/pocketbase/pocketbase
    Vitest: {},
    Biome: {},
    pnpm: {},
    /* TODO: Spring Framework */
    /* FIXME: more backend: OpenAPI, maybe JSON Schema, websockets, socket.io maybe */
    /// ==== comprehension / compare / explore:
    // https://jakearchibald.github.io/svgomg/ / https://github.com/svg - with gradient
    /// ====
    /* TODO: Smth like PowerBI, Tableau ? */
    /* TODO: (kubernetes?) */
    // TODO: Mine: ComRev: {}, // CompaReview -
    StackShare: {}, // comprehension
    // TODO: https://open-vsx.org/ // comprehension

    Openbase: {},
    SVGPorn: {},
    SVGO: {},
    SVGator: {},
    Figma: {},
    UXPin: {},
    Zeplin: {},
    Dribbble: {},
    // ==== vector graphics, svg:
    GreenSock: {},
    'D3.js': {},
    SVG: {},
    // ===== 3d graphics:
    WebGL: {},
    glTF: {} /* FIXME too big */,
    WebGPU: {},
    Blender: {},

    // "AG Grid": {}, // old logo; and trying to conserve horizontal space
    Lodash: {},
    ReactiveX: {},
    Storybook: {},
    // ==== TESTING
    AVA: {},
    Selenium: {},
    TestCafe: {},
    Cypress: {},
    Playwright: {},
    'Testing Library': {}, // https://github.com/testing-library not just react; has 6.7M npm/week; https://testing-library.com/
    'Nightwatch.js': {},
    UserTesting: {},
    BrowserStack: {}, // high on stackshare
    Jest: {},
    //// ====== WebAssembly (WASM):
    WebAssembly: {},
    AssemblyScript: {},
    'WebAssembly System Interface (WASI)': {},
    Wasmer: {},
    'WebAssembly Package Manager (WAPM)':
      {} /* https://wapm.io/startpage/logo.svg */,
    Wasmtime: {},
    Fermyon: {}, // https://github.com/fermyon/spin ; microservices in webassembly // too ugly; but this will have tiny icons anyway
    Rust: {},
    Tauri: {},
    Tokio: {},
    // TODO: Rust: Tauri: {},
    // TODO: Rust: Tokio: {},
    // TODO: Rust: Tonic: {},
    // TODO: Rust: Rust Rover
    /// ===== ^^^^^ End of Frontend / UI / UX / WASM related
    // ========= Frontend-Backed communication protocols:
    GraphQL: {},
    Apollo: {} /* TODO Apollo Studio? */,
    'Altair GraphQL Client': {},
    Swagger: {},
    OpenAPI: {},
    // TODO
    tRPC: {},
    // ====== Tracking / tracing / security:
    Dynatrace: {},
    Sentry: {},
    // ^^ stuff that is kinda frontend-related
    Datadog: {},
    Snyk: {} /*  --- comments: includes/bought deepcode */,
    OWASP: {} /*  */,
    CodeSee: {},
    /// Version control and collaboration:
    Git: {},
    GitHub: {},
    GitLab: {},
    /* TODO: smth like Jira / Atlassian */
    /* TODO: BitBucket ? */

    // ====== LowCode / NoCode
    Airtable: {},
    Notion: {},
    // https://www.opensourcealternative.to/alternatives-to/Airtable
    // TODO: Lowcode: 'FIXME Affine': {},
    // TODO: Lowcode: 'FIXME Outline': {}, // or next to notion
    // TODO: Lowcode: 'FIXME Appflowy': {}, // or next to notion
    // TODO: Lowcode: 'FIXME Baserow': {}, // or next to notion
    // TODO: Lowcode: 'FIXME Rowy': {}, // or next to notion
    // TODO: Lowcode:'FIXME nocodb': {}, // or next to notion
    // TODO: Lowcode: https://github.com/appwrite/appwrite


    Coda: {},
    Zapier: {},
    IFTTT: {},
    Kong: {} /* The Cloud Native API Management Platform */,
    // ==== headless CMS:
    Storyblok: {},
    Strapi: {}, // 54k stars GH! Self-hosted or Cloud, RESTful or GraphQL
    // ====  LowCode / NoCode:
    Shopify: {},
    Budibase: {},
    Bubble: {},
    Framer: {},
    WebFlow: {},
    Wix: {},

    // TODO: https://github.com/imartinez/privateGPT
    // TODO: https://github.com/smol-ai/developer
    // TODO: AI: 'SMOL.ai': {}, // vercel investment
    'Cursor.sh': {},
    // ==== AI / ML: TODO its own section with bigger icons, etc.
    // ====== IDE-s:
    // TODO: intellij idea
    // jetbrains academy, JB Space
    // mypy - python static type checker
    // DataSpell (data science) Jupyter;
    Warp: {},
    Ghostwriter: {}, // Between AI and Web IDE-s
    Replit: {},
    // TODO: AI-powered coding: CodeSandbox: {}, // Boxy AI // https://codesandbox.io/
    'Visual Studio Code': {},
    VSCodium: {},
    'Open VSX Registry': {},
    Carbide: {},
    // "Cloud9": {},
    'JetBrains Fleet': {},
    WebStorm: {},
    PyCharm: {},
    //
    'JetBrains DataLore': {},
    Jupyter: {},
    Conda: {},
    Anaconda: {},
    'Google Colaboratory': {},
    Observable: {},
    'Hugging Face': {},
    // TODO: AI: kaggle -  data sets, models

    // ===== TODO MLOPS (MLOps)
    Cohere: {},
    'Weights & Biases': {},
    // https://clear.ml/
    'Open Neural Network Exchange': {},
    // TODO AutoGPT
    // TODO FIXME MUST_HAVE: AI: https://github.com/langchain-ai/langchain - LangChain must have
    // TODO: AI: 'LangChain': {},
    // TODO: AI: 'https://github.com/deepset-ai/haystack': {}, // https://github.com/deepset-ai
    // TODO FIXME MUST_HAVE: AI: smith.langchain.com/ -- LangSmith
    // LangServe
    // https://localai.io/features/text-generation/ - llama -
    // - - https://sourceforge.net/projects/rwkv-cpp.mirror/ - 14B parameters
    // https://en.wikipedia.org/wiki/Chinchilla_AI
    // TODO: AI: openrouter.AI -- near perplexity
    // nat.dev - like openrouter -- near perplexity
    // todo maybe some azure AI
    NumPy: {},
    PyTorch: {},
    pandas: {},
    'Google JAX': {},
    // TODO AI: https://www.pola.rs/ - Polars Rust for AI/ML From Luis Lopez CommerceHub; DataFrames for the new era - play on Pandas? "Built by developers for developers to achieve up to 50x Performance"
    // TODO AI: Dask
    // TODO AI: Vaex
    // TODO AI: Modin
    // TODO AI: Parquet
    // TODO AI: https://scikit-learn.org/stable/
    // TODO Jax - https://github.com/google/jax - has logo - group with lower-level stuff with smaller icons
    // whereas my higher-level stuff like LLM-s for coding, with bigger icons, almost as big as TypeScript, Angular, second row
    // TODO: ONNX | Home -- Open Neural Network Exchange -- The open standard for machine learning interoperability

    TensorFlow: {},
    Keras: {},
    // TODO: AI: 'nvidia.svg': {},
    // ============== AI-powered coding
    // TODO: AI: prompt engineering
    'Builder.io': {}, // https://www.youtube.com/watch?v=bRFLE9qi3t8&ab_channel=Steve%28Builder.io%29 -- MIT License
    // TODO: Frontend: 'FIXME https://github.com/BuilderIO/mitosis': {},
    'Vercel V0': {}, // vercel-v0-icon
    'GitHub Copilot': {},
    // TODO: AI-powered coding: 'GitHub Copilot in Terminal': {},
    Tabnine: {},
    // TODO: AI-powered coding: "https://www.jetbrains.com/ai/": {}, // jetbrains ai assistant // got the swirly logo
    CodiumAI: {},
    Safurai: {},
    /// Open-source AI-powered coding
    // TODO: AI:  "https://github.com/AntonOsika/gpt-engineer": {}, // -- no logo
    // TODO: AI: "Aider": {}, // -- no logo except on discord
    // TODO: AI: Ollama: {},
    // TODO: AI: 'https://replicate.com/': {}, // MLops? Maybe not on shirt but should be on AI graph
    // TODO: AI: 'TODO https://github.com/streamlit/streamlit': {},
    // TODO: AI: 'TODO https://github.com/oobabooga/text-generation-webui': {},
    // TODO: AI: 'FIXME GRAB shirt.data.ts': {},
    // TODO: AI: Gpt4all: {}, // open-source
    // TODO: AI: Nomic: {}, (has embedding model)
    // TODO: AI: 'https://www.deepseek.com/': {},
    // TODO: AI: 'https://falconllm.tii.ae/': {}, // TII logo if necessary
    // TODO: AI: 'Mistral Orca / openorca etc': {}, // TODO MIXTRAL DOPLHIN 8x7B
    // TODO: AI: LongNet: {}, // https://abishpius.medium.com/say-goodbye-to-llm-token-limits-soon-longnet-scaling-transformers-to-1-000-000-000-tokens-1db51388d3d#:~:text=Longnet%20has%20a%20Vastly%20larger%20token,limit%20than%20all%20the%20current%20LLM%20models
    Sourcegraph: {},
    'Cody AI': {},
    MetaMage: {},
    Rift: {},
    // Blackbox - https://marketplace.visualstudio.com/items?itemName=Blackboxapp.blackbox
    Continue: {},
    TabbyML: {},
    // TODO: https://learn.microsoft.com/en-us/semantic-kernel/overview/ -- Semantic Kernel
    'OpenAI Codex': {},
    'Amazon CodeWhisperer': {}, // https://aws-icons.com/icons/augmented-ai-a2i -> https://aws.amazon.com/architecture/icons/
    'Amazon Q': {}, // https://aws-icons.com/icons/augmented-ai-a2i -> https://aws.amazon.com/architecture/icons/
    'Amazon Bedrock': {},
    'Amazon SageMaker': {}, // ipynb?
    'Amazon Comprehend': {},
    'Amazon Kendra': {},
    'Amazon Lex': {},
    // TODO: AI: 'Amazon Titan': {}, // mas multimodal
    // TODO: AI: 'Amazon SageMaker Studio': {}, // https://aws.amazon.com/sagemaker/studio/
    // TODO: AI: JupyterLab // https://jupyter.org/try
    // TODO: AI: 'Amazon SageMaker JumpStart': {},
    // TODO: AI: 'Amazon PartyRock': {}, // similar to vercel v0 a bit?
    // TODO: AI: https://runwayml.com/ai-magic-tools/gen-2/ (text to video, multimodal)
    // TODO: AI: https://github.com/apache/mxnet
    // TODO: AI: 'x.ai Grok': {},
    // TODO: AI: 'Google Project IDX': {}, // https://idx.dev/
    // TODO: AI: 'Google Duet AI': {},
    // TODO: AI: 'Google Palm': {},
    // TODO: AI: Google Bard, Lamda, https://ai.meta.com/llama/ meta llama, "Meta AI"
    // TODO: AI: https://github.com/langgenius/dify - "An Open-Source Assistants API and GPTs alternative. Dify.AI is an LLM application development platform. It integrates the concepts of Backend as a Service and LLMOps, covering the core tech stack required for building generative AI-native applications, including a built-in RAG engine."

    'Microsoft Bing': {},
    'Microsoft Copilot': {},
    'Microsoft AutoGen': {},
    'LangChain': {},
    // TODO: AI: https://smythos.com/
    'C3 AI': {}, // enterprise AI

    OpenAI: {},
    // TODO: AI: OpenAI Gym
    xAI: {},
    "Magic.dev": {},
    'Tesla': {},
    '1X Technologies': {},
    'Boston Dynamics': {},
    'Stanford University': {},
    'Phind': {},
    'Perplexity.ai': {},
    'Quora Poe': {},
    // TODO: AI: Poe: {}, // Quora Poe (Platform for Open Exploration) is a service developed by Quora and launched in December 2022.
    'Google Bard': {},
    'Google Gemini': {},
    'Google DeepMind': {},
    'Google Vertex AI': {},
    'Mistral AI': {},
    'Anthropic': {},
    'AI21 Labs': {},
    // TODO: AI: 'TODO Meta': {}, // (llama, FAISS)
    'Open Assistant': {},
    LAION: {},
    Ollama: {},
    Gradio: {},
    Streamlit: {}, // chat: https://docs.streamlit.io/knowledge-base/tutorials/build-conversational-apps
    // TODO: AI: "https://github.com/joaomdmoura/crewAI": {},
    'Stability AI': {},
    'Stable Diffusion': {},
    'Midjourney': {},
    'Runway': {}, // https://runwayml.com/
    // TODO: AI: AutoGPT: {},
    // TODO: AI: 'https://www.rabbit.tech/': {}, // rabbit r1 - https://twitter.com/PatrickJS__/status/1744976985313660968
    // TODO: AI: 'https://www.aie.foundation/': {},
    Markdown: {},
    // TODO: AI (competition to markdown): Asciidoctor: {}, // asciidoc

    // ===== BlockChain / CryptoCurrencies
    Ethereum: {},
    'Basic Attention Token (BAT)': {},
    Bitcoin: {},
    Solidity: {},
    Web3: {},
    'web3.js' /* FIXME */: {},
    'ethers.js': {},
    Solid: {},

    // ==== Social / Content / Discovery / comprehension
    YouTube: {},
    Twitch: {}, // live codings
    Spotify: {}, // live codings
    Vimeo: {},
    LinkedIn: {},
    Mastodon: {},
    Meetup: {},
    Discord: {}, // AI stuff
    'Y Combinator': {}, // also Hacker News ( https://news.ycombinator.com/ ) where stuff emerges; also social and kinda comprehension
    // TODO  "TechCrunch": {}, // also discovery and comprehension https://www.techstars.com/portfolio
    // TODO  "TechStars": {},
    // TODO  "CrunchBase": {},
    //
    Linux: {},
    Docker: {},
    Terraform: {},
    Ansible: {},
    GraalVM: {},
    // ==== Databases (DB-s): (the backend-only databases should go last, coz they are farthest from frontend)
    // TODO: postrgres, redis (also vec db) ,, pgvector
    // MySQL vec db -- planetscale - https://planetscale.com/blog/planetscale-is-bringing-vector-search-and-storage-to-mysql https://planetscale.com/ logo svgporn
    // TODO Azure Cosmos DB
    // TODO: Grafana: {},
    Feathers: {},
    '8base': {},
    Algolia: {},
    Meilisearch: {},
    Typesense: {},
    // "Elastic.co": {}, // tagline: 'Search. Observe. Protect.'. Rationale for own icon: it's kinda on the level of aws/azure/gcp with lots of products
    OpenSearch: {},
    Elasticsearch: {},
    Logstash: {},
    Kibana: {},
    Beats: {},
    'Microsoft Azure': {},
    AWS: {},
    // TODO FIXME Google Cloud
    'AWS Amplify': {},
    // TODO 'CouchBase', 'CouchDB',
    Firebase: {},
    Supabase: {},
    // TODO PocketBase - Open Source realtime backend in 1 file (good id, relations, rich text)
    RxDB: {},
    // ===== analytics: (helps in comprehension, discovery, tracking)
    // TODO "Apache Spark": {},
    // TODO "Apache Druid": {}, /* analytics*/
    // TODO  "Apache Superset": {}, // lot of typescript and python

    Prisma: {},
    MongoDB: {},
    ArangoDB: {},
    SurrealDB: {} /* Also vector DB, written in Rust */,
    Xata: {},
    Dgraph: {},
    Fauna: {},
    // TODO: https://github.com/MaterializeInc/materialize - Streaming DB, Rust
    // "RethinkDB": {}, /* disabled to save space and optimize layout for print */
    MindsDB: {},
    // ====== Vector / Embeddings DB-s (Databases)
    // - https://en.wikipedia.org/wiki/Vector_database
    // - https://learn.microsoft.com/en-us/semantic-kernel/memories/vector-db
    Redis: {}, // has vec db too supposedly
    Pinecone: {},
    LlamaIndex: {},
    Vespa: {},
    Weaviate: {},
    Chroma: {},

    Milvus: {},
    // TODO: AI: 'Milvus Zilliz': {},
    Qdrant: {},
    // TODO: AI: Faiss: {},
    'Apache Cassandra': {},
    // FAISS is (from meta) is another thing related to embeddings / vector db; but no logo currently

    // TODO: some vector db-s https://www.youtube.com/watch?v=klTvEwg3oJ4&ab_channel=Fireship
    // TODO JetBrains Fleet

    //
    // "RxJS": {}, -- no icon (can be ReactiveX)
    // TODO: , Ng-bootstrap, material, angular-material
    // TODO: , Google Cloud Platform, Azure
    // TODO: Font Awesome
    // github actions, gitub copilot
    // TODO payoneer, pm2, postman
    // TODO: Docusaurus; 40k stars on GH
    // TODO immer
    // TODO:
    // TODO polymer
    // TODO Elastic / Kibana / elastic stack - (ELK ; logstack, beats) !!! new logo
    // TODO: StackBlitz, StackShare
    // TODO: Loom
    // TODO: some lowcode/nocode / BI (business intelligence) /  Tableau
    // TODO: AppSheet
    // TODO: Appian, https://www.gartner.com/reviews/market/enterprise-low-code-application-platform
    // https://www.google.com/search?q=gartner+nocode+quadrants&sxsrf=ALiCzsYzQgM6ji258wt8ABwXX5oLXHpKFA%3A1667484719597&ei=L8xjY6WBJIr_7_UP-_ClgAY&ved=0ahUKEwjl1ITTmJL7AhWK_7sIHXt4CWAQ4dUDCA8&uact=5&oq=gartner+nocode+quadrants&gs_lp=Egxnd3Mtd2l6LXNlcnC4AQP4AQEyBhAAGBYYHjIFEAAYhgMyBRAAGIYDMgUQABiGAzIFEAAYhgPCAgoQABhHGNYEGLADwgIFEAAYgATCAggQABgWGB4YD5AGCEj4DVBuWIgNcAF4AcgBAJABAJgBhwGgAfoIqgEDMS454gMEIE0YAeIDBCBBGADiAwQgRhgAiAYB&sclient=gws-wiz-serp#imgrc=gQRhhPExJFw07M
    // outSystems, Mendix, ZoHo builder
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
  *  */
  /** This should just be languages / platforms / ecosystems */
  broad: topics({
    /* maybe distinguish broad from polyglot? This is more past stuff */
    // "JavaScript": {}, /* FIXME es6 bad */
    Kotlin: {},
    'JetBrains MPS': {},
    Java: {},
    Groovy: {},
    Scala: {},
    'Eclipse Ceylon': {},
    Android: {},
    Dart: {},
    Swift: {},
    /* Maybe .NET / Core */

    // ====== Closer to C, C++
    Rust: {},
    Zig: {},
    Nim: {},
    // TODO: "https://www.roc-lang.org/": {/* Brydon*/},
    Go: {},
    'D Language':
      {} /* FIXME: D logo prints with glitches; FIXME: remove shadow; adapt: https://dlang.org/images/dlogo.svg -- OR BETTER just get the square-bounded logo out of the current file as square is less problemss */,
    'V Language': {},
    'Google Carbon': {},
    'C++': {},
    C: {},
    HolyC: {},
    'C#': {},
    'F#': {},
    '.NET': {},
    // ".NET Core": {},
    Blazor: {},
    Ruby: {},
    Crystal: {},
    Sorbet: {}, //  TODO: https://sorbet.org/ - a fast, powerful type checker designed for Ruby
    Python: {},
    // TODO: AI: PyScript: {}, // by anaconda
    mypy: {},
    'Python Pyre': {},
    Pyright: {},
    // TODO: pytype - 🦆✔ - by google - https://github.com/google/pytype #Python static type analyzer
    Mojo: {}, // TODO https://github.com/modularml/mojof
    // TODO: AI: 'OpenAI Triton': {},
    Julia: {},
    // TODO: AI: 'Wolfram Language': {},
    // TODO: AI: 'Wolfram Mathematica': {},

    Haxe: {},
    Hack: {},
    PHP: {},
    Perl: {},
    Raku: {},
    Bash: {},
    'R Language': {},
    Lua: {},
    Eiffel: {},
    Erlang: {},
    Elixir: {},
    Haskell: {},
    Prolog: {},
    Lisp: {},
    OCaml: {},
    Fortran: {},
    COBOL: {},
    PureScript: {},
    ReScript: {}, // Cristiano Calcagno from Rift
    'Mint Lang': {},
    Imba: {},
    Elm: {},
    CoffeeScript: {},
    Clojure: {},
    ClojureScript: {},
    // https://pypl.github.io/PYPL.html
    // TODO: some functional / fancy languages: Erlang, Haskell, Elixir, Eiffel, OCaml (Pricemoov Ion)
    // Prolog, Mozart OZ
    //  Lisp / Scheme with cool logo
    // TODO: check console for 404 errors for missing logos
  }),
  personalInterests: topics({
    Volleyball: {},
    'Interpersonal Networking': {},
    // TODO: 'https://thesolfoundation.org/': {},
    Hiking: {},
    /* TODO: mountain / climbing icon */
    Outdoors: {},
    Nature: {},
    'Car trips': {},
    Bicycle: {},
    'Table Tennis': {},
    Padel: {},
    Swimming: {},
    // Guitar: {},
    ASG: {},
    Chess: {},
    Triskelion: {},
    Wikipedia: {},
    Business: {},
    Psychology: {},
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
  }),
};
