import { Injectable } from '@angular/core';
import { AiEngineFactory } from '../models/ai-engine.factory';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyTopicsPromptService extends AiEngineFactory {

  constructor() {
    super()
  }

  public override prompt(text: string): Observable<string[]> {
    // return of(['Angular', 'React', 'Vue.js', 'Electron', 'Express.js', 'MySQL']);
    return of(['Angular', 'React', 'Vue.js', 'Electron', 'Express.js', 'MySQL'].filter(skill => skill.toLocaleLowerCase().includes(text.trim().toLocaleLowerCase())));
  }

}
