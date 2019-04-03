import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutWebRoutingModule } from './about-web-routing.module';
import { AboutWebComponent } from './about-web.component';

@NgModule({
  declarations: [AboutWebComponent],
  imports: [
    CommonModule,
    AboutWebRoutingModule
  ]
})
export class AboutWebModule { }
