import { TestBed } from '@angular/core/testing';

import { TestGuardGuard } from './test-guard.guard';

describe('TestGuardGuard', () => {
  let guard: TestGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TestGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
