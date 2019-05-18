import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryFlagComponent } from './country-flag/country-flag.component';
import { FlagsComponent } from './flags/flags.component';

let declarations = [
  CountryFlagComponent,
  FlagsComponent,
];

@NgModule({
  declarations: declarations,
  imports: [
    CommonModule,
  ],
  exports: [
    ...declarations,
  ]
})
export class CountriesModule { }
