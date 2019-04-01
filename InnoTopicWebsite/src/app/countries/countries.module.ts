import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryFlagComponent } from './country-flag/country-flag.component';

let declarations = [
  CountryFlagComponent,
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
