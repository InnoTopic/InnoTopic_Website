import { Injectable } from '@angular/core';
import { AbstractTopicsPromptService } from '../models/abstract-topics-prompt.service';
import { defer, from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowDotAiTopicsPromptService extends AbstractTopicsPromptService {

  constructor() {
    super();
  }

  public override prompt(text: string): Observable<string[]> {
    return defer(() => from(
      new Promise<string[]>(async (resolve, reject) => {
        const notSupportedError = new Error('Browser is not AI supported');
        if (window.ai) {
          const support = await window.ai.canCreateTextSession();
          if (support === 'no') {
            reject(notSupportedError);
            return;
          }
          const session = await window.ai.createTextSession();
          try {
            const result = await session.prompt(text);
            console.log(`Window AI Prompt Result: `);
            console.log(result);
            const splitWords = result.split(',')
            resolve(splitWords);
          } catch (e) {
            reject(new Error('Something went wrong'));
          }
          session.destroy();
        }
        reject(notSupportedError);
      }),
    ));
  }

}
