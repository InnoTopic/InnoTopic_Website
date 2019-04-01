import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicsSharedModule } from '../topics-shared/topics-shared.module';
import { SkillLevelLabelComponent } from './skill-level-label/skill-level-label.component';
import { TopicSkillComponent } from './topic-skill/topic-skill.component';

let declarations = [
  SkillLevelLabelComponent,
  TopicSkillComponent,
];

@NgModule({
  declarations: declarations,
  imports: [
    CommonModule,
    TopicsSharedModule,
  ],
  exports: [
    ...declarations,
    TopicsSharedModule,
  ]
})
export class SkillsSharedModule { }
