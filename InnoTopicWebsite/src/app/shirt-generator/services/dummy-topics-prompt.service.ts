import { Injectable } from '@angular/core';
import { AbstractTopicsPromptService } from '../models/abstract-topics-prompt.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyTopicsPromptService extends AbstractTopicsPromptService {

  constructor() {
    super()
  }

  public override prompt(text: string): Observable<string[]> {
    // return of(['Angular', 'React', 'Vue.js', 'Electron', 'Express.js', 'MySQL']);
    return of(['Angular', 'React', 'Vue.js', 'Electron', 'Express.js', 'MySQL'].filter(skill => skill.toLocaleLowerCase().includes(text.trim().toLocaleLowerCase())));
  }

}
