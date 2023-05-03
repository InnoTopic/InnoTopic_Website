import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShirtPageRoutingModule } from './shirt-routing.module';

import { ShirtPage } from './shirt.page';
import {SharedModule} from "../shared/shared.module";
import {ShirtComponent} from "./shirt.component";
import {TopicsSharedModule} from "../topics-shared/topics-shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShirtPageRoutingModule,
    SharedModule,
    TopicsSharedModule,
  ],
  declarations: [
    ShirtPage,
    ShirtComponent,
  ]
})
export class ShirtPageModule {}
