import { Topics } from '../topics-core/topics-data';
import { UserSkillLevelsHaveWant2 } from '../user-profile-shared/user-skills.service';
import { setIdsFromKeys } from '../utils/dictionary-utils';

export class WorkExperience {

  public constructor(
    public topic: string,
    public skill?: UserSkillLevelsHaveWant2,
  ) {}

}

export const beginner = 'beginner'
export const intermediate = 'intermediate'
export const advanced = 'advanced'
export const expert = 'expert'

export function we(/*topicId: string, */have?: string, want?: string) {
  return {
    skillLevels: {
      have: have,
      want: want,
    }
  }
  // return new
}

export type MapToTopics<TVal> = Partial<
  {
    [P in keyof Topics]: TVal // // https://www.typescriptlang.org/docs/handbook/advanced-types.html - Mapped Types
  }
>

export function experience(exp: MapToTopics<any>) {
  return setIdsFromKeys(exp, 'topicId')
}

//
// export class WorkExperienceList {
//   Git
//     = we(advanced, expert)
//   TypeScript
//     = we(advanced, expert)
// }

// const mapsToSchema: Partial<MapsToSchema> = {
//   a: '5',
//   b: '6',
//   // c: '7', // illegal
// }

// const x2 = {
//   a: 'a',
//   // a: 'b',
//   'JetBrains MPS': 'b',
// }
