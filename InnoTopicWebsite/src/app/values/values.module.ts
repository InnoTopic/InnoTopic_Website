import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*
  (this should be in OrYoL actually)
  a parser that is gonna detect e.g. hashtags, like #ROI. Take inspiration from markdown, wiki. While in OrYoL it will be stored in conjunction with their uuid-s, on saving to db, in case they get renamed
  Paragraphs editable via OrYoL.
  Permalinks to paragraphs, with nice short slugs, which will survive renames, via fragment of uuid and title, e.g. innotopic.com/values#abcd89-coc (separate short-title and sub-title)
  Then I can send those nice URLs during interview processes (even paste during interview calls, to answer questions) to highlight certain aspects and show that they are ingrained in our culture.

  Later: ability to comment on paragraphs/bullet-points

  Values, Principles, Conventions, Patterns, Anti-Patterns
  (Acronyms nicely formatted)
  (Green Ok thumbs-up icon preceding each; and red thumbs-down preceding anti-patterns)
  DRY,
  CoC - Convention Over Configuration,
  SOLID,
  separation of concerns,
  small classes, components, functions, modules
  self-explanatory names over comments, comments should never say *what* is done (that is the role of names), but can explain why or how things are done
  Ikigai,
  Use the best tool for the job (but try to select tools with as wide applicability as possible). Examples: RegEx over manual parsing with find/substring, if possible.
  First worry the most about the things that affect most other things (avoid bikeshedding)
  Avoid "Shaving the Yak" if possible
  Maximize ROI
  In testing, find the sweet spot of ROI, which parts are most likely to break.
  While covering the whole system with e2e tests [ Video with 2 unit tests, no integration tests ] which provide smoke-testing as well implicit/explicit validation of logic.

  Distinguish which things are essential and prioritize them
  Avoid user data loss at all cost (also in Frontend)
  Some things cannot be added as an after-thought, they have to built into the system
  Every few years, technology changes so much that a rewrite might be necessary, but it is beneficial, as the new technologies offer much more.
    Companies which cannot afford or are not willing to do the change - let them die in peace (natural selection), make new room for new, more ambitious companies/products.,
  Ockham's Razor ("Can we do without it, while still maintaining the features we want")

  Preferring top-down design (though taking inspiration from existing pieces of code), driving by call-site code maintainability, readability, ease-of-use (and difficult to misuse).
  Making facades around existing code, including vendor-independence layers, if necessary.

  Demeter's principle

  Orthogonal modules (ui, services, vendor-specific)

  We do believe in abstractions. But a bad abstraction can be worse than no abstraction (making it harder to reason about the software, and making it less flexible)

  Make

  In Angular:
    small modules and components; more than 100 lines of code and ~3 fields is suspicious already

    Make simple things easy and difficult things possible.
    Easy to use, hard to mis-use.

    Trying to get the most of the language (e.g. TypeScript), leveraging generics,

    Prototypes should be written by maximizing short-term #ROI, then solidifying by iterating, using long-term #ROI.
*/

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ValuesModule { }
