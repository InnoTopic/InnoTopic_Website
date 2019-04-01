import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicsService } from './topics.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  providers: [
    TopicsService,
  ]
})
export class TopicsCoreModule { }
