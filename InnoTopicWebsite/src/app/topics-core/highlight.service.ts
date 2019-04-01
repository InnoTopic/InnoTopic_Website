import { Injectable } from '@angular/core';
import {
  Observable,
  ReplaySubject,
  Subject,
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HighlightService {

  highlight$: Subject<string> = new ReplaySubject<string>(1)

  constructor() { }

  setHighlight(id) {
    this.highlight$.next(id)
  }
}
