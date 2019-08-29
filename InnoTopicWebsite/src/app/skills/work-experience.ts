import { UserSkillLevelsHaveWant2 } from '../TopicFriendsShared/skills/skills-core/user-skills';
import { Topics } from '../TopicFriendsShared/topics-core/topics-data';
import { setIdsFromKeys } from '../utils/dictionary-utils';

export class WorkExperienceByStatus {
  constructor(
    public title: string,
    public comment: string,
    public topics: any,
  ) {}
}

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
    [P in keyof Topics]: TVal // https://www.typescriptlang.org/docs/handbook/advanced-types.html - TypeScript Mapped Types
  }
>

export function experience(title, comment, exp: MapToTopics<any>): WorkExperienceByStatus {
  return {
    title: title,
    comment: comment,
    topics: setIdsFromKeys(exp, 'topicId')
  }
}
