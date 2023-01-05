import { TestBed } from '@angular/core/testing';

import { OverViewSerService } from './over-view-ser.service';

describe('OverViewSerService', () => {
  let service: OverViewSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverViewSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
