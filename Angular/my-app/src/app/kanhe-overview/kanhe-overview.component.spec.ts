import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanheOverviewComponent } from './kanhe-overview.component';

describe('KanheOverviewComponent', () => {
  let component: KanheOverviewComponent;
  let fixture: ComponentFixture<KanheOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanheOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KanheOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
