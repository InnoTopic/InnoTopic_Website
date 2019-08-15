import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesModule } from '../countries/countries.module';
import { SharedModule } from '../shared/shared.module';
import { WorkExperienceModule } from '../skills/work-experience.module';
import { WorkProjectsSectionComponent } from './work-projects-section/work-projects-section.component';

@NgModule({
  declarations: [
    WorkProjectsSectionComponent
  ],
  imports: [
    CommonModule,
    WorkExperienceModule,
    SharedModule,
    CountriesModule,
  ],
  exports: [
    WorkProjectsSectionComponent,
  ]
})
export class WorkProjectsModule { }
