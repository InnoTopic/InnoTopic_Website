import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { UserSkillLevelsHaveWant } from '../../TopicFriendsShared/skills/skills-core/user-skills';

@Component({
  selector: 'app-topic-skill',
  templateUrl: './topic-skill.component.html',
  styleUrls: ['./topic-skill.component.sass']
})
export class TopicSkillComponent implements OnInit {

  @Input() tId: string;
  @Input() skillLevels: UserSkillLevelsHaveWant

  constructor() { }

  ngOnInit() {
  }

}
