import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WHomeComponent } from './w-home.component';

describe('WHomeComponent', () => {
  let component: WHomeComponent;
  let fixture: ComponentFixture<WHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
