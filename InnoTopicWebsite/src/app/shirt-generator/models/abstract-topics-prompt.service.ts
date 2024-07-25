import { Observable } from "rxjs";

export abstract class AbstractTopicsPromptService {
  public abstract prompt(text: string): Observable<string[]>;
}
