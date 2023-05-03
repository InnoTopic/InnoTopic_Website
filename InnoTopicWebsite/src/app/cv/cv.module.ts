import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CvPageRoutingModule } from './cv-routing.module';

import { CvPage } from './cv.page';
import {CvPageModule1} from "../cv-page/cv-page.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CvPageRoutingModule,
    CvPageModule1,
  ],
  declarations: [CvPage]
})
export class CvPageModule {}
