import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CvPagePrintPageRoutingModule } from './cv-page-print-routing.module';

import { CvPagePrintPage } from './cv-page-print.page';
import {CvPageModule} from "../cv/cv.module";
import {CvPageModule1} from "../cv-page/cv-page.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CvPagePrintPageRoutingModule,
    CvPageModule,
    CvPageModule1
  ],
  declarations: [CvPagePrintPage]
})
export class CvPagePrintPageModule {}
