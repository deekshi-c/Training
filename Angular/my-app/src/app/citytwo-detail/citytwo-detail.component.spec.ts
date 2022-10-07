import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitytwoDetailComponent } from './citytwo-detail.component';

describe('CitytwoDetailComponent', () => {
  let component: CitytwoDetailComponent;
  let fixture: ComponentFixture<CitytwoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitytwoDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitytwoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
