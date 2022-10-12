import { TestBed } from '@angular/core/testing';

import { EnrollService } from './enroll.service';

describe('EnrollService', () => {
  let service: EnrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
