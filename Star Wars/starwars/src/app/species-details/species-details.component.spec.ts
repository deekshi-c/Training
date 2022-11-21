import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesDetailsComponent } from './species-details.component';

describe('SpeciesDetailsComponent', () => {
  let component: SpeciesDetailsComponent;
  let fixture: ComponentFixture<SpeciesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeciesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeciesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
