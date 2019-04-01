import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicsSharedModule } from '../topics-shared/topics-shared.module';
import { SkillLevelsIconsComponent } from './skill-levels-icons/skill-levels-icons.component';

let declarations = [
  SkillLevelsIconsComponent,
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
