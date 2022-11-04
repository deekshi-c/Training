import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupAdminComponent } from './sup-admin.component';

describe('SupAdminComponent', () => {
  let component: SupAdminComponent;
  let fixture: ComponentFixture<SupAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
