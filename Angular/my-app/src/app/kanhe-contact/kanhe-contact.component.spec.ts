import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanheContactComponent } from './kanhe-contact.component';

describe('KanheContactComponent', () => {
  let component: KanheContactComponent;
  let fixture: ComponentFixture<KanheContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanheContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KanheContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
