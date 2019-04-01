import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesModule } from '../countries/countries.module';
import { SkillsSharedModule } from '../skills-shared/skills-shared.module';
import { WorkExperienceListComponent } from './work-experience-list/work-experience-list.component';
import { WorkExperienceComponent } from './work-experience.component';

let declarations = [
  WorkExperienceComponent,
  WorkExperienceListComponent,
];

@NgModule({
  imports: [
    CommonModule,
    SkillsSharedModule,
    CountriesModule,
  ],
  declarations: declarations,
  exports: declarations
})
export class WorkExperienceModule { }
