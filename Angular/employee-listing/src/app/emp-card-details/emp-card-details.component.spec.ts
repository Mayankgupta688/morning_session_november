import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpCardDetailsComponent } from './emp-card-details.component';

describe('EmpCardDetailsComponent', () => {
  let component: EmpCardDetailsComponent;
  let fixture: ComponentFixture<EmpCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpCardDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
