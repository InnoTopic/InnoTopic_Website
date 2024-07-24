import { TestBed } from '@angular/core/testing';

import { ShirtGeneratorService } from './shirt-generator.service';

describe('ShirtGeneratorService', () => {
  let service: ShirtGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShirtGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
