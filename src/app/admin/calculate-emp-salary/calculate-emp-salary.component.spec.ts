import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateEmpSalaryComponent } from './calculate-emp-salary.component';

describe('CalculateEmpSalaryComponent', () => {
  let component: CalculateEmpSalaryComponent;
  let fixture: ComponentFixture<CalculateEmpSalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateEmpSalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateEmpSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
