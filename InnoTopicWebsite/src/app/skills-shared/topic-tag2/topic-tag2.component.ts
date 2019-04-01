import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { UserSkillLevelsHaveWant } from '../../user-profile-shared/user-skills.service';

/* TODO: rename: TopicSkillComponent */
@Component({
  selector: 'app-topic-tag2',
  templateUrl: './topic-tag2.component.html',
  styleUrls: ['./topic-tag2.component.scss']
})
export class TopicTag2Component implements OnInit {

  @Input() tId: string;
  @Input() skillLevels: UserSkillLevelsHaveWant

  constructor() { }

  ngOnInit() {
  }

}
