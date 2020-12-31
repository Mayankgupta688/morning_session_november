import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstEmployeeComponent } from './first-employee.component';

describe('FirstEmployeeComponent', () => {
  let component: FirstEmployeeComponent;
  let fixture: ComponentFixture<FirstEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
