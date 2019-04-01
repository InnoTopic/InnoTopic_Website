import { UserSkillLevelsHaveWant2 } from '../user-profile-shared/user-skills.service';

export class WorkExperience {

  public constructor(
    public topic: string,
    public skill?: UserSkillLevelsHaveWant2,
  ) {}


}

// function x(y: {a: string}) {
//
// }

function y() {
  // x({a: 'a', b: 5})
}

export const beginner = 'beginner'
export const intermediate = 'intermediate'
export const advanced = 'advanced'
export const expert = 'expert'

export function we(/*topicId: string, */have?: string, want?: string) {
  return arguments
  // return new
}

export class WorkExperienceList {
  Git
    = we(advanced, expert)
  TypeScript
    = we(advanced, expert)
  Firebase
    = we(advanced, expert)
  'JetBrains MPS' =
    we(advanced)

}


// https://www.typescriptlang.org/docs/handbook/advanced-types.html
class Schema {
  a: number
  b: Object
  Yarn
}

type MapsToSchema<> = {
  [P in keyof Schema]: any
}

export function experience(exp) {
  const array = []
  let ownPropertyNames = Object.getOwnPropertyNames(exp);
  console.log('ownPropertyNames', ownPropertyNames)
  for (const id of ownPropertyNames) {
    const curExp = exp[id]
    console.log('curExp', id, curExp)
    curExp.topicId = id
    array.push(curExp)
  }
  return array
}

const mapsToSchema: Partial<MapsToSchema> = {
  a: '5',
  b: '6',
  // c: '7', // illegal
}

const x2 = {
  a: 'a',
  // a: 'b',
  'JetBrains MPS': 'b',
}
