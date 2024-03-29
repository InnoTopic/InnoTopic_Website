import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CvPageModule } from './cv-page/cv-page.module';
import { SharedModule } from './shared/shared.module';
import { TopicSkillsModule } from './topic-skills/topic-skills.module';
// import { WorkExperienceByStatusSectionComponent } from './skills/work-experience-by-status-section/work-experience-by-status-section.component';
// import { WorkExperienceListComponent } from './skills/work-experience-list/work-experience-list.component';
// import { WorkExperienceComponent } from './skills/work-experience.component';
import { TopicsSharedModule } from './topics-shared/topics-shared.module';
import { PoweredByComponent } from './powered-by/powered-by.component';
import { EpicEliteComponent } from './jobs/epic-elite/epic-elite.component';
import { ShirtComponent } from './shirt/shirt.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



// var log4js = require('log4js');
// var logger = log4js.getLogger();
// logger.level = 'debug';
// logger.debug("Some debug messages");

@NgModule({
  declarations: [
    AppComponent,
    PoweredByComponent,
    EpicEliteComponent,
    ShirtComponent,

    // WorkExperienceComponent,
    // WorkExperienceListComponent,
    // WorkExperienceByStatusSectionComponent,

  ],
  imports: [
    CoreModule,
    SharedModule,
    CvPageModule,
    TopicsSharedModule,
    TopicSkillsModule,
    MatButtonModule,

    MatRadioModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatExpansionModule,
    FontAwesomeModule

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
