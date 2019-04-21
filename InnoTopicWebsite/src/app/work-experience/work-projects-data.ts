import { setIdsFromKeys } from '../utils/dictionary-utils';

export interface Organisation {
  projects: any
  time: number[]
  logoFileName?: string
}

function org(organisation: Organisation) {
  // console.log('processing org', organisation)
  let projects = organisation.projects;
  for (let projectId of Object.getOwnPropertyNames(projects)) {
    let project = projects[projectId];
    // console.log('processing projectId', projectId, project)
    const topics = project.topics
    setIdsFromKeys(topics, 'topicId')
  }

  return organisation
}

export class OrganisationsAndProjects {

  static instance = new OrganisationsAndProjects()

  constructor() {
  }

  AIG = org({
    time: [2017, 2018],
    logoFileName: 'aiglogo_white.svg',
    projects: {
      'Customer-facing application for managing insurance plans and customer data': {
        roles: 'Senior Angular & Node.js Developer',
        topics: {
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
        topics: {
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
    time: [2013, 2015],
    projects: {
      'Mezzanine Android': {
        roles: 'Android Lead, Senior Developer',
        topics: {
          Android: {},
          Java: {},
          Gradle: {},
        }
      }
    }

  })

  // 'CollabNet' = org({
  //
  // })
  //
  // 'Siemens SIS' = org({
  //
  // })
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
