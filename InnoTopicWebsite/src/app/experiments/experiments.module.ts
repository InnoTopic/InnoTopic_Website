import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExperimentsPageRoutingModule } from './experiments-routing.module';

import { ExperimentsPage } from './experiments.page';
import {SignalExampleComponent} from "./signals/signal-example.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExperimentsPageRoutingModule
  ],
  declarations: [ExperimentsPage, SignalExampleComponent]
})
export class ExperimentsPageModule {}
