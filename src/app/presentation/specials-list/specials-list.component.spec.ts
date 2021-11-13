import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialsListComponent } from './specials-list.component';

describe('SpecialsListComponent', () => {
  let component: SpecialsListComponent;
  let fixture: ComponentFixture<SpecialsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
