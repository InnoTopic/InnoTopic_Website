import {
  Component,
  OnInit,
} from '@angular/core';
import { getDictionaryValuesAsArray } from '../utils/dictionary-utils';
import {
  workExperience
} from './work-experience-data';
import { highlights } from './work-experience-highlights-data';
import {UserSkillLevelEnum} from "../TopicFriendsShared3/skills/skills-core/user-skills";

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.sass']
})
export class WorkExperienceComponent implements OnInit {

  highlights = highlights

  experience = workExperience
  experiencesByStatusArray: any

  skillLevels = ['beginner', 'intermediate', 'advanced', 'expert'] as UserSkillLevelEnum[]

  constructor() { }

  ngOnInit() {
    this.experiencesByStatusArray = getDictionaryValuesAsArray(this.experience as any)
  }

}
