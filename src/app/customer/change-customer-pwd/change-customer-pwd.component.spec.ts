import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCustomerPwdComponent } from './change-customer-pwd.component';

describe('ChangeCustomerPwdComponent', () => {
  let component: ChangeCustomerPwdComponent;
  let fixture: ComponentFixture<ChangeCustomerPwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeCustomerPwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeCustomerPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
