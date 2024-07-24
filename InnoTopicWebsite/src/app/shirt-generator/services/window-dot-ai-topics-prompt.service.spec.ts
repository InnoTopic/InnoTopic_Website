import { TestBed } from '@angular/core/testing';

import { WindowDotAiTopicsPromptService } from './window-dot-ai-topics-prompt.service';

describe('WindowDotAiTopicsPromptService', () => {
  let service: WindowDotAiTopicsPromptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowDotAiTopicsPromptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
