// import * as winston from 'winston';
import { setIdsFromKeys } from '../utils/dictionary-utils';

export interface Organisation {
  flags?: string
  projects: any
  time: number[]
  logoFileName?: string
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

  AIG = org({
    flags: 'pl de at es gb us', /* FIXME */
    time: [2017, 2018],
    logoFileName: 'AIG_logo.svg.png',
    projects: {
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
      // 'XYZ': {
      //
      // },
      'Platform for assessing risk': {
        roles: 'Lead frontend developer and backend developer, teaching Angular',
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
        }
      }
    },
  })

  'Oblong Industries' = org({
    flags: 'pl de us gb es es-ct in fr',
    logoFileName: 'oblong_logo.png',
    time: [2013, 2015],
    projects: {
      'Mezzanine Android': {
        roles: 'Android Lead, Senior Developer',
        topicsById: {
          Android: {},
          Java: {},
          Gradle: {},
        }
      }
    }

  })

  'CollabNet' = org({
    flags: 'pl de us gb in',
    logoFileName: 'collabnet_logo_blue.jpeg',
    time: [2011, 2012],
    projects: {

    }
  })

  'Siemens SIS' = org({
    flags: 'lu de pl gb',
    logoFileName: 'Siemens-logo.png',
    time: [2010, 2011],
    projects: {

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
