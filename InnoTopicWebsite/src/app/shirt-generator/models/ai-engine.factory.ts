import { Observable } from "rxjs";

// AbstractTopicsPromptService
export abstract class AiEngineFactory {
  public abstract prompt(text: string): Observable<string[]>;
}
