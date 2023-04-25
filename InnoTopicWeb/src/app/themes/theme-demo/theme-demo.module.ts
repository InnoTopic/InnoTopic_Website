import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThemeDemoPageRoutingModule } from './theme-demo-routing.module';

import { ThemeDemoPage } from './theme-demo.page';
import {ThemeConfigComponent} from "../theme-config/theme-config.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ThemeDemoPageRoutingModule
  ],
  declarations: [
    ThemeDemoPage,
    ThemeConfigComponent,
  ]
})
export class ThemeDemoPageModule {}
