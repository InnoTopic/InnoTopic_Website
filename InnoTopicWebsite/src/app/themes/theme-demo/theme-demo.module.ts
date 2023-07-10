import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThemeDemoPageRoutingModule } from './theme-demo-routing.module';

import { ThemeDemoPage } from './theme-demo.page';
import {ThemeConfigComponent} from "../theme-config/theme-config.component";
import {ChipComponent} from "../../chip/chip.component";
import {ThemeSamplesComponent} from "../theme-samples/theme-samples.component";
import {TintedSwatchesComponent} from "../tinted-swatches/tinted-swatches.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ThemeDemoPageRoutingModule
  ],
  exports: [
    ThemeConfigComponent,
    ChipComponent
  ],
  declarations: [
    ThemeDemoPage,
    ThemeConfigComponent,
    ChipComponent,
    ThemeSamplesComponent,
    TintedSwatchesComponent,
  ]
})
export class ThemeDemoPageModule {}
