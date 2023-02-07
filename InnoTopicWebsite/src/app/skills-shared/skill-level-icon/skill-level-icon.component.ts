import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { UserSkillLevelEnum } from '../../TopicFriendsShared2/skills/skills-core/user-skills';
import { skillsIconsSignal } from '../skill-levels-icons/skill-levels-icons.component';

@Component({
  selector: 'app-skill-level-icon',
  templateUrl: './skill-level-icon.component.html',
  styleUrls: ['./skill-level-icon.component.sass']
})
export class SkillLevelIconComponent implements OnInit {

  @Input() skillLevel: UserSkillLevelEnum
  @Input() iconSize = 12
  get iconUrl()  {
    return `assets/images/icons/signal/${this.skillIconSignal(this.skillLevel)}.svg`
  }

  constructor() { }

  ngOnInit() {
  }

  skillIconSignal(level) {
    return skillsIconsSignal[level]
  }

}
