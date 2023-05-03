import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import {
  UserSkillLevelEnum,
  UserSkillLevelsHaveWant,
  UserSkillLevelsHaveWant2,
} from '../../TopicFriendsShared3/skills/skills-core/user-skills';
import { TopicInterest } from '../../topics-shared/topic-tag/topic-tag.component';

export const skillsIconsSignal = {
  none: 'signal-solid-1',
  beginner: "signal-solid-2",
  intermediate: "signal-solid-3",
  advanced: "signal-solid-4",
  expert: "signal-solid"
}


/** TODO: rename: app-skill-levels-icons-have-want */
@Component({
  selector: 'app-skill-levels-icons',
  templateUrl: './skill-levels-icons.component.html',
  styleUrls: ['./skill-level-label.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class SkillLevelsIconsComponent implements OnInit {

  @Input() skillLevels?: UserSkillLevelsHaveWant2;
  @Input() useSignalLevels = false

  icon: string;
  // text:string = "set";
  public isTextVisible: boolean = true;


  public skillsIcons = {
    none: 'battery-empty',
    beginner: "battery-quarter",
    intermediate: "battery-half",
    advanced: "battery-three-quarters",
    expert: "battery-full"
  }

  skillIconSignal(level: UserSkillLevelEnum) {
    return skillsIconsSignal[level !]
  }

  constructor() {
    /// if(topic in userSkills){
      // text = level;
      // icon = skillsIcons.whatever;
    /// } else {
      this.icon = this.skillsIcons.none;
      // }

  }

  ngOnInit() {
    if ( this.skillLevels ) {
      // console.log('SkillLevelLabelComponent, skillLevels', this.skillLevels)
      this.icon = this.skillsIcons[this.skillLevels.have ! /* HACK */]
      // todo; want
    }
    // this.icon = this.skillIcons[skillLevels]
  }

}
