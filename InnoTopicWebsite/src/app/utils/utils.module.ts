import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyValOrderedPipe } from './KeyValueOrderedPipe';

let exports = [
  KeyValOrderedPipe,
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...exports,
  ],
  exports: exports
})
export class UtilsModule { }
