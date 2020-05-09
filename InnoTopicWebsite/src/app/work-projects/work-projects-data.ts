// import * as winston from 'winston';
import { setIdsFromKeys } from '../utils/dictionary-utils';

export interface Organisation {
  flags?: string
  locations?: string
  projects: any
  time: number[]
  logoFileName?: string
  linkedInRecommendations?: number
}

function org(organisation: Organisation) {
  // console.log('processing org', organisation)
  let projects = organisation.projects;
  // console.log('or projects', organisation.projects)
  for (let projectId of Object.getOwnPropertyNames(projects)) {
    let project = projects[projectId];
    // console.log('processing projectId', projectId, project)
    const topics = project.topicsById
    // winston.debug('org topics', topics)
    setIdsFromKeys(topics, 'topicId')
  }

  return organisation
}

export class OrganisationsAndProjects {

  static instance = new OrganisationsAndProjects()

  constructor() {
  }

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
          ' Then I made numerous improvements of UI/UX, performance, architecture and preparing the app for release. Working directly with CEO & CTO.',
        topicsById: {
          'Angular': {},
          'TypeScript': {},
          'TestCafe': {},
          'Angular Material': {},
          'Git': {},
          'GitLab': {},
          'Docker': {},
          // 'R': {}
        }
      }
    },
  })

  'InnoTopic SLU' = org({
    logoFileName: '../InnoTopic_Logo.svg',
    flags: 'pl us gb es',
    time: [2017],
    projects: {
      'InnoTopic.com website': {
        roles: `Angular developer`,
        topicsById: {
          'Angular Material': {},
          Angular: {},
          TypeScript: {},
        }
      },
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
      'OrYoL': {
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
          'GCP': {},
          'GitHub': {},
        }
      },
      'LifeSuite': {
        description: 'Ionic 5 App (Web, Android, iOS) for finding solutions (psychology, motivation, productivity, etc.) to common life problems and to see life overview in terms of charts (SVG) like Ikigai, Flow State, etc. '
          + 'Released to Google Play and soon to Apple App Store.',
        topicsById: {
          Angular: {},
          Ionic: {},
          TypeScript: {},
          Karma: {},
          Jasmine: {},
          TestCafe: {},
          Bash: {},
          Bootstrap: {},
          Firebase: {},
          'Cloud Firestore': {},
          'GCP': {},
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
          'GCP': {},
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

  'AIG (as Consultant)' = org({
    flags: 'pl de at es gb us', /* FIXME */
    time: [2017, 2018],
    logoFileName: 'AIG_logo.svg.png',
    locations: 'Heilbronn - Germany, Málaga - Spain (remote)',
    projects: {
      'Platform for assessing risk': {
        roles: 'Lead frontend developer and backend developer, teaching Angular',
        description: 'PWA working fully offline and synchronising with server to support multi-million-dollar multi-national functionality. Advanced analytics using charts and grid. Internationalisation.' +
          'I developed the Angular + Bootstrap app from scratch and helped with the Node.js + MongoDB backend (conceptually as well as in development)',
        recommendations: '',
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
          'ag-Grid': {},
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

  'TopicFriends.org' = org({
    logoFileName: 'TopicFriends.svg',
    flags: 'pl us gb es',
    time: [2017],
    projects: {
      'TopicFriends.org Web App': {
        roles: 'Co-Founder',
        topicsById: {
          Angular: {},
          Firebase: {},
          'GCP': {},
          'Angular Material': {},
          'TestCafe': {},
          'WebStorm': {},
          'CircleCI': {},
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
          `Also developed a schema language and code generator for Company's communication protocol, using JetBrains MPS (generating Java code from a DSL)`,
        topicsById: {
          'Google Play': {},
          'JetBrains MPS': {},
          Groovy: {},
          Android: {},
          Kotlin: {},
          'Ubuntu Linux': {},
          'macOS': {},
          Java: {},
          Gradle: {},
          Bugzilla: {},
          Ruby: {}, // TODO: Calabash Android
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
    time: [2011, 2012],
    linkedInRecommendations: 2,

    projects: {
      'CollabNet TeamForge integration with Gerrit Code Review System and Git': {
        roles: 'Java Developer and related',
        description: `Development of integration of Git and Gerrit with CollabNet's flagship product - TeamForge (a software lifecycle enterprise system), used by big clients like Ericsson, NXP. ` +
          `We were also dogfooding using the Gerrit-based review system which was a great opportunity to also master advanced Git workflows using rebasing, squashing, etc.`,
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
        topicsById: {
          Java: {},
          'Java Micro Edition': {},
          'Trac': {},
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
      'Angular app for geo-fencing protection of field workers in dangerous areas (NDA)': {
        topicsById: {
          Angular: {},
          TypeScript: {},
          'Bootstrap': {},
          'WebStorm': {},
          'Vagrant': {},
          'Git': {},
        }
      },
      'Invoice Generator for Cable TV + Internet + Phone Company (Petrus)': {
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
      'BlackBerry client for a social network (NDA)': {
        topicsById: {
          Java: {},
          BlackBerry: {},
          'Java Micro Edition': {},
          'Eclipse': {},
          'Git': {},
        }
      },
    }
  })


  // personal projects
  // innotopic website
  // TopicFriends (organisation == project? )

}
