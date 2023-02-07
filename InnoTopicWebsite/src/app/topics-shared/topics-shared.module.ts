import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TopicsCoreModule } from '../TopicFriendsShared2/topics-core/topics-core.module';
import { TopicLogoComponent } from './topic-logo/topic-logo.component';
import { TopicTagComponent } from './topic-tag/topic-tag.component';

/* test */

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
