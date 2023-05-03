import {
  ApplicationRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  UserSkillLevelsHaveWant,
  UserSkillLevelsHaveWant2,
} from '../../TopicFriendsShared3/skills/skills-core/user-skills';

@Component({
  selector: 'app-topic-skill',
  templateUrl: './topic-skill.component.html',
  styleUrls: ['./topic-skill.component.sass']
})
export class TopicSkillComponent implements OnInit {

  @Input() tId!: string;

  @Input() skillLevels!: UserSkillLevelsHaveWant2

  @Input() showLogo!: boolean

  constructor(
    public app: ApplicationRef
  ) {

  }

  ngOnInit() {
    // this.app.tick()
  }

  ngAfterViewInit() {
    // this.app.tick()
  }

}
