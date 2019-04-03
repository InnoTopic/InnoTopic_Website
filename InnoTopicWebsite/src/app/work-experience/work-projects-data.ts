function org(param: { projects: any; time: number[] }) {
  return param
}

function project(param) {
  return param
}

export class OrganisationsAndProjects {

  static instance = new OrganisationsAndProjects()

  AIG = org({
    time: [2017, 2018],
    projects: project({
      'Customer-facing application for managing insurance plans and customer data': {
        roles: 'Senior Angular & Node.js Developer',
        topics: {
          Angular: {},
          TypeScript: {},
          Less: {},
          NodeJS: {},
          Express: {},
        }
      },
      'XYZ': {

      }
    }),
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
