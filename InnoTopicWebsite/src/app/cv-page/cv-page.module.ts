import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Angular2FontawesomeModule } from 'angular2-fontawesome';
import { PersonalInterestsModule } from '../personal-interests/personal-interests.module';
import { WorkExperienceModule } from '../skills/work-experience.module';
import { OtherProfilesModule } from '../TopicFriendsShared/other-profiles/other-profiles.module';
import { WorkProjectsModule } from '../work-projects/work-projects.module';
import { CvPageComponent } from './cv-page.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { ExternalProfilesComponent } from './external-profiles/external-profiles.component';
import { TechGraphComponent } from './tech-graph/tech-graph.component';
import { WorldMapComponent } from './world-map/world-map.component';
import { Logo3dComponent } from './logo3d/logo3d.component';
import { TechGraphD3Component } from './tech-graph-d3/tech-graph-d3.component';

@NgModule({
  declarations: [CvPageComponent, PersonalDataComponent, ExternalProfilesComponent, TechGraphComponent, WorldMapComponent, Logo3dComponent, TechGraphD3Component],
  exports: [
    CvPageComponent,
  ],
  imports: [
    CommonModule,
    WorkExperienceModule,
    WorkProjectsModule,
    PersonalInterestsModule,
    OtherProfilesModule,
    Angular2FontawesomeModule,
  ],
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA,
  // ]
})
export class CvPageModule { }
