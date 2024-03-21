import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInterestsModule } from '../personal-interests/personal-interests.module';
import { WorkExperienceModule } from '../skills/work-experience.module';
import { OtherProfilesModule } from '../TopicFriendsShared3/other-profiles/other-profiles.module';
import { WorkProjectsModule } from '../work-projects/work-projects.module';
import { CvPageComponent } from './cv-page.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { ExternalProfilesComponent } from './external-profiles/external-profiles.component';
import { TechGraphComponent } from './tech-graph/tech-graph.component';
import { WorldMapComponent } from './world-map/world-map.component';
import { Logo3dComponent } from './logo3d/logo3d.component';
import { TechGraphD3Component } from './tech-graph-d3/tech-graph-d3.component';
import { TechGraphD3Index1Component } from './tech-graph-d3-index1/tech-graph-d3-index1.component';
import { TopicsGraphComponent } from './topics-graph/topics-graph.component';
import { VideoCvComponent } from './video-cv/video-cv.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    CvPageComponent,
    PersonalDataComponent,
    ExternalProfilesComponent,
    TechGraphComponent,
    WorldMapComponent,
    Logo3dComponent,
    TechGraphD3Component,
    TechGraphD3Index1Component,
    TopicsGraphComponent,
    VideoCvComponent
  ],
  exports: [
    CvPageComponent,
  ],
  imports: [
    CommonModule,
    WorkExperienceModule,
    WorkProjectsModule,
    PersonalInterestsModule,
    OtherProfilesModule,
    SharedModule,
  ],
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA,
  // ]
})
export class CvPageModule1 { }
