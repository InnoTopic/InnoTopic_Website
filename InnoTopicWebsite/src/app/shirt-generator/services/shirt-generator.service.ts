import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {AbstractTopicsPromptService} from '../models/abstract-topics-prompt.service';

@Injectable({
  providedIn: 'root',
})
export class ShirtGeneratorService {

  private generatedContent = new BehaviorSubject<string[]>([]);

  readonly generatedContent$ = this.generatedContent.asObservable();

  constructor(
    private aiEngine: AbstractTopicsPromptService,
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
