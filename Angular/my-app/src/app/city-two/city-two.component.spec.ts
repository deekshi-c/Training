import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityTwoComponent } from './city-two.component';

describe('CityTwoComponent', () => {
  let component: CityTwoComponent;
  let fixture: ComponentFixture<CityTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
