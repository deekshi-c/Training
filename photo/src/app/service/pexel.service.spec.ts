import { TestBed } from '@angular/core/testing';

import { PexelService } from './pexel.service';

describe('PexelService', () => {
  let service: PexelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PexelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
