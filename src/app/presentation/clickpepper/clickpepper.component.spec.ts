import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickpepperComponent } from './clickpepper.component';

describe('ClickpepperComponent', () => {
  let component: ClickpepperComponent;
  let fixture: ComponentFixture<ClickpepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickpepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickpepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
