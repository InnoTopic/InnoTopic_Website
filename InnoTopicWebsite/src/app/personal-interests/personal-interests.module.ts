import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInterestsComponent } from './personal-interests.component';

@NgModule({
  declarations: [PersonalInterestsComponent],
  exports: [
    PersonalInterestsComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class PersonalInterestsModule { }
