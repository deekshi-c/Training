import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityOneComponent } from './city-one.component';

describe('CityOneComponent', () => {
  let component: CityOneComponent;
  let fixture: ComponentFixture<CityOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
