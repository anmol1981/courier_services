import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmpSalaryComponent } from './view-emp-salary.component';

describe('ViewEmpSalaryComponent', () => {
  let component: ViewEmpSalaryComponent;
  let fixture: ComponentFixture<ViewEmpSalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEmpSalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmpSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
