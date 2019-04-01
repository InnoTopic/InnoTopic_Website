import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*
  Values, Principles, Conventions, Patterns, Anti-Patterns
  (Acronyms nicely formatted)
  (Green Ok thumbs-up icon preceding each; and red thumbs-down preceding anti-patterns)
  DRY,
  CoC - Convention Over Configuration,
  SOLID,
  separation of concerns,
  small classes, components, functions, modules
  self-explanatory names over comments,
  Ikigai,
  Use the best tool for the job (but try to select tools with as wide applicability as possible)
  First worry the most about the things that affect most other things (avoid bikeshedding)
  Avoid "Shaving the Yak" if possible
  Maximize ROI
  In testing, find the sweet spot of ROI, which parts are most likely to break
  Distinguish which things are essential and prioritize them
  Avoid user data loss at all cost (also in Frontend)
  Some things cannot be added as an after-thought, they have to built into the system
  Every few years, technology changes so much that a rewrite might be necessary, but it is beneficial, as the new technologies offer much more.
    Companies which cannot afford or are not willing to do the change - let them die in peace (natural selection), make new room for new, more ambitious companies/products.,
  Ockham's Razor ("Can we do without it, while still maintiaing the features we want")

  In Angular:
    small modules and compnonents
*/

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ValuesModule { }
