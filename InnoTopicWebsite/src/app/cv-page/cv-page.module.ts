import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInterestsModule } from '../personal-interests/personal-interests.module';
import { WorkExperienceModule } from '../skills/work-experience.module';
import { WorkProjectsModule } from '../work-projects/work-projects.module';
import { CvPageComponent } from './cv-page.component';

@NgModule({
  declarations: [CvPageComponent],
  exports: [
    CvPageComponent,
  ],
  imports: [
    CommonModule,
    WorkExperienceModule,
    WorkProjectsModule,
    PersonalInterestsModule,
  ],
})
export class CvPageModule { }
