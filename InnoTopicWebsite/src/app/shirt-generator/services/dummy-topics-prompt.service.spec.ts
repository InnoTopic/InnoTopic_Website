import { TestBed } from '@angular/core/testing';

import { DummyTopicsPromptService } from './dummy-topics-prompt.service';

describe('DummyTopicsPromptService', () => {
  let service: DummyTopicsPromptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyTopicsPromptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
