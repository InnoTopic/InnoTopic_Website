import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesModule } from '../countries/countries.module';
import { SharedModule } from '../shared/shared.module';
import { SkillsSharedModule } from '../skills-shared/skills-shared.module';
import { TopicSkillsModule } from '../topic-skills/topic-skills.module';
import { WorkExperienceByStatusSectionComponent } from './work-experience-by-status-section/work-experience-by-status-section.component';
import { WorkExperienceListComponent } from './work-experience-list/work-experience-list.component';
import { WorkExperienceComponent } from './work-experience.component';

let declarations = [
  WorkExperienceComponent,
  WorkExperienceListComponent,
  WorkExperienceByStatusSectionComponent,
]

@NgModule({
  imports: [
    CommonModule,
    TopicSkillsModule,
    CountriesModule,
    SharedModule,
  ],
  declarations: declarations,
  exports: declarations
})
export class WorkExperienceModule { }
