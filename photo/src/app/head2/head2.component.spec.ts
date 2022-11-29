import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Head2Component } from './head2.component';

describe('Head2Component', () => {
  let component: Head2Component;
  let fixture: ComponentFixture<Head2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Head2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Head2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
