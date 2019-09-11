// import * as winston from 'winston';
import { setIdsFromKeys } from '../utils/dictionary-utils';

export interface Organisation {
  flags?: string
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

  'InnoTopic SLU' = org({
    logoFileName: '../InnoTopic_Logo.svg',
    flags: 'pl us gb es',
    time: [2018],
    projects: {
      'InnoTopic.com website': {
        topicsById: {
          'Angular Material': {},
          Angular: {},
          TypeScript: {},
        }
      },
      'FlexAgenda': {
        roles: 'Founder, Android/Java Developer, Publisher',
        description: 'Android app for time planning (freemium). Reached 100k installs organically.',
        topicsById: {
          Android: {},
          Java: {},
          Gradle: {},
          JUnit: {},
          Eclipse: {},
          'IntelliJ IDEA': {},
          'Android Studio': {},
        }
      }
    },
  })

  AIG = org({
    flags: 'pl de at es gb us', /* FIXME */
    time: [2017, 2018],
    logoFileName: 'AIG_logo.svg.png',
    projects: {
      'Platform for assessing risk': {
        roles: 'Lead frontend developer and backend developer, teaching Angular',
        description: 'PWA working fully offline. Advanced analytics using chart and grid. Internationalisation.',
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
          // TODO: Agile Central
        }
      },
      'Customer-facing application for managing insurance plans and customer data': {
        roles: 'Senior Angular & Node.js Developer',
        topicsById: {
          Angular: {},
          TypeScript: {},
          Less: {},
          'Node.js': {},
          'Express.js': {},
        }
      },
      'Application for managing insurance plans': {
        roles: 'Angular Developer',
        topicsById: {
          Angular: {},
          TypeScript: {},
          Karma: {},
          Jasmine: {},
          Bootstrap: {},
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
          'Angular Material': {},
          'TestCafe': {},
          'WebStorm': {},
          'CircleCI': {},
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
    flags: 'pl de us gb es es-ct in fr',
    logoFileName: 'oblong_logo.png',
    time: [2013, 2015],
    linkedInRecommendations: 2,
    projects: {
      'Mezzanine Android': {
        roles: 'Android Lead, Senior Developer',
        topicsById: {
          Android: {},
          Java: {},
          Gradle: {},
          Bugzilla: {},
          Ruby: {}, // TODO: Calabash Android
          RubyMine: {},
          JUnit: {},
          Eclipse: {},
          'IntelliJ IDEA': {},
          'Android Studio': {},
        }
      }
    }
  })

  // TODO: FlexAgenda, A2P; Play Store

  'CollabNet' = org({
    flags: 'pl de us gb in',
    logoFileName: 'collabnet_logo_blue.jpeg',
    time: [2011, 2012],
    linkedInRecommendations: 2,

    projects: {
      'CollabNet TeamForge integration with Gerrit Code Review System and Git': {
        roles: 'Java Developer and related',
        topicsById: {
          Java: {},
          // TODO: SOAP
          Perl: {},
          Python: {},
          Bash: {},
          // TODO: TeamForge
          Git: {},
          Subversion: {},
          JUnit: {}, // TODO: Cobertura, Mockito
          'CentOS Linux': {},
          'Eclipse': {},
          'Jenkins': {},
        }
      }
    }
  })


  'Siemens SIS' = org({
    flags: 'lu de pl gb',
    logoFileName: 'Siemens-logo.png',
    time: [2010, 2011],
    linkedInRecommendations: 2,
    projects: {
      'Multi-Dimensional-Tool for EuroStat (European Commission)': {
        topicsById: {
          Java: {},
          Jira: {},
          Subversion: {},
          Eclipse: {},
          'IntelliJ IDEA': {},
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


  //
  // 'Research And Engineering Center (REC), later GlobalLogic' = org({
  //
  // })
  //
  // 'o2.pl' = org({
  //
  // })

  // personal projects
  // innotopic website
  // TopicFriends (organisation == project? )

}
