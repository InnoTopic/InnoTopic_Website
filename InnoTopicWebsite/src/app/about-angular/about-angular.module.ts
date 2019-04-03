import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutAngularRoutingModule } from './about-angular-routing.module';
import { AboutAngularComponent } from './about-angular.component';

@NgModule({
  declarations: [AboutAngularComponent],
  imports: [
    CommonModule,
    AboutAngularRoutingModule
  ]
})
export class AboutAngularModule { }
