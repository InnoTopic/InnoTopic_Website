// import * as winston from 'winston';
import { MapToTopics } from '../skills/work-experience';
import { setIdsFromKeys } from '../utils/dictionary-utils';

export interface Organisation {
  flags?: string
  locations?: string
  projects: {[projKey: string]: Project}
  time: (number|string)[]
  logoFileName?: string
  linkedInRecommendations?: number
}

export class Project {
  roles?: string
  description?: string
  topicsById!: MapToTopics<{}>
}

function org(organisation: Organisation) {
  // console.log('processing org', organisation)
  let projects = organisation.projects;
  // console.log('or projects', organisation.projects)
  for (let projectId of Object.getOwnPropertyNames(projects)) {
    let currProject = projects[projectId];
    // console.log('processing projectId', projectId, project)
    const topics = currProject.topicsById
    // winston.debug('org topics', topics)
    setIdsFromKeys(topics, 'topicId')
  }

  return organisation
}

function project(p: Project) {
  return p
}

export class WorkOrganisationsAndProjectsData {

  static instance = new WorkOrganisationsAndProjectsData()

  constructor() {
  }

  // Rithum - CloudFormation, CDK, Serverless, Lambda, Kinesis, DynamoDB, OpenSearch, Kibana, Tanstack, Java, C#
  // Tokio, Clap, Diesel, LaunchDarkly, Amazon RDS
  // Rust Rover. C# jetbrains thingy - JetBrains Rider, dotMemory, dotTrace, dotCover, Resharper, dotPeek.
  // Serde, Serde JSON
  // Bedrock, Gradio, Qdrant, AutoGen
  // Azure (for GPT4)
  // TerraForm CDK
  'Rithum' = org({
    // subTitle: '(formerly known as CommerceHub / ChannelAdvisor / DSCO)',
    // TODO: some info that it was e-commerce
    flags: 'es uk us pt',
    time: ['2023', '2024' /* TODO: make months optional */],
    linkedInRecommendations: 3,
    locations: `Málaga, remote, Madrid, Dubai`,
    logoFileName: `epic-elite-logo.svg`,
    projects: {
      'EpicElite Platform': project({
        roles: 'Staff Engineer',
        description: 'Recruited and interviewed 5 Developers and a UI/UX/Web/Graphics Designer. I have lead a team of 5 Developers. Did code&architecture reviews.' +
          'Working directly with CEO & Director of Operations. Communication in English, Spanish, Polish.',
        topicsById: {
          'Terraform': {},
          'Angular': {},
          'React': {},
          'Tailwind CSS': {},
          'Angular Material': {},
          'AG Grid': {},
          'GraphQL': {},
          'Apollo': {},
          'Apollo Studio': {},
          'TypeScript': {},
          'Ionic': {},
          'Cypress': {},
          'Jest': {},
          'Bootstrap': {},
          'React-Bootstrap': {},
          'Netlify': {},
          'Gatsby': {},
          'Lodash': {},
          'YouTube': {},
          // TODO: 'YouTube API': {},
          // TODO: 'YouTube Partner API': {},
          'Figma': {},
          'Zeplin': {},
          'SVG': {},
          'MobX': {},
          "MobX-State-Tree": {},
          // 'TestCafe': {},
          'Git': {},
          'GitHub': {},
          'Docker': {},
          'Kubernetes': {},
          'Elasticsearch': {},
          'AWS': {},
          // 'Trello': {},
          'WebStorm': {},
          // 'PyCharm': {},
          'Notion': {},
          'Slack': {},
          'Datadog': {},
          'TypeORM': {},
          'TypeGraphQL': {},
          'AudioSalad': {},
          'Python': {},
          'Django': {},
          // TODO: PyCharm
          'PHP': {},
          'Laravel': {},
          'PandaDoc': {},
          DDEX: {},
        }
      })
    },
  })


