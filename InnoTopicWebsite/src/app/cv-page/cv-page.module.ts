import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInterestsModule } from '../personal-interests/personal-interests.module';
import { WorkExperienceModule } from '../work-experience/work-experience.module';
import { CvPageComponent } from './cv-page.component';

@NgModule({
  declarations: [CvPageComponent],
  exports: [
    CvPageComponent,
  ],
  imports: [
    CommonModule,
    WorkExperienceModule,
    PersonalInterestsModule,
  ],
})
export class CvPageModule { }
