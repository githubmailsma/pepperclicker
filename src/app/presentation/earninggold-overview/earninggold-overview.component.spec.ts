import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingOverviewComponent } from './earninggold-overview.component';

describe('TrainingOverviewComponent', () => {
  let component: TrainingOverviewComponent;
  let fixture: ComponentFixture<TrainingOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