  'Epic Elite FZE' = org({
    flags: 'es uk ae us pl pt',
    time: ['March 2021', 'September 2022'],
    linkedInRecommendations: 3,
    locations: `Málaga, remote, London, Dubai`,
    logoFileName: `epic-elite-logo.svg`,
    projects: {
      'EpicElite Platform': project({
        roles: 'Lead/Senior Full-Stack Developer & Interviewing and Recruiting (Consultant)',
        description: 'Recruited and interviewed 5 Developers and a UI/UX/Web/Graphics Designer. I have lead a team of 5 Developers. Did code&architecture reviews.' +
          'Working directly with CEO & Director of Operations. Communication in English, Spanish, Polish.',
        topicsById: {
          'Mailgun': {},
          'Rust': {},
          'reCAPTCHA': {},
          'Terraform': {},
          'Angular': {},
          'Angular Material': {},
          'AG Grid': {},
          'GraphQL': {},
          'Apollo': {},
          'Apollo Studio': {},
          'TypeScript': {},
          'Ionic': {},
          'Cypress': {},
          'Jest': {},
          'React': {},
          'Tailwind CSS': {},
          'Bootstrap': {},
          'React-Bootstrap': {},
          'Netlify': {},
          'Gatsby': {},
          'Lodash': {},
          'YouTube': {},
          'Figma': {},
          'Zeplin': {},
          'SVG': {},
          'MobX': {},
          "MobX-State-Tree": {},
          // 'TestCafe': {},
          'Git': {},
          'GitHub': {},
          'Docker': {},
          'Kubernetes': {},
          'Elasticsearch': {},
          'AWS': {},
          // 'Trello': {},
          'WebStorm': {},
          // 'PyCharm': {},
          'Notion': {},
          'Slack': {},
          // TODO: 'Slack API': {},
          'Datadog': {},
          'TypeORM': {},
          'TypeGraphQL': {},
          'AudioSalad': {},
          'Python': {},
          'Django': {},
          // TODO: PyCharm
          'PHP': {},
          'Laravel': {},
          'PandaDoc': {},
        }
      })
    },
  })


  'Genengine SL (as Consultant)' = org({
    flags: 'es uk',
    time: [2019, 2020],
    linkedInRecommendations: 2,
    locations: `Málaga, on-site and remote`,
    logoFileName: `genengine-simbolo_isotipo-azul.svg`,
    projects: {
      'Genengine Angular App for genetic diagnosis of rare diseases': {
        roles: 'Senior Angular Developer (Consultant)',
        description: 'First I wrote a suite of E2E UI tests in TestCafe from scratch, in order to increase confidence while making changes.' +
          ' Then I made numerous improvements of UI/UX, performance, robustness, architecture, refactors and I prepared the app for release. Working directly with CEO & CTO. Communication in English and Spanish.',
        topicsById: {
          'Angular': {},
          'React': {},
          'TypeScript': {},
          'TestCafe': {},
          'Angular Material': {},
          'Git': {},
          'GitLab': {},
          'Docker': {},
          'Trello': {},
          'WebStorm': {},
          'R Language': {}
        }
      }
    },
  })

  'AIG (as Consultant)' = org({
    flags: 'pl de at es gb us', /* FIXME */
    time: [2017, 2018],
    logoFileName: 'AIG_logo.svg.png', /* USE https://vectorizer.ai/ ! works really well */
    linkedInRecommendations: 2,
    locations: 'Heilbronn - Germany, Málaga - Spain (remote)',
    projects: {
      'Platform for assessing risk': {
        roles: 'Lead frontend developer and backend developer, teaching Angular',
        description: 'PWA working fully offline and synchronising with server to support multi-million-dollar multi-national functionality. Advanced analytics using charts and grid. Internationalisation. ' +
          'I developed the Angular + Bootstrap app from scratch and helped with the Node.js + MongoDB backend (conceptually as well as in development). Communication in English and German.',
        // recommendations: '',
        topicsById: {
          Angular: {
            subTopics: {
              'i18n': {} /* FIXME */
            }
          },
          TypeScript: {},
          Karma: {},
          Jasmine: {},
          Bootstrap: {},
          Less: {},
          'Node.js': {},
          'Express.js': {},
          'Dexie.js': {},
          'AG Grid': {},
          'Chart.js': {},
          PWA: {},
          Docker: {},
          Lodash: {},
          MongoDB: {},
          Mongoose: {},
          KeystoneJS: {},
          'Agile Central': {},
          'Git': {},
        }
      },
      'Customer-facing application for managing insurance plans and customer data': {
        roles: 'Senior Angular & Node.js Developer',
        description: '' /* FIXME */,
        topicsById: {
          Angular: {},
          Bootstrap: {},
          TypeScript: {},
          Less: {},
          'Node.js': {},
          'Express.js': {},
          XML: {},
          'XML Schema': {},
          BiPRO: {},
          Git: {},
        }
      },
      'Application for managing insurance plans': {
        roles: 'Senior Angular Developer',
        description: 'Drag & drop tree, file upload via drag & drop.',
        topicsById: {
          Angular: {},
          TypeScript: {},
          Karma: {},
          Jasmine: {},
          Bootstrap: {},
          PrimeNG: {},
          Git: {},
        }
      }
    },
  })

