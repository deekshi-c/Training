import { TestBed } from '@angular/core/testing';

import { LogInGuardGuard } from './log-in-guard.guard';

describe('LogInGuardGuard', () => {
  let guard: LogInGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogInGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
