import { NgModule } from '@angular/core';
import {ThemesLibComponent} from "./themes-lib.component";
import {AppLogoComponent} from "./app-logo/app-logo.component";



@NgModule({
  declarations: [
    ThemesLibComponent,
    AppLogoComponent,
  ],
  imports: [
  ],
  exports: [
    ThemesLibComponent,
    AppLogoComponent,
  ],
})
export class ThemesLibModule { }
