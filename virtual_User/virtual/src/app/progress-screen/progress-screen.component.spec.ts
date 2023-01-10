import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressScreenComponent } from './progress-screen.component';

describe('ProgressScreenComponent', () => {
  let component: ProgressScreenComponent;
  let fixture: ComponentFixture<ProgressScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
