import { Component, OnInit, Input } from '@angular/core';
import { TopicInterest } from '../../topics-shared/topic-tag/topic-tag.component';
import { UserSkillLevelsHaveWant } from '../../user-profile-shared/user-skills.service';

@Component({
  selector: 'app-skill-level-label',
  templateUrl: './skill-level-label.component.html',
  styleUrls: ['./skill-level-label.component.scss']
})
export class SkillLevelLabelComponent implements OnInit {

  @Input() topic: TopicInterest;
  @Input() skillLevels: UserSkillLevelsHaveWant;
  icon:string;
  // text:string = "set";
  public isTextVisible:boolean = true;

  public skillsIcons = {
    none:"battery-empty",
    beginner:"battery-quarter",
    intermediate:"battery-half",
    advanced:"battery-three-quarters",
    expert:"battery-full"
  }

  constructor() {
    /// if(topic in userSkills){
      // text = level;
      // icon = skillsIcons.whatever;
    ///} else {
      this.icon = this.skillsIcons.none;
      //}

  }

  ngOnInit() {
    if ( this.skillLevels ) {
      // console.log('SkillLevelLabelComponent, skillLevels', this.skillLevels)
      this.icon = this.skillsIcons[this.skillLevels.have as any /* HACK */]
      // todo; want
    }
    // this.icon = this.skillIcons[skillLevels]
  }

}
