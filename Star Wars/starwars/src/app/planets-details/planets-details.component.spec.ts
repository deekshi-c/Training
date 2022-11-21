import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsDetailsComponent } from './planets-details.component';

describe('PlanetsDetailsComponent', () => {
  let component: PlanetsDetailsComponent;
  let fixture: ComponentFixture<PlanetsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
