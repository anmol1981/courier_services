import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSalDetailsComponent } from './employee-sal-details.component';

describe('EmployeeSalDetailsComponent', () => {
  let component: EmployeeSalDetailsComponent;
  let fixture: ComponentFixture<EmployeeSalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeSalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
