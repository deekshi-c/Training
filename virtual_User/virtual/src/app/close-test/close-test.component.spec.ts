import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseTestComponent } from './close-test.component';

describe('CloseTestComponent', () => {
  let component: CloseTestComponent;
  let fixture: ComponentFixture<CloseTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloseTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
