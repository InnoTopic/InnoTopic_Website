import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInterestsModule } from '../personal-interests/personal-interests.module';
import { WorkExperienceModule } from '../skills/work-experience.module';
import { OtherProfilesModule } from '../TopicFriendsShared/other-profiles/other-profiles.module';
import { WorkProjectsModule } from '../work-projects/work-projects.module';
import { CvPageComponent } from './cv-page.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { ExternalProfilesComponent } from './external-profiles/external-profiles.component';

@NgModule({
  declarations: [CvPageComponent, PersonalDataComponent, ExternalProfilesComponent],
  exports: [
    CvPageComponent,
  ],
  imports: [
    CommonModule,
    WorkExperienceModule,
    WorkProjectsModule,
    PersonalInterestsModule,
    OtherProfilesModule,
  ],
})
export class CvPageModule { }