  'InnoTopic SLU' = org({
    logoFileName: '../InnoTopic_Logo.svg',
    flags: 'pl us gb es',
    time: [2017],
    projects: {
      'InnoTopic.com website': project({
        roles: `Founder, Owner, Angular developer`,
        topicsById: {
          'Angular Material': {},
          Angular: {},
          TypeScript: {},
          Nx: {},
          Sass: {},
          WebStorm: {},
          WebGL: {},
          Blender: {},
          glTF: {},
          'D3.js': {},
          Git: {},
          GitHub: {},
          SVG: {},
          'Affinity Designer': {},
          'Figma': {},
          'Font Awesome': {},
          'Node.js': {},
          'Firebase': {},
        }
      }),
      'FlexAgenda': {
        roles: 'Founder, Android/Java Developer, Publisher',
        description: 'Android app for time planning (freemium). Reached 100k installs organically; 4.3/5 average rating. I developed the app from scratch in native Android & Java and released many versions based on a lot of user feedback I received. ' +
          'I was also in regular communication with users (paid and gratis) over e-mail, IM and voice chat, helping to solve issues and discussing improvement suggestions. App available in English, Spanish, German, Polish.',
        topicsById: {
          Android: {},
          Kotlin: {},
          Groovy: {},
          Spock: {},
          Java: {},
          Gradle: {},
          JUnit: {},
          Eclipse: {},
          'IntelliJ IDEA': {},
          'Android Studio': {},
          'Google Play': {},
          'GIMP': {},
          'Inkscape': {},
          'Adobe Illustrator': {},
          'Customer Support': {},
        }
      },
      'OrYoL - Organize Your Life': {
        roles: `Founder, Angular Developer`,
        topicsById: {
          Angular: {},
          PrimeNG: {},
          'Font Awesome': {},
          'Sass': {},
          TypeScript: {},
          Karma: {},
          Jasmine: {},
          Bootstrap: {},
          Firebase: {},
          'Cloud Firestore': {},
          'GCP - Google Cloud Platform': {},
          'GitHub': {},
        }
      },
      'LifeSuite': {
        description: 'Ionic 5 App (Web, Android, iOS) for finding solutions (psychology, motivation, productivity, etc.) to common life problems and to see life overview in terms of charts (SVG) like Ikigai, Flow State, etc. '
          + 'Released to Google Play and soon to Apple App Store. Has a search engine with Damerau-Levenshtein distance between strings - fuzzy search taking typos into account, with memoization for performance optimization. Strictest settings of TypeScript and Angular.',
        roles: `Founder, Angular/Ionic/Android/iOS Developer`,
        topicsById: {
          Angular: {},
          Ionic: {},
          Sass: {},
          TypeScript: {},
          NgRx: {},
          Karma: {},
          Jasmine: {},
          TestCafe: {},
          Bash: {},
          Bootstrap: {},
          Firebase: {},
          'Cloud Firestore': {},
          'GCP - Google Cloud Platform': {},
          'Git': {},
          'GitHub': {},
          'Android': {},
          'iOS': {},
          'Google Play': {},
          'SVG': {},
          'Gravit Designer': {},
          'Affinity Designer': {},
        }
      },
      'CloudTime': {
        description: 'Ionic 5 App (Web, Android, iOS) for timers (countdown, soon also counting up) synced across devices. '
          + 'Soon to be released to Google Play and Apple App Store.',
        roles: `Founder, Angular/Ionic/Android/iOS Developer`,
        topicsById: {
          Angular: {},
          Ionic: {},
          TypeScript: {},
          Karma: {},
          Jasmine: {},
          TestCafe: {},
          Bash: {},
          Firebase: {},
          'Cloud Firestore': {},
          'GCP - Google Cloud Platform': {},
          'Git': {},
          'GitHub': {},
          'Android': {},
          'iOS': {},
          'Google Play': {},
          'Affinity Designer': {},
        }
      }
    },
  })

