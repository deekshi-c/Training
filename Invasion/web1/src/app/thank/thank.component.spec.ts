import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankComponent } from './thank.component';

describe('ThankComponent', () => {
  let component: ThankComponent;
  let fixture: ComponentFixture<ThankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
