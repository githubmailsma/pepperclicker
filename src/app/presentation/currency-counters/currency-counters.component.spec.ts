import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyCountersComponent } from './currency-counters.component';

describe('CurrencyCountersComponent', () => {
  let component: CurrencyCountersComponent;
  let fixture: ComponentFixture<CurrencyCountersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyCountersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyCountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