  'Angular Málaga Meetup Group' = org({
    flags: 'gb es pl', /* FIXME */
    time: [2017],
    logoFileName: 'Angular-Malaga-Logo.svg',
    locations: 'Málaga - Spain',
    projects: {
      'Angular Málaga Meetup Group': {
        roles: 'Co-Founder / Co-Organizer, Event Organizer',
        topicsById: {
          Angular: {},
          TypeScript: {},
          Karma: {},
          Meetup: {},
          Git: {},
        }
      }
    },
  })

  'TopicFriends.org' = org({
    logoFileName: 'TopicFriends.svg',
    flags: 'pl us gb es',
    time: [2017],
    projects: {
      'TopicFriends.org Web App': {
        roles: 'Founder, Architect, Angular Developer',
        topicsById: {
          Angular: {},
          Firebase: {},
          'GCP - Google Cloud Platform': {},
          'Angular Material': {},
          'TestCafe': {},
          'WebStorm': {},
          'CircleCI': {},
          'Travis CI': {},
          'Git': {},
          'GitHub': {},
          'Bash': {},
          'TypeScript': {},
          'Karma': {},
          'Jasmine': {},
          'Figma': {},
          'Affinity Designer': {},
          'SVG': {},
          'Google Maps': {},
        }
      }
    }
  })


  'Oblong Industries' = org({
    locations: 'Barcelona, Los Angeles',
    flags: 'pl us gb es es-ct fr',
    logoFileName: 'oblong_logo.png',
    time: [2013, 2015],
    linkedInRecommendations: 2,
    projects: {
      'Mezzanine Android': {
        roles: 'Android Lead, Senior Developer',
        description: `Lead developer on the Android client of Company's flagship product, Mezzanine. ` +
          `I solidified and refactored existing codebase/prototype written by a Junior Developer, successfully releasing it and then making subsequent releases with new features. ` +
          `Also developed a schema language and code generator for Company's communication protocol, using JetBrains MPS (generating Java code from a DSL).`,
        topicsById: {
          'Google Play': {},
          'JetBrains MPS': {},
          'DSL - Domain-Specific Languages': {},
          Groovy: {},
          Android: {},
          iOS: {},
          Kotlin: {},
          'Ubuntu Linux': {},
          'macOS': {},
          Java: {},
          Gradle: {},
          Bugzilla: {},
          Ruby: {},
          Calabash: {},
          'BDD - Behavior-Driven Development': {},
          RubyMine: {},
          Cucumber: {},
          JUnit: {},
          Eclipse: {},
          'IntelliJ IDEA': {},
          'Android Studio': {},
        }
      }
    }
  })

  'CollabNet' = org({
    locations: 'Potsdam, Berlin, Silicon Valley',
    flags: 'pl de us gb in',
    logoFileName: 'collabnet_logo_blue.jpeg',
    time: [2011, 2013],
    linkedInRecommendations: 2,

    projects: {
      'TeamForge integration with Gerrit and Git': {
        roles: 'Java Developer and related',
        description: `Worked at the Company that created Subversion (Svn) version control system, somewhat ironically on development of integration of Git and Gerrit with CollabNet's flagship product - TeamForge, an ALM (Application Lifecycle Management) enterprise system, used by big enterprise clients like Intel, Ericsson, NXP. ` +
          `We were also dogfooding using the Gerrit-based code review system which was a great opportunity to also master advanced Git workflows using rebasing, squashing, etc.`,
        topicsById: {
          Java: {},
          SOAP: {},
          Perl: {},
          Python: {},
          Bash: {},
          Git: {},
          Subversion: {},
          JUnit: {},
          Cobertura: {},
          Mockito: {},
          Guice: {},
          'CentOS Linux': {},
          'Eclipse': {},
          'Jenkins': {},
          'TeamForge': {},
          'Gerrit': {},
          'PostgreSQL': {},
        }
      }
    }
  })


  'Siemens SIS (later Atos)' = org({
    locations: 'Wroclaw - Poland, Koszalin - Poland (remote)',
    flags: 'lu de pl gb',
    logoFileName: 'Siemens-logo.png',
    time: [2010, 2011],
    linkedInRecommendations: 2,
    projects: {
      'Multi-Dimensional-Tool for EuroStat (European Commission)': {
        roles: 'Java & Swing Senior Developer',
        description: `Development of EuroStat's MDT (Multi-Dimensional Tool) - main tool used for all kinds of statistics in the European Union. Advanced Java Swing UI.`,
        topicsById: {
          Java: {},
          Jira: {},
          Subversion: {},
          Eclipse: {},
          'IntelliJ IDEA': {},
          'PostgreSQL': {},
        }
      }
    }
  })

