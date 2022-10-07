import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityoneDetailComponent } from './cityone-detail.component';

describe('CityoneDetailComponent', () => {
  let component: CityoneDetailComponent;
  let fixture: ComponentFixture<CityoneDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityoneDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityoneDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
