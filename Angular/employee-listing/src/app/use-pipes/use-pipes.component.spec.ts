import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsePipesComponent } from './use-pipes.component';

describe('UsePipesComponent', () => {
  let component: UsePipesComponent;
  let fixture: ComponentFixture<UsePipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsePipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
