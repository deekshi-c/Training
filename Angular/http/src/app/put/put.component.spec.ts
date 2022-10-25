import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutComponent } from './put.component';

describe('PutComponent', () => {
  let component: PutComponent;
  let fixture: ComponentFixture<PutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
