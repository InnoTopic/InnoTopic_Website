import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {AiEngineFactory} from '../models/ai-engine.factory';

@Injectable({
  providedIn: 'root',
})
export class ShirtGeneratorService {

  private generatedContent = new BehaviorSubject<string[]>([]);

  readonly generatedContent$ = this.generatedContent.asObservable();

  readonly apiUrl = 'localhost:3000';

  constructor(
    private aiEngine: AiEngineFactory,
  ) {
  }

  clearGeneratedContent() {
    this.setGeneratedContent([]);
  }

  setGeneratedContent(value: string[]) {
    this.generatedContent.next(value);
  }

  generateTopics(text: string) {
    return this.aiEngine.prompt(text);
  }

}
