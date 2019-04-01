import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TopicsCoreModule } from '../topics-core/topics-core.module';
import { TopicLogoComponent } from './topic-logo/topic-logo.component';
import { TopicTag2Component } from '../skills-shared/topic-tag2/topic-tag2.component'
import { TopicTagComponent } from './topic-tag/topic-tag.component';

let declarations = [
  TopicLogoComponent,
  TopicTagComponent,
];

let imports = [
  CommonModule,
  TopicsCoreModule,
  SharedModule,
];

@NgModule({
  imports: imports,
  declarations: declarations,
  exports: [
    ...declarations,
    ...imports,
  ]
})
export class TopicsSharedModule { }
