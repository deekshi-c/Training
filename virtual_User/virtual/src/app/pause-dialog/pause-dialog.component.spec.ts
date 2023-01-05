import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PauseDialogComponent } from './pause-dialog.component';

describe('PauseDialogComponent', () => {
  let component: PauseDialogComponent;
  let fixture: ComponentFixture<PauseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PauseDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PauseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
