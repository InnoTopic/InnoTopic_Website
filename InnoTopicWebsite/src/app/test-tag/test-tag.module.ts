import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestTagPageRoutingModule } from './test-tag-routing.module';

import { TestTagPage } from './test-tag.page';
import {TopicSkillsModule} from "../topic-skills/topic-skills.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestTagPageRoutingModule,
    TopicSkillsModule
  ],
  declarations: [TestTagPage]
})
export class TestTagPageModule {}