  'CoViOb - Communicate via Objects' = org({
    logoFileName: 'old-LogoIcon_Coviob2.svg.png',
    flags: 'pl gb',
    time: [2006, 2010],
    linkedInRecommendations: 2,
    projects: {
      'CoViOb - Communicate via Objects': {
        roles: `Startup Co-Founder, Architect, Java developer`,
        description: `Won startup competition main prize among ~100 startups. Decentralized database with version control (before Git became popular), real-time threaded communication (before Google Wave)`,
        topicsById: {
          Java: {},
          'Git': {},
          'Subversion': {},
          'Debian Linux': {},
          Scala: {},
          Maven: {},
          Eclipse: {},
          NetBeans: {},
          Bash: {},
          'IntelliJ IDEA': {},
          'JUnit': {},
          'TestNG': {},
        }
      }
    }
  })

  'Research And Engineering Center (REC), later GlobalLogic' = org({
    linkedInRecommendations: 2 /* TODO: check */,
    logoFileName: 'rec-global-logo.jpg',
    locations: 'Koszalin - Poland, Wroclaw - Poland',
    flags: 'pl gb de',
    time: [2010, 2011],
    projects: {
      'Rostock Harbor': {
        roles: 'Senior Java developer',
        topicsById: {
          Java: {},
          'Subversion': {},
          'JAXB': {},
        }
      },
      'M2M Platform': {
        roles: 'Senior Java developer, tech lead',
        topicsById: {
          Java: {},
          'Java Micro Edition': {},
          'Subversion': {},
          'Trac': {},
        }
      }
    }

  })


  'o2.pl' = org({
    time: [2008, 2009],
    flags: 'pl',
    projects: {
      'Java ME clients for E-mail and Instant Messaging': {
        roles: `Java ME developer`,
        description: `Got my hands very dirty working with binary IM protocol and E-mail protocol/format directly.`,
        topicsById: {
          Java: {},
          'Java Micro Edition': {},
          'Trac': {},
          'Subversion': {},
        }
      }
    }
  })

  'Petrus - TV, Internet, Phone' = org({
    time: [2006, 2006],
    locations: 'Chojnice, Poland',
    flags: 'pl',
    projects: {
      'Server Administration, Customer Support, Help Desk': {
        topicsById: {
          Linux: {},
          'Customer Support': {},
          'Oracle': {},
          'Perl': {},
        }
      }
    }
  })

  'Freelance Software Developer' = org({
    logoFileName: `laptop-code-solid.svg`,
    time: [2002],
    linkedInRecommendations: 1,
    locations: 'Poland, Germany, Spain',
    flags: 'pl gb',
    projects: {
      '3D Homes - Real estate app on Costa del Sol, with interactive maps and 3D views of homes': {
        topicsById: {
          Angular: {},
          TypeScript: {},
          'Angular Material': {},
          'Firebase': {},
          'Cloud Firestore': {},
          'WebStorm': {},
          'Git': {},
          'GitLab': {},
        }
      },
      'Angular app for geo-fencing protection of field workers in dangerous areas' /* (NDA) */: {
        description: `Angular Development. Worked directly with CEO/Founder.`,
        topicsById: {
          Angular: {},
          TypeScript: {},
          'Bootstrap': {},
          'WebStorm': {},
          'Vagrant': {},
          'Git': {},
          'Mapbox': {},
          // TODO: 'Mapbox': {},
        }
      },
      'Invoice Generator for Cable TV + Internet + Phone Company (Petrus)': {
        description: `Reliably generated tens of thousands of e-invoices every month, amounting to millions of invoices generated over the years.`,
        topicsById: {
          Java: {},
          'XML': {},
          'XML Schema': {},
          'JAXB': {},
          'PDF': {},
          'iText': {},
          'Git': {},
        }
      },
      'BlackBerry client for a social network' /*(NDA) */: {
        topicsById: {
          Java: {},
          BlackBerry: {},
          'Java Micro Edition': {},
          'Eclipse': {},
          'Git': {},
          'Pivotal Tracker': {},
        }
      },
    }
  })


  // personal projects
  // innotopic website
  // TopicFriends (organisation == project? )

}
