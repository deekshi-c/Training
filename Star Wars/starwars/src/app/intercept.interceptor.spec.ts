import { TestBed } from '@angular/core/testing';

import { InterceptInterceptor } from './intercept.interceptor';

describe('InterceptInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InterceptInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InterceptInterceptor = TestBed.inject(InterceptInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
