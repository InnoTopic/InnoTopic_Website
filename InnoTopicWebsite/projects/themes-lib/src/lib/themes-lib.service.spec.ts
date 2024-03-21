import { TestBed } from '@angular/core/testing';

import { ThemesLibService } from './themes-lib.service';

describe('ThemesLibService', () => {
  let service: ThemesLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemesLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
