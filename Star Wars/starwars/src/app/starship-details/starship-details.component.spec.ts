import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipDetailsComponent } from './starship-details.component';

describe('StarshipDetailsComponent', () => {
  let component: StarshipDetailsComponent;
  let fixture: ComponentFixture<StarshipDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarshipDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarshipDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
