import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { WorkExperienceModule } from '../work-experience/work-experience.module';
import { WorkProjectsSectionComponent } from './work-projects-section/work-projects-section.component';

@NgModule({
  declarations: [
    WorkProjectsSectionComponent
  ],
  imports: [
    CommonModule,
    WorkExperienceModule,
    SharedModule,
  ],
  exports: [
    WorkProjectsSectionComponent,
  ]
})
export class WorkProjectsModule { }
