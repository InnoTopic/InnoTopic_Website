import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicsSharedModule } from '../topics-shared/topics-shared.module';
import { SkillLevelLabelComponent } from './skill-level-label/skill-level-label.component';
import { TopicTag2Component } from './topic-tag2/topic-tag2.component';

@NgModule({
  declarations: [
    SkillLevelLabelComponent,
    TopicTag2Component,
  ],
  imports: [
    CommonModule,
    TopicsSharedModule,
  ],
  exports: [
    TopicsSharedModule,
  ]
})
export class SkillsSharedModule { }
