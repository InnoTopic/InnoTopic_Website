import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CountriesModule } from '../countries/countries.module';
import { SharedModule } from '../shared/shared.module';
import { WorkExperienceModule } from '../skills/work-experience.module';
import { UtilsModule } from '../utils/utils.module';
import { WorkProjectsSectionComponent } from './work-projects-section/work-projects-section.component';
import { WorkProjectComponent } from './work-projects-section/work-project/work-project.component';

@NgModule({
  declarations: [
    WorkProjectsSectionComponent,
    WorkProjectComponent
  ],
  imports: [
    CommonModule,
    WorkExperienceModule,
    SharedModule,
    CountriesModule,
    UtilsModule,
    FontAwesomeModule,
  ],
  exports: [
    WorkProjectsSectionComponent,
  ]
})
export class WorkProjectsModule { }
