import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyEmployeeComponent } from './modify-employee.component';

describe('ModifyEmployeeComponent', () => {
  let component: ModifyEmployeeComponent;
  let fixture: ComponentFixture<ModifyEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
