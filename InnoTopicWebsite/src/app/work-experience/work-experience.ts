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
}

export type MapToTopics<TVal> = Partial<
  {
    [P in keyof Topics]: TVal // https://www.typescriptlang.org/docs/handbook/advanced-types.html - Mapped Types
  }
>

export function experience(title, comment, exp: MapToTopics<any>) {
  return {
    title: title,
    comment: comment,
    topics: setIdsFromKeys(exp, 'topicId')
  }
}
