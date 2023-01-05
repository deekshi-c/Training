import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCourseComponent } from './my-course.component';

describe('MyCourseComponent', () => {
  let component: MyCourseComponent;
  let fixture: ComponentFixture<MyCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
